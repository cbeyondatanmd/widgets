/* global Office, Word, Excel */

// Initialize Office add-in
Office.onReady((info) => {
    if (info.host === Office.HostType.Word) {
        logStatus('Add-in loaded successfully', 'success');
        
        // Attach event listeners
        document.getElementById('updateBtn').addEventListener('click', updateAll);
        document.getElementById('insertChartBtn').addEventListener('click', insertChartOnly);
        document.getElementById('updateTextBtn').addEventListener('click', updateTextOnly);
        document.getElementById('browseBtn').addEventListener('click', browsePath);
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
 * Insert chart from Excel as image into Word
 */
async function insertChartOnly() {
    const excelPath = document.getElementById('excelPath').value;
    const chartName = document.getElementById('chartName').value;
    
    if (!excelPath) {
        logStatus('Please specify an Excel file path', 'warning');
        return;
    }
    
    if (!chartName) {
        logStatus('Please specify a chart name', 'warning');
        return;
    }
    
    logStatus(`Opening Excel file: ${excelPath}`, 'info');
    
    try {
        // Open Excel workbook
        await Excel.run(async (context) => {
            // Note: In Office.js, we need Excel to be running
            // For prototype, we'll use a workaround approach
            logStatus('Reading chart from Excel...', 'info');
            
            // Get the chart image
            const chartImage = await getChartImage(excelPath, chartName);
            
            if (!chartImage) {
                throw new Error('Could not retrieve chart image');
            }
            
            // Insert chart into Word
            await insertImageIntoWord(chartImage, chartName);
            
            logStatus(`Chart "${chartName}" inserted successfully`, 'success');
        });
    } catch (error) {
        logStatus(`Failed to insert chart: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Update text placeholder with Excel cell value
 */
async function updateTextOnly() {
    const excelPath = document.getElementById('excelPath').value;
    const cellAddress = document.getElementById('cellAddress').value;
    const placeholder = document.getElementById('placeholder').value;
    
    if (!excelPath) {
        logStatus('Please specify an Excel file path', 'warning');
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
    
    logStatus(`Reading cell value from Excel...`, 'info');
    
    try {
        // Get cell value from Excel
        const cellValue = await getCellValue(excelPath, cellAddress);
        
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
 * Get chart image from Excel workbook
 * Note: This requires Excel to be running and the workbook to be open
 */
async function getChartImage(filePath, chartName) {
    return new Promise((resolve, reject) => {
        Excel.run(async (context) => {
            try {
                // For prototype: We'll need to manually open the Excel file first
                // In production, we can use Office.context.document.getFileAsync()
                
                // Access the active workbook (user must have it open)
                const workbook = context.workbook;
                const worksheets = workbook.worksheets;
                worksheets.load('items/name');
                
                await context.sync();
                
                logStatus(`Searching for chart "${chartName}"...`, 'info');
                
                // Search all worksheets for the chart
                let chartFound = false;
                
                for (let i = 0; i < worksheets.items.length; i++) {
                    const sheet = worksheets.items[i];
                    const charts = sheet.charts;
                    charts.load('items/name');
                    
                    await context.sync();
                    
                    for (let j = 0; j < charts.items.length; j++) {
                        const chart = charts.items[j];
                        
                        if (chart.name === chartName) {
                            logStatus(`Found chart "${chartName}" on sheet "${sheet.name}"`, 'info');
                            
                            // Get chart as base64 image
                            const chartImage = chart.getImage();
                            
                            await context.sync();
                            
                            chartFound = true;
                            resolve(chartImage.value);
                            return;
                        }
                    }
                }
                
                if (!chartFound) {
                    reject(new Error(`Chart "${chartName}" not found in workbook`));
                }
            } catch (error) {
                reject(error);
            }
        }).catch(reject);
    });
}

/**
 * Get cell value from Excel workbook
 */
async function getCellValue(filePath, cellAddress) {
    return new Promise((resolve, reject) => {
        Excel.run(async (context) => {
            try {
                const workbook = context.workbook;
                
                // Try to get value from named range first
                try {
                    const namedItem = workbook.names.getItem(cellAddress);
                    const range = namedItem.getRange();
                    range.load('values');
                    
                    await context.sync();
                    
                    const value = range.values[0][0];
                    resolve(formatCellValue(value));
                    return;
                } catch (e) {
                    // Not a named range, try as cell address
                }
                
                // Try as cell address on active sheet
                const activeSheet = workbook.worksheets.getActiveWorksheet();
                const range = activeSheet.getRange(cellAddress);
                range.load('values');
                
                await context.sync();
                
                const value = range.values[0][0];
                resolve(formatCellValue(value));
            } catch (error) {
                reject(error);
            }
        }).catch(reject);
    });
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
 * Browse for file path (simplified for prototype)
 */
function browsePath() {
    const samplePath = 'C:\\Users\\YourName\\Documents\\sample-data.xlsx';
    document.getElementById('excelPath').value = samplePath;
    logStatus('Sample path inserted. Please update with your actual Excel file path.', 'info');
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
