/* global Office, Word, XLSX, Chart */

// Holds the parsed workbook (via SheetJS) for the file the user picked with Browse.
// Word add-ins have no access to a live Excel workbook (Excel.run only works inside
// an Excel-hosted add-in), so the .xlsx file is read and parsed entirely client-side.
let currentWorkbook = null;

// Initialize Office add-in
Office.onReady((info) => {
    if (info.host === Office.HostType.Word) {
        logStatus('Add-in loaded successfully', 'success');
        
        // Attach event listeners
        document.getElementById('updateBtn').addEventListener('click', updateAll);
        document.getElementById('insertChartBtn').addEventListener('click', insertChartOnly);
        document.getElementById('updateTextBtn').addEventListener('click', updateTextOnly);
        document.getElementById('browseBtn').addEventListener('click', browsePath);
        document.getElementById('fileInput').addEventListener('change', handleFileSelected);
    }
});

/**
 * Main function: Update both chart and text
 */
async function updateAll() {
    logStatus('Starting full update...', 'info');
    try {
        await insertChartOnly();
        await updateTextOnly();
        logStatus('Update completed successfully!', 'success');
    } catch (error) {
        logStatus(`Update failed: ${error.message}`, 'error');
        console.error(error);
    }
}

/**
 * Insert chart from Excel data as an image into Word.
 * Excel's own chart object isn't readable from a Word add-in, so this renders
 * an equivalent chart client-side (Chart.js) from the same underlying data
 * and inserts that rendered image.
 */
async function insertChartOnly() {
    const chartName = document.getElementById('chartName').value;

    if (!currentWorkbook) {
        logStatus('Please browse for an Excel file first', 'warning');
        return;
    }

    if (!chartName) {
        logStatus('Please specify a chart name', 'warning');
        return;
    }

    logStatus('Building chart from Excel data...', 'info');

    try {
        const chartImage = await renderChartImage(chartName);
        await insertImageIntoWord(chartImage, chartName);
        logStatus(`Chart "${chartName}" inserted successfully`, 'success');
    } catch (error) {
        logStatus(`Failed to insert chart: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Update text placeholder with a value read from the parsed Excel workbook
 */
async function updateTextOnly() {
    const cellAddress = document.getElementById('cellAddress').value;
    const placeholder = document.getElementById('placeholder').value;

    if (!currentWorkbook) {
        logStatus('Please browse for an Excel file first', 'warning');
        return;
    }

    if (!cellAddress) {
        logStatus('Please specify a cell address or named range', 'warning');
        return;
    }

    if (!placeholder) {
        logStatus('Please specify a text placeholder', 'warning');
        return;
    }

    logStatus('Reading cell value from Excel...', 'info');

    try {
        const cellValue = getCellValue(cellAddress);

        if (cellValue === null || cellValue === undefined) {
            throw new Error(`Could not read value from ${cellAddress}`);
        }

        logStatus(`Retrieved value: ${cellValue}`, 'info');

        // Replace placeholder in Word
        await replaceTextInWord(placeholder, cellValue);

        logStatus(`Replaced "${placeholder}" with "${cellValue}"`, 'success');
    } catch (error) {
        logStatus(`Failed to update text: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Render a bar chart (via Chart.js) from the first two columns of data
 * (Category / Amount) on the first sheet of the parsed workbook, starting
 * at row 2 (row 1 is treated as the header row). Returns a base64 PNG
 * (no "data:image/png;base64," prefix) suitable for Word's
 * insertInlinePictureFromBase64.
 */
async function renderChartImage(chartName) {
    const sheetName = currentWorkbook.SheetNames[0];
    const sheet = currentWorkbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    if (rows.length < 2) {
        throw new Error(`Not enough data on sheet "${sheetName}" to build a chart`);
    }

    const dataRows = rows.slice(1).filter((row) => row[0] !== undefined && row[0] !== '');
    const labels = dataRows.map((row) => String(row[0]));
    const values = dataRows.map((row) => Number(row[1]) || 0);

    const canvas = document.getElementById('chartCanvas');
    const ctx = canvas.getContext('2d');

    // Destroy any previous chart instance bound to this canvas before redrawing
    if (window.__excelUpdaterChart) {
        window.__excelUpdaterChart.destroy();
    }

    window.__excelUpdaterChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Amount',
                data: values,
                backgroundColor: '#4472C4'
            }]
        },
        options: {
            responsive: false,
            animation: false,
            plugins: {
                title: { display: true, text: chartName }
            }
        }
    });

    // Chart.js renders asynchronously on the next animation frame; wait for it
    // before reading back the canvas pixels.
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    const dataUrl = canvas.toDataURL('image/png');
    return dataUrl.replace(/^data:image\/png;base64,/, '');
}

