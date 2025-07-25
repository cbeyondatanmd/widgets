let gridApi;
const API_GATEWAY_URL = 'https://88rzxfa0vj.execute-api.us-gov-west-1.amazonaws.com/dev/factData/getPositions';
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');



    // --- Detail Grid Configurations ---
    const allocationsGridOptions = {
        columnDefs: [
            { field: 'version', headerName: 'Version' },
            { field: 'employee', headerName: 'Employee ID' },
            { field: 'budgetPeriod', headerName: 'Budget Period' },
            { field: 'budgetLine', headerName: 'Budget Line' },
            { field: 'payPeriod', headerName: 'Pay Period' },
            { field: 'allocationRate', headerName: 'Allocation Rate' },
            { field: 'hoursRate', headerName: 'Hours Rate' }
        ],
        defaultColDef: {
            flex: 1,
            resizable: true,
            sortable: true
        }
    };

    // --- Detail Grid Configurations (moved here for scope) ---
    const employeeActionsGridOptions = {
        columnDefs: [
            { field: 'effectiveDate', headerName: 'Effective Date' },
            { field: 'transactionType', headerName: 'Trx Type' },
            { field: 'modification', headerName: 'Modification' }
        ],
        defaultColDef: {
            flex: 1,
            resizable: true,
            sortable: true,
            minWidth: 80
        }
    };

    // --- Custom Detail Cell Renderer ---
    class CustomDetailCellRenderer {
        init(params) {
            console.log('Detail Cell Renderer params.data:', params.data);

            // Parse the JSON strings into JavaScript arrays
            let allocationsData = [];
            try {
                if (typeof params.data.labor_record.allocations === 'string') {
                    allocationsData = JSON.parse(params.data.labor_record.allocations);
                } else if (Array.isArray(params.data.labor_record.allocations)) {
                    allocationsData = params.data.labor_record.allocations; // Already an array
                }
            } catch (e) {
                console.error("Error parsing allocations JSON string:", e, params.data.labor_record.allocations);
            }

            let employeeActionsData = [];
            try {
                if (typeof params.data.labor_record.employeeActions === 'string') {
                    employeeActionsData = JSON.parse(params.data.labor_record.employeeActions);
                } else if (Array.isArray(params.data.labor_record.employeeActions)) {
                    employeeActionsData = params.data.labor_record.employeeActions; // Already an array
                }
            } catch (e) {
                console.error("Error parsing employee actions JSON string:", e, params.data.labor_record.employeeActions);
            }

            console.log('Parsed Allocations data:', allocationsData);
            console.log('Parsed Employee Actions data:', employeeActionsData);


            this.eGui = document.createElement('div');
            this.eGui.innerHTML = `
                <div style="padding: 10px; background: #F6F8FB;">
                    <h3>Labor Record Details for: ${params.data.labor_record.employeeId} (${params.data.labor_record.version})</h3>
                    <h4>Allocations</h4>
                    <div class="detail-grid allocations-grid"></div>
                    <h4>Employee Actions</h4>
                    <div class="detail-grid employee-actions-grid"></div>
                </div>
            `;

            const allocationsGridElement = this.eGui.querySelector('.allocations-grid');
            const employeeActionsGridElement = this.eGui.querySelector('.employee-actions-grid');

            // Pass the parsed arrays to rowData
            if (allocationsData && allocationsData.length > 0) {
                agGrid.createGrid(allocationsGridElement, {
                    ...allocationsGridOptions,
                    rowData: allocationsData
                });
            } else {
                allocationsGridElement.innerHTML = '<p>No allocations available.</p>';
            }

            if (employeeActionsData && employeeActionsData.length > 0) {
                agGrid.createGrid(employeeActionsGridElement, {
                    ...employeeActionsGridOptions,
                    rowData: employeeActionsData
                });
            } else {
                employeeActionsGridElement.innerHTML = '<p>No employee actions available.</p>';
            }
        }

        getGui() {
            return this.eGui;
        }
    }
    // --- Detail Grid Configurations (moved here for scope) ---
    // main.js continues...

    // --- Detail Grid Configurations (moved here for scope) ---
    // const employeeActionsGridOptions = {
    //     columnDefs: [
    //         //  { field: 'version', headerName: 'Version' },
    //         { field: 'effectiveDate', headerName: 'Effective Date' },
    //         { field: 'transactionType', headerName: 'Trx Type' },
    //         //  { field: 'employee', headerName: 'Employee ID' },
    //         { field: 'modification', headerName: 'Modification' }

    //     ],
    //     defaultColDef: {
    //         flex: 1,
    //         resizable: true,
    //         sortable: true,
    //         minWidth: 80
    //     },
    //     // domLayout: 'autoHeight'
    // };

    // --- Custom Tool Panel Component ---
    class SelectedRowDetailsToolPanel {
        init(params) {
            this.params = params;
            this.eGui = document.createElement('div');
            this.eGui.classList.add('custom-tool-panel-wrapper');
            this.eGui.innerHTML = `
            <div class="custom-tool-panel" style="width: 100%; height: 100%;">
            <div class="tool-panel-tabs">
                <button class="tab-button active" data-tab="general">General</button>
                <button class="tab-button" data-tab="actions">Actions</button>
            </div>
            <div class="tab-content-container" style="width: 100%; height: 80%;">
                <div class="tab-content" id="generalTabContent" style="display: block; width: calc(100%-20px); height: 100%; padding: 10px;">
                    <form id="employeeDetailsForm" autocomplete="off" style="width:100%;">
                        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                            <div style="flex: 1 1 100%;">
                                <label for="employeeId" style="font-weight:600; color:#5A5A5A;">EMPLOYEE:</label>
                                <input id="employeeId" type="text" readonly style="width:100%;margin-bottom:8px;" />
                            </div>
                            <div style="flex: 1 1 45%;">
                                <label for="location" style="font-weight:600;">LOCATION:</label>
                                <input id="location" type="text" readonly style="width:100%;margin-bottom:8px;" />
                            </div>                            
                            <div style="flex: 1 1 45%;">
                                <label for="onboardingDate" style="font-weight:600;">ONBOARDING DATE:</label>
                                <input id="onboardingDate" type="text" readonly style="width:100%;margin-bottom:8px;" />
                            </div>
                            <div style="flex: 1 1 45%;">
                                <label for="payPlan" style="font-weight:600;">PAY PLAN:</label>
                                <input id="payPlan" type="text" readonly style="width:100%;margin-bottom:8px;" />
                            </div>
                            <div style="flex: 1 1 45%;">
                                <label for="workSchedule" style="font-weight:600;">WORK SCHEDULE:</label>
                                <input id="workSchedule" type="text" readonly style="width:100%;margin-bottom:8px;" />
                            </div>
                            <div style="flex: 1 1 45%;">
                                <label for="grade" style="font-weight:600;">GRADE:</label>
                                <input id="grade" type="text" readonly style="width:100%;margin-bottom:8px;" />
                            </div>
                            <div style="flex: 1 1 45%;">
                                <label for="step" style="font-weight:600;">STEP:</label>
                                <input id="step" type="text" readonly style="width:100%;margin-bottom:8px;" />
                            </div>
                            <div style="flex: 1 1 45%;">
                                <label for="nextStepIncrease" style="font-weight:600;">NEXT STEP INCREASE:</label>
                                <input id="nextStepIncrease" type="text" readonly style="width:100%;margin-bottom:8px;" />
                            </div>
                            <div style="flex: 1 1 45%;">
                                <label for="leaveBalance" style="font-weight:600;">LEAVE BALANCE:</label>
                                <input id="leaveBalance" type="text" readonly style="width:100%;margin-bottom:8px;" />
                            </div>
                        </div>
                        <hr style="margin: 16px 0; border: none; border-bottom: 1px dotted #CCCCCC;">
                        <div>
                            <label for="employeeComments" style="font-weight:600;">EMPLOYEE COMMENTS:</label>
                            <textarea id="employeeComments" rows="3" style="width:100%;margin-bottom:12px;"></textarea>
                        </div>
                        <button type="button" style="background:#5A9BD5;color:#fff;padding:8px 24px;border:none;border-radius:4px;font-size:1rem;">Save</button>
                    </form>
                </div>
                <div class="tab-content" id="actionsTabContent" style="display: none; width: calc(100% - 20px); height: 100%; padding: 10px;">
                    <h4>Planned Transactions</h4>
                    <div class="employee-actions-tool-grid"></div>
                </div>
            </div>
            </div>
        `;

            this.generalTabContent = this.eGui.querySelector('#generalTabContent');
            this.actionsTabContent = this.eGui.querySelector('#actionsTabContent');
            this.employeeActionsGridElement = this.eGui.querySelector('.employee-actions-tool-grid');

            // Event Listeners for tabs
            this.eGui.querySelectorAll('.tab-button').forEach(button => {
                // Ensure 'this' context is bound correctly
                button.addEventListener('click', this.handleTabClick.bind(this));
            });

            // Initialize the detail grid for employee actions within the panel
            this.employeeActionsGridApi = null;
            if (this.employeeActionsGridElement) {
                console.log('Attempting to create Employee Actions Grid...');
                this.employeeActionsGridApi = agGrid.createGrid(this.employeeActionsGridElement, employeeActionsGridOptions);
                console.log('Employee Actions Grid created. API:', this.employeeActionsGridApi ? 'VALID' : 'NULL');
            } else {
                console.error('ERROR: .employee-actions-tool-grid element not found!');
            }

            // Initial update in case a row is already selected on load (e.g., from persisted state)
            this.updateGui();

            // Register a listener for row selection changes on the main grid
            this.params.api.addEventListener('selectionChanged', this.onSelectionChanged.bind(this));

            // --- Add ResizeObserver to the tool panel wrapper itself ---
            this.resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    // Only act if the observed element is this tool panel and the actions tab is currently displayed
                    if (entry.target === this.eGui && this.actionsTabContent.style.display === 'block' && this.employeeActionsGridApi) {
                        this.employeeActionsGridApi.sizeColumnsToFit();
                    }
                }
            });
            this.resizeObserver.observe(this.eGui); // Observe the root element of your tool panel
        }

        getGui() {
            return this.eGui;
        }

        onSelectionChanged() {
            console.log('selectionChanged event fired!');
            this.updateGui();
        }

        updateGui() {
            console.log('updateGui called!');
            const selectedNodes = this.params.api.getSelectedNodes();
            let selectedRowData = null;

            if (selectedNodes.length === 1) {
                selectedRowData = selectedNodes[0].data; // Access data from the first node in the array
            }

            const employeeInput = this.eGui.querySelector('#employeeId');
            const locationInput = this.eGui.querySelector('#location');
            const payPlanInput = this.eGui.querySelector('#payPlan');
            const onboardingDateInput = this.eGui.querySelector('#onboardingDate');
            const commentsInput = this.eGui.querySelector('#employeeComments');

            if (selectedRowData && selectedRowData.labor_record) {
                // Update General Tab Fields
                employeeInput.value = `${selectedRowData.labor_record.employeeId} - ${selectedRowData.labor_record.employeeFirstName} ${selectedRowData.labor_record.employeeLastName}` || 'N/A';
                locationInput.value = selectedRowData.labor_record.location || 'N/A';
                payPlanInput.value = selectedRowData.labor_record.payTable || 'N/A';
                onboardingDateInput.value = selectedRowData.labor_record.onboardingDate || 'N/A';
                commentsInput.value = selectedRowData.labor_record.employeeComments || '';
                // gradeStepSpan.textContent = selectedRowData.labor_record.gradeStep || 'N/A';
                // locationSpan.textContent = selectedRowData.labor_record.location || 'N/A';
                // payTableSpan.textContent = selectedRowData.labor_record.payTable || 'N/A';

                // Parse and Update Employee Actions Grid
                let employeeActions = [];
                try {
                    if (typeof selectedRowData.labor_record.employeeActions === 'string') {
                        employeeActions = JSON.parse(selectedRowData.labor_record.employeeActions);
                    } else if (Array.isArray(selectedRowData.labor_record.employeeActions)) {
                        employeeActions = selectedRowData.labor_record.employeeActions;
                    }
                } catch (e) {
                    console.error("Error parsing employee actions JSON in tool panel:", e, selectedRowData.labor_record.employeeActions);
                }
                console.log('Parsed Employee Actions data for grid:', employeeActions);
                console.log('Parsed Employee Actions data length:', employeeActions.length);


                if (this.employeeActionsGridApi) {
                    console.log('Employee Actions Grid API is valid in updateGui(). Setting rowData.');
                    this.employeeActionsGridApi.setGridOption('rowData', employeeActions);
                    // Also, let's explicitly trigger a grid refresh just in case,
                    // if the tab is currently visible, though handleTabClick should handle it on click.
                    if (this.actionsTabContent.style.display === 'block') {
                        console.log('Actions tab is visible in updateGui, calling sizeColumnsToFit().');
                        this.employeeActionsGridApi.sizeColumnsToFit();
                    } else {
                        console.log('Actions tab is NOT visible in updateGui, sizeColumnsToFit deferred.');
                    }
                } else {
                    console.error('ERROR: Employee Actions Grid API is NOT initialized in updateGui()!');
                }

            } else {
                // Clear General Tab Fields
                employeeInput.value = '';
                locationInput.value = '';
                payPlanInput.value = '';
                onboardingDateInput.value = '';
                commentsInput.value = '';

                // Clear Actions Grid
                if (this.employeeActionsGridApi) {
                    console.log('Clearing Employee Actions Grid rowData.');
                    this.employeeActionsGridApi.setGridOption('rowData', []);
                    if (this.actionsTabContent.style.display === 'block') {
                        console.log('Actions tab visible when clearing, calling sizeColumnsToFit().');
                        this.employeeActionsGridApi.sizeColumnsToFit();
                    }
                } else {
                    console.warn('Employee Actions Grid API is NOT initialized when clearing rowData!');
                }
            }
        }

        handleTabClick(event) {
            console.log('Tab button clicked!'); // Debug log
            console.log('Event target:', event.target); // Debug log: Check which element was clicked
            console.log('Event target dataset:', event.target.dataset); // Debug log: Check the dataset object

            // Ensure 'tabId' is correctly retrieved from the dataset
            const tabId = event.target.dataset.tab;

            // Add a check to ensure tabId is defined and valid
            if (!tabId) {
                console.error("Tab ID not found in event.target.dataset.tab!");
                return; // Exit if tabId is missing
            }

            this.eGui.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            this.eGui.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');

            event.target.classList.add('active');
            this.eGui.querySelector(`#${tabId}TabContent`).style.display = 'block';

            if (tabId === 'actions' && this.employeeActionsGridApi) {
                setTimeout(() => {
                    this.employeeActionsGridApi.sizeColumnsToFit();
                }, 50);
            }
        }

        destroy() {
            this.params.api.removeEventListener('selectionChanged', this.onSelectionChanged.bind(this));
            if (this.resizeObserver) {
                this.resizeObserver.disconnect();
            }
            if (this.employeeActionsGridApi) {
                this.employeeActionsGridApi.destroy();
            }
        }
    }

    const myTheme = agGrid.themeAlpine.withParams({
        // bright green, 10% opacity
        selectedRowBackgroundColor: "rgba(239, 244, 249, 1)",

        // alternating row colors will be visible through the semi-transparent
        // selection background color
        //  oddRowBackgroundColor: "#8881",
    });



    // --- Master Grid Configuration ---
    const gridOptions = {
        theme: myTheme,
        //   enableAdvancedFilter: true,
        columnDefs: [
            {
                field: 'labor_record.employeeId',
                headerName: 'Employee ID',
                filter: 'agSetColumnFilter',
                cellRenderer: 'agGroupCellRenderer'
            },
            { field: 'labor_record.employeeLastName', headerName: 'Last Name', filter: 'agSetColumnFilter' },
            { field: 'labor_record.employeeFirstName', headerName: 'First Name', filter: 'agSetColumnFilter' },
            {
                field: 'labor_record.hrOrg', headerName: 'HR Org', filter: 'agSetColumnFilter',
                // filterParams: {
                //     values: ['A000', 'A001', 'A002', 'A003', 'A004', 'A004', 'A006', 'A007', 'A008', 'A009', 'A010', 'A011', 'A012', 'A013', 'A014', 'A015', 'A016', 'A017', 'A018', 'A019']
                // }
            },
            {
                field: 'labor_record.baseSalary', headerName: 'Base Salary', type: 'numericColumn', valueFormatter: params => {
                    // Handle potential null or undefined values
                    if (params.value === null || params.value === undefined) {
                        return null; // or "$0.00" depending on desired behavior
                    }
                    return '$' + params.value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                }
            },
        ],
        onFilterChanged: (event) => {
            const filterModel = event.api.getFilterModel();
            const hrOrgFilter = filterModel['labor_record.hrOrg'];
            console.log('Filter Model:', filterModel);
            if (hrOrgFilter && hrOrgFilter.values && hrOrgFilter.values.length > 0) {
                const missingHrOrgs = [];
                hrOrgFilter.values.forEach(orgValue => {
                    let hasData = false;
                    event.api.forEachNodeAfterFilter(node => {
                        if (node.data?.labor_record?.hrOrg === orgValue) {
                            hasData = true;
                        }
                    });
                    if (!hasData) {
                        missingHrOrgs.push(orgValue);
                    }
                });
                if (missingHrOrgs.length > 0) {
                    console.log('HR Orgs in filter with no rowData:', missingHrOrgs);
                }
            }
        },
        //    onGridReady: onGridReady,
        masterDetail: true,
        detailCellRenderer: CustomDetailCellRenderer,
        detailRowAutoHeight: true,

        // Enable single row selection
        rowSelection: 'single', // <--- Add this line

        onRowClicked: (event) => {
            console.log('Parent Row Clicked!', event.data);
            console.log('Clicked Row - Allocations:', event.data.labor_record.allocations);
            console.log('Clicked Row - Employee Actions:', event.data.labor_record.employeeActions);
        },
        defaultColDef: {
            flex: 1,
            minWidth: 100,
            resizable: true,
            sortable: true
        },
        // Configure the sidebar and include your custom tool panel
        sideBar: { // <--- Add this sideBar configuration
            toolPanels: [
                {
                    id: 'selectedRowDetails', // Unique ID for your tool panel
                    labelDefault: 'Row Details', // Default label shown in the sidebar tab
                    labelKey: 'selectedRowDetails',
                    iconKey: 'group', // You can use a built-in icon or provide a custom one
                    toolPanel: SelectedRowDetailsToolPanel, // Your custom component class
                    width: 463
                    // toolPanelParams: {} // You can pass custom parameters here if needed
                },
                {
                    id: 'columns',
                    labelDefault: 'Columns',
                    labelKey: 'columns',
                    iconKey: 'columns',
                    toolPanel: 'agColumnsToolPanel', // Provided AG Grid tool panel
                    width: 463
                },
                {
                    id: 'filters',
                    labelDefault: 'Filters',
                    labelKey: 'filters',
                    iconKey: 'filter',
                    toolPanel: 'agFiltersToolPanel', // Provided AG Grid tool panel
                    width: 463
                },
            ],
            // optional: 'selectedRowDetails' will be open by default
            //        defaultToolPanel: 'selectedRowDetails',
        }
    };



    // main.js continues...


    // const onGridReady = (params) => {
    //   gridApi = params.api;
    // };



    // --- Fetch Data from API Gateway ---
    async function fetchDataAndRenderGrid() {
        // Build POST body from filter bar selections
        const filterSelections = {};
        const versionFilter = filterData.activeFilters.find(f => f.dimension === "Version");
        const hrOrgFilter = filterData.activeFilters.find(f => f.dimension === "HR Org");
        if (versionFilter && versionFilter.values.length > 0) {
            filterSelections.version = versionFilter.values[0];
        }
        if (hrOrgFilter && hrOrgFilter.values.length > 0) {
            filterSelections.hrorg = hrOrgFilter.values; // send array for multi-select
        }

        try {
            const response = await fetch(API_GATEWAY_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(filterSelections)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const contentEncoding = response.headers.get('Content-Encoding');
            let data;

            if (contentEncoding && contentEncoding.includes('gzip')) {
                const arrayBuffer = await response.arrayBuffer();
                const decompressed = pako.ungzip(new Uint8Array(arrayBuffer), { to: 'string' });
                data = JSON.parse(decompressed);
            } else {
                data = await response.json();
            }

            
            // If gridApi exists, just update the row data
            if (gridApi) {
                gridApi.setGridOption('rowData', data);
                gridApi.openToolPanel('selectedRowDetails');
                updatePinnedTotalRow();
            } else {
                // Only create the grid once
                gridApi = agGrid.createGrid(gridDiv, gridOptions);
                gridApi.setGridOption('rowData', data);
                gridApi.openToolPanel('selectedRowDetails');
                updatePinnedTotalRow();
            }
        } catch (error) {
            console.error('Error fetching or processing data:', error);
            document.getElementById('myGrid').innerHTML = `<p style="color: red;">Error loading data: ${error.message}</p>`;
        }
    }

    fetchDataAndRenderGrid();
    renderFilterBar(filterData);
});

function onQuickFilterChanged() {
    const quickFilterInput = document.getElementById('quickFilterInput');
    gridApi.setGridOption('quickFilterText', quickFilterInput.value);
    updatePinnedTotalRow();
}

function updatePinnedTotalRow() {
    if (!gridApi) return;
    let totalBaseSalary = 0;
    let filteredCount = 0;
    let grandTotal = 0;
    let totalCount = 0;

    // Calculate subtotal (filtered) and grand total (all)
    gridApi.forEachNodeAfterFilter(node => {
        const val = node.data?.labor_record?.baseSalary;
        if (typeof val === 'number') totalBaseSalary += val;
        filteredCount++;
    });

    gridApi.forEachNode(node => {
        const val = node.data?.labor_record?.baseSalary;
        if (typeof val === 'number') grandTotal += val;
        totalCount++;
    });

    let pinnedBottomRowData = [];

    if (filteredCount < totalCount) {
        pinnedBottomRowData = [
            {
                labor_record: {
                    employeeId: 'FILTERED TOTAL',
                    baseSalary: totalBaseSalary
                }
            },
            {
                labor_record: {
                    employeeId: 'TOTAL',
                    baseSalary: grandTotal
                }
            }
        ];
    } else {
        pinnedBottomRowData = [
            {
                labor_record: {
                    employeeId: 'TOTAL',
                    baseSalary: totalBaseSalary
                }
            }
        ];
    }

    gridApi.setGridOption('pinnedBottomRowData', pinnedBottomRowData);
}