/**
 * Get a cell value from the parsed workbook, by named range (e.g. "TotalBudget")
 * or by a plain cell address (e.g. "A1", or "Sheet1!A1").
 */
function getCellValue(cellAddress) {
    // Named range lookup first
    const definedNames = (currentWorkbook.Workbook && currentWorkbook.Workbook.Names) || [];
    const namedRange = definedNames.find((n) => n.Name === cellAddress);

    let sheetName;
    let cellRef;

    if (namedRange) {
        const ref = namedRange.Ref.replace(/\$/g, '');
        const parts = ref.split('!');
        sheetName = parts[0];
        cellRef = parts[1];
    } else if (cellAddress.includes('!')) {
        const parts = cellAddress.split('!');
        sheetName = parts[0];
        cellRef = parts[1];
    } else {
        sheetName = currentWorkbook.SheetNames[0];
        cellRef = cellAddress;
    }

    const sheet = currentWorkbook.Sheets[sheetName];
    if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found in workbook`);
    }

    const cell = sheet[cellRef];
    if (!cell) {
        throw new Error(`Cell "${cellRef}" not found on sheet "${sheetName}"`);
    }

    return formatCellValue(cell.v);
}

/**
 * Format cell value for display
 */
function formatCellValue(value) {
    if (typeof value === 'number') {
        // Format as currency if it looks like a large number
        if (Math.abs(value) >= 1000) {
            return value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        } else {
            return value.toLocaleString('en-US');
        }
    }
    return String(value);
}

/**
 * Insert image into Word document
 */
async function insertImageIntoWord(base64Image, imageName) {
    return Word.run(async (context) => {
        // Get the current selection or end of document
        const selection = context.document.getSelection();
        
        // Insert the image
        const image = selection.insertInlinePictureFromBase64(base64Image, Word.InsertLocation.end);
        image.width = 400;  // Set width in points
        image.height = 300; // Set height in points
        
        // Add a line break after the image
        selection.insertBreak(Word.BreakType.line, Word.InsertLocation.end);
        
        await context.sync();
        
        logStatus(`Image inserted at cursor position`, 'info');
    });
}

/**
 * Replace text placeholder in Word document
 */
async function replaceTextInWord(placeholder, newValue) {
    return Word.run(async (context) => {
        // Search for the placeholder text
        const searchResults = context.document.body.search(placeholder, {
            matchCase: false,
            matchWholeWord: false
        });
        
        searchResults.load('items');
        
        await context.sync();
        
        if (searchResults.items.length === 0) {
            throw new Error(`Placeholder "${placeholder}" not found in document`);
        }
        
        logStatus(`Found ${searchResults.items.length} occurrence(s) of "${placeholder}"`, 'info');
        
        // Replace each occurrence
        for (let i = 0; i < searchResults.items.length; i++) {
            searchResults.items[i].insertText(String(newValue), Word.InsertLocation.replace);
        }
        
        await context.sync();
    });
}

/**
 * Browse for an Excel file. A sandboxed task pane can't read an arbitrary
 * local file path directly - the browser's File API (via a real file input)
 * is the only way to get at a user-picked local file's bytes.
 */
function browsePath() {
    document.getElementById('fileInput').click();
}

/**
 * Handle the file the user picked: read it as bytes and parse it with
 * SheetJS. This is what actually replaces the non-functional Excel.run()
 * approach, entirely client-side, no server involved.
 */
function handleFileSelected(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    logStatus(`Reading "${file.name}"...`, 'info');

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            currentWorkbook = XLSX.read(data, { type: 'array' });
            document.getElementById('excelPath').value = file.name;
            logStatus(`Loaded "${file.name}" (${currentWorkbook.SheetNames.length} sheet(s))`, 'success');
        } catch (error) {
            logStatus(`Failed to parse "${file.name}": ${error.message}`, 'error');
            currentWorkbook = null;
        }
    };
    reader.onerror = () => {
        logStatus(`Failed to read "${file.name}"`, 'error');
    };
    reader.readAsArrayBuffer(file);
}

/**
 * Log status message to the UI
 */
function logStatus(message, type = 'info') {
    const statusLog = document.getElementById('statusLog');
    const timestamp = new Date().toLocaleTimeString();
    
    const statusItem = document.createElement('p');
    statusItem.className = `status-item ${type}`;
    statusItem.textContent = `[${timestamp}] ${message}`;
    
    // Add to top of log
    statusLog.insertBefore(statusItem, statusLog.firstChild);
    
    // Keep only last 10 messages
    while (statusLog.children.length > 10) {
        statusLog.removeChild(statusLog.lastChild);
    }
    
    console.log(`[${type.toUpperCase()}] ${message}`);
}