// --- Filter Bar Rendering Logic ---
// Add singleSelect property to each filter
const filterData = {
    activeFilters: [
        { dimension: "Version", values: ["SP_FY25_00"], singleSelect: true }, // single select (array with one value)
        { dimension: "HR Org", values: ["A001"], singleSelect: false } // multi-select (array of values)
    ],
    optionalFilters: [
        { dimension: "Employee Type", values: ["Full-Time", "Part-Time"], singleSelect: false },
        { dimension: "Location", values: ["DC", "NY", "Remote"], singleSelect: false }
    ]
};

function renderFilterBar(filterData) {
    const bar = document.getElementById('filterBar');
    bar.innerHTML = '';

    // Filter icon
    const icon = document.createElement('span');
    icon.className = 'filter-icon';
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-filter-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>`;
    bar.appendChild(icon);

    // Active filters
    filterData.activeFilters.forEach((f, idx) => {
        const chip = document.createElement('div');
        chip.className = 'filter-chip';
        chip.innerHTML = `
            <span class="filter-chip-label">${f.dimension} (${f.values.length})</span>
            <span class="filter-chip-values">${f.values.join(', ')}</span>
        `;
        chip.style.cursor = "pointer";
        chip.onclick = () => showFilterModal(f, idx);
        bar.appendChild(chip);
    });

    // Dropdown for optional filters
    const dropdown = document.createElement('div');
    dropdown.className = 'filter-dropdown';
    filterData.optionalFilters.forEach(opt => {
        const option = document.createElement('div');
        option.className = 'filter-dropdown-option';
        option.textContent = opt.dimension;
        option.onclick = () => {
            filterData.activeFilters.push({ dimension: opt.dimension, values: opt.values });
            filterData.optionalFilters = filterData.optionalFilters.filter(o => o.dimension !== opt.dimension);
            renderFilterBar(filterData);
        };
        dropdown.appendChild(option);
    });
    bar.appendChild(dropdown);

    icon.onclick = (e) => {
        dropdown.classList.toggle('active');
        const rect = icon.getBoundingClientRect();
        dropdown.style.left = rect.left + 'px';
        dropdown.style.top = (rect.bottom + window.scrollY) + 'px';
    };

    document.addEventListener('click', function handler(event) {
        if (!bar.contains(event.target)) {
            dropdown.classList.remove('active');
            document.removeEventListener('click', handler);
        }
    });
}
function updateMainGridData() {
    // Build POST body from filter bar selections
    const filterSelections = {};
    const versionFilter = filterData.activeFilters.find(f => f.dimension === "Version");
    const hrOrgFilter = filterData.activeFilters.find(f => f.dimension === "HR Org");
    if (versionFilter && versionFilter.values.length > 0) {
        filterSelections.version = versionFilter.values[0];
    }
    if (hrOrgFilter && hrOrgFilter.values.length > 0) {
        filterSelections.hrorg = hrOrgFilter.values; // send array for multi-select
    }

    // Clear the grid and show loading overlay
    if (gridApi) {
        gridApi.setGridOption('rowData', []);
        gridApi.showLoadingOverlay();
    }

    fetch(API_GATEWAY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filterSelections)
    })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (gridApi) {
                gridApi.setGridOption('rowData', data);
                gridApi.openToolPanel('selectedRowDetails');
                updatePinnedTotalRow && updatePinnedTotalRow();
                gridApi.hideOverlay();
            }
        })
        .catch(error => {
            console.error('Error updating main grid data:', error);
            if (gridApi) {
                gridApi.showNoRowsOverlay();
            }
            document.getElementById('myGrid').innerHTML = `<p style="color: red;">Error loading data: ${error.message}</p>`;
        });
}
// Modal logic
function showFilterModal(filter, filterIdx) {
    // Remove existing modal if present
    let existing = document.getElementById('filterModal');
    if (existing) existing.remove();

    // Modal container
    const modal = document.createElement('div');
    modal.id = 'filterModal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.18)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';

    // Modal content
    const content = document.createElement('div');
    content.style.background = '#fff';
    content.style.borderRadius = '8px';
    content.style.boxShadow = '0 4px 24px rgba(90,155,213,0.18)';
    content.style.padding = '24px 24px 16px 24px';
    content.style.minWidth = '420px';
    content.style.maxWidth = '600px';
    content.style.width = '500px';
    content.style.height = '420px'; // Initial height
    content.style.maxHeight = '80vh';
    content.style.overflow = 'hidden';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'stretch';
    content.style.position = 'absolute';
    content.style.left = '50%';
    content.style.top = '50%';
    content.style.transform = 'translate(-50%, -50%)';

    // Modal header for dragging (as before)
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between'; // Move close button to right
    header.style.background = '#2F4A63';
    header.style.color = '#fff';
    header.style.cursor = 'move';
    header.style.fontWeight = 'bold';
    header.style.fontSize = '1.1em';
    header.style.userSelect = 'none';
    header.style.padding = '8px 12px 8px 16px';
    header.style.borderTopLeftRadius = '8px';
    header.style.borderTopRightRadius = '8px';
    header.style.width = '100%';
    header.style.position = 'absolute';
    header.style.top = '0';
    header.style.left = '0';
    header.style.right = '0';
    header.style.height = '48px';

    // Adjust modal content to have padding-top for header height
    content.style.paddingTop = '48px';

    // Header title
    const headerTitle = document.createElement('span');
    headerTitle.textContent = `Select ${filter.dimension}`;
    headerTitle.style.flex = '1 1 auto';
    headerTitle.style.color = '#fff';

    // X (close) button (move to right)
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.background = 'transparent';
    closeBtn.style.border = 'none';
    closeBtn.style.color = '#fff';
    closeBtn.style.fontSize = '1.3em';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.marginLeft = '16px'; // Space between title and button
    closeBtn.style.padding = '0 35px';
    closeBtn.style.lineHeight = '1';
    closeBtn.setAttribute('aria-label', 'Close modal');
    closeBtn.onclick = () => modal.remove();

    // Append title first, then close button (right side)
    header.appendChild(headerTitle);
    header.appendChild(closeBtn);
    content.appendChild(header);

    // AG Grid container
    const gridDiv = document.createElement('div');
    gridDiv.style.flex = '1 1 auto';
    gridDiv.style.minHeight = '120px';
    gridDiv.style.maxHeight = '100%';
    gridDiv.style.maxWidth = '100%';
    gridDiv.style.marginTop = '45px'; // 25px + 20px extra top padding
    gridDiv.style.marginBottom = '20px'; // Add 20px bottom padding
    gridDiv.className = 'ag-theme-alpine';
    content.appendChild(gridDiv);

    // Divider line between grid and buttons
    const divider = document.createElement('div');
    divider.style.borderTop = '1px dotted #bbb';
    divider.style.margin = '12px -24px 0 -24px'; // Extend to modal edge (matches modal horizontal padding)
    divider.style.width = 'calc(100% + 48px)';   // 24px left + 24px right padding
    content.appendChild(divider);

    // Buttons
    const btnRow = document.createElement('div');
    btnRow.style.display = 'flex';
    btnRow.style.justifyContent = 'flex-end';
    btnRow.style.gap = '12px';
    btnRow.style.marginTop = '16px'; // Move buttons further down
    btnRow.style.flex = '0 0 auto'; // Don't grow/shrink
    content.appendChild(btnRow);

    const btnCancel = document.createElement('button');
    btnCancel.textContent = 'Cancel';
    btnCancel.style.background = '#f3f3f3';
    btnCancel.style.color = '#444';
    btnCancel.style.border = '1px solid #ccc';
    btnCancel.style.borderRadius = '4px';
    btnCancel.style.padding = '6px 22px';
    btnCancel.style.cursor = 'pointer';

    btnCancel.onclick = () => modal.remove();

    const btnOk = document.createElement('button');
    btnOk.textContent = 'OK';
    btnOk.style.background = '#5A9BD5';
    btnOk.style.color = '#fff';
    btnOk.style.border = 'none';
    btnOk.style.borderRadius = '4px';
    btnOk.style.padding = '6px 22px';
    btnOk.style.fontWeight = 'bold';
    btnOk.style.cursor = 'pointer';

    btnRow.appendChild(btnCancel);
    btnRow.appendChild(btnOk);

    modal.appendChild(content);
    document.body.appendChild(modal);

    // AG Grid setup
    const columnDefs = [
        { headerName: filter.dimension, field: 'value', checkboxSelection: !filter.singleSelect, headerCheckboxSelection: !filter.singleSelect, flex: 1 }
    ];

    // Fetch Versions if this is the Version filter
    if (filter.dimension === "Version") {
        fetch('https://88rzxfa0vj.execute-api.us-gov-west-1.amazonaws.com/dev/masterData/getVersions')
            .then(response => response.json())
            .then(data => {
                // Assume data is an array of version strings or objects with .ID or .name
                // let rowData;
                // if (Array.isArray(data) && typeof data[0] === 'object' && data[0] !== null) {
                //     // If objects, try to use .ID or .name
                //     rowData = data.map(v => ({ value: v.ID || v.name || v.toString(), description: v.DESCRIPTION }));
                // } else {
                //     // If array of strings
                //     rowData = (Array.isArray(data) ? data : []).map(v => ({ value: v }));
                // }
                // If data is wrapped in an object, extract the array
                let versionArray = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : []);
                if (!versionArray.length) throw new Error("No Version data array found");
                const rowData = versionArray.map(v => ({ value: v.ID, description: v.DESCRIPTION }));
                const columnDefs = [
                    { headerName: filter.dimension, field: 'value', checkboxSelection: false, headerCheckboxSelection: false, flex: 1 },
                    { headerName: 'Description', field: 'description', flex: 2 }
                ];
                const gridOptions = {
                    columnDefs,
                    rowData,
                    rowSelection: filter.singleSelect ? 'single' : 'multiple',
                    suppressRowClickSelection: false,
                    defaultColDef: { resizable: true, sortable: true, filter: true },
                    onGridReady: (params) => {
                        // Pre-select values that are already in the filter
                        let selectedCount = 0;
                        params.api.forEachNode(node => {
                            if (filter.values.includes(node.data.value)) {
                                node.setSelected(true);
                                selectedCount++;
                            }
                        });
                        // For single select, ensure only one is selected (the first match)
                        if (filter.singleSelect && selectedCount === 0 && params.api.getDisplayedRowCount() > 0) {
                            // If nothing matched, select the first row
                            params.api.getDisplayedRowAtIndex(0).setSelected(true);
                        } else if (filter.singleSelect && selectedCount > 1) {
                            // If multiple were selected, keep only the first
                            let found = false;
                            params.api.forEachNode(node => {
                                if (filter.values.includes(node.data.value)) {
                                    if (!found) {
                                        node.setSelected(true);
                                        found = true;
                                    } else {
                                        node.setSelected(false);
                                    }
                                } else {
                                    node.setSelected(false);
                                }
                            });
                        }
                        // --- Add this helper function ---
                        function updateOkButtonState(api) {
                            let hasSelection = false;
                            api.forEachNode(node => {
                                if (node.isSelected()) hasSelection = true;
                            });
                            btnOk.disabled = !hasSelection;
                        }

                        // --- Call the helper function after pre-selecting rows ---
                        updateOkButtonState(params.api);

                        // --- Add selectionChanged event listener ---
                        params.api.addEventListener('selectionChanged', () => updateOkButtonState(params.api));

                        btnOk.onclick = () => {
                            const selected = [];
                            params.api.forEachNode(node => {
                                if (node.isSelected()) selected.push(node.data);
                            });
                            filter.values = selected.map(row => row.value);
                            renderFilterBar(filterData);
                            modal.remove();
                            updateMainGridData()


                        };
                    }
                };
                agGrid.createGrid(gridDiv, gridOptions);
            })
            .catch(err => {
                console.error("Error loading Versions:", err);
                gridDiv.innerHTML = `<div style="color:red;padding:16px;">Failed to load Versions</div>`;
                btnOk.disabled = true;
            });
    } else if (filter.dimension === "HR Org") {
        fetch('https://88rzxfa0vj.execute-api.us-gov-west-1.amazonaws.com/dev/masterData/getHROrgs')
            .then(response => response.json())
            .then(data => {
                // Log the data for debugging
                console.log("Fetched HR Org data:", data);

                // If data is wrapped in an object, extract the array
                let orgArray = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : []);
                if (!orgArray.length) throw new Error("No HR Org data array found");

                // Map to { value: ID, description: DESCRIPTION }
                const rowData = orgArray.map(v => ({ value: v.ID, description: v.DESCRIPTION }));

                const columnDefs = [
                    { headerName: filter.dimension, field: 'value', checkboxSelection: true, headerCheckboxSelection: true, flex: 1 },
                    { headerName: 'Description', field: 'description', flex: 2 }
                ];
                const gridOptions = {
                    columnDefs,
                    rowData,
                    rowSelection: 'multiple',
                    suppressRowClickSelection: false,
                    defaultColDef: { resizable: true, sortable: true, filter: true },
                    onGridReady: (params) => {
                        // Pre-select values that are already in the filter
                        params.api.forEachNode(node => {
                            if (filter.values.includes(node.data.value)) {
                                node.setSelected(true);
                            }
                        });

                        // --- Add this helper function ---
                        function updateOkButtonState(api) {
                            let hasSelection = false;
                            api.forEachNode(node => {
                                if (node.isSelected()) hasSelection = true;
                            });
                            btnOk.disabled = !hasSelection;
                            if (!hasSelection) {
                                btnOk.style.opacity = '0.5';
                                btnOk.style.cursor = 'not-allowed';
                                btnOk.style.background = '#b0b0b0';
                            } else {
                                btnOk.style.opacity = '1';
                                btnOk.style.cursor = 'pointer';
                                btnOk.style.background = '#5A9BD5';
                            }
                        }

                        // --- Call the helper function after pre-selecting rows ---
                        updateOkButtonState(params.api);

                        // --- Add selectionChanged event listener ---
                        params.api.addEventListener('selectionChanged', () => updateOkButtonState(params.api));

                        btnOk.onclick = () => {
                            const selected = [];
                            params.api.forEachNode(node => {
                                if (node.isSelected()) selected.push(node.data);
                            });
                            console.log('Selected rows:', selected);
                            filter.values = selected.map(row => row.value);
                            renderFilterBar(filterData);
                            modal.remove();
                            // --- Fetch new data for the main AG Grid based on updated filter selections ---
                            updateMainGridData()
                        };
                    }
                };
                agGrid.createGrid(gridDiv, gridOptions);
            })
            .catch(err => {
                console.error("Error loading HR Orgs:", err);
                gridDiv.innerHTML = `<div style="color:red;padding:16px;">Failed to load HR Orgs</div>`;
                btnOk.disabled = true;
            });
    } else {
        // Default: use current filter values
        const rowData = (filter.values || []).map(v => ({ value: v }));
        const gridOptions = {
            columnDefs,
            rowData,
            rowSelection: filter.singleSelect ? 'single' : 'multiple',
            suppressRowClickSelection: false,
            defaultColDef: { resizable: true, sortable: true, filter: true },
            onGridReady: (params) => {
                // Pre-select values that are already in the filter
                params.api.forEachNode(node => {
                    if (filter.values.includes(node.data.value)) {
                        node.setSelected(true);
                    }
                });

                // --- Add this helper function ---
                function updateOkButtonState(api) {
                    let hasSelection = false;
                    api.forEachNode(node => {
                        if (node.isSelected()) hasSelection = true;
                    });
                    btnOk.disabled = !hasSelection;
                }

                // --- Call the helper function after pre-selecting rows ---
                updateOkButtonState(params.api);

                // --- Add selectionChanged event listener ---
                params.api.addEventListener('selectionChanged', () => updateOkButtonState(params.api));

                btnOk.onclick = () => {
                    const selected = [];
                    params.api.forEachNode(node => {
                        if (node.isSelected()) selected.push(node.data);
                    });
                    console.log('Selected rows:', selected);
                    filter.values = selected.map(row => row.value);
                    renderFilterBar(filterData);
                    modal.remove();
                };
            }
        };
        agGrid.createGrid(gridDiv, gridOptions);
    }

    // Make modal content absolutely positioned for moving
    content.style.position = 'absolute';
    content.style.left = '50%';
    content.style.top = '50%';
    content.style.transform = 'translate(-50%, -50%)';

    // Create and append resize handle
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'resize-handle';
    resizeHandle.style.width = '16px';
    resizeHandle.style.height = '16px';
    resizeHandle.style.position = 'absolute';
    resizeHandle.style.right = '2px';
    resizeHandle.style.bottom = '2px';
    resizeHandle.style.cursor = 'nwse-resize';
    resizeHandle.style.background = 'rgba(90,155,213,0.15)';
    resizeHandle.style.borderRadius = '3px';
    content.appendChild(resizeHandle);

    let isDragging = false, dragOffsetX = 0, dragOffsetY = 0;
    let isResizing = false, startWidth, startHeight, startX, startY;

    // Drag logic
    header.onmousedown = function (e) {
        isDragging = true;
        const rect = content.getBoundingClientRect();
        dragOffsetX = e.clientX - rect.left;
        dragOffsetY = e.clientY - rect.top;
        document.body.style.userSelect = 'none';

        function onMouseMove(ev) {
            if (isDragging) {
                content.style.left = `${ev.clientX - dragOffsetX}px`;
                content.style.top = `${ev.clientY - dragOffsetY}px`;
                content.style.transform = '';
            }
        }
        function onMouseUp() {
            isDragging = false;
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    // Resize logic
    resizeHandle.onmousedown = function (e) {
        // --- Fix: Remove transform and set left/top to current pixel position if still centered ---
        if (content.style.transform) {
            const rect = content.getBoundingClientRect();
            content.style.left = rect.left + "px";
            content.style.top = rect.top + "px";
            content.style.transform = "";
        }
        // --- End fix ---

        isResizing = true;
        startWidth = content.offsetWidth;
        startHeight = content.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
        document.body.style.userSelect = 'none';

        function onMouseMove(ev) {
            if (isResizing) {
                let newWidth = Math.max(320, startWidth + (ev.clientX - startX));
                let newHeight = Math.max(200, startHeight + (ev.clientY - startY));
                content.style.width = newWidth + 'px';
                content.style.height = newHeight + 'px';
            }
        }
        function onMouseUp() {
            isResizing = false;
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
}
