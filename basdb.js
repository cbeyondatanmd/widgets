(function () {
    let template = document.createElement("template");
    template.innerHTML = `
    <head>
    <style>
        .labelblock {
            font: 16px Arial, sans-serif;
            font-style: italic;
            color: #60696E;
            display: inline-block;

            margin-left: .5em;


        }

        svg {
            display: inline-block;

            position: relative;
            align: center;

        }

        table,
        th,
        td {
            border-bottom: 1px dotted #ABB4BE;
            border-collapse: collapse;
            font-family: Segoe UI, sans-serif;
            font-size: 12px;


        }

        tr:nth-child(even) {
            background-color: #F4F7FB;
        }

        .intro {
            background-color: #FCFFA6;
        }

        .hide {
            display: none;
        }

        input[type=text],
        input[type=date],
        select {
            width: 100%;
            padding: 10px 12px;
            margin: 6px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 2px;
            box-sizing: border-box;
            font: 14px Arial, sans-serif;
        }

        label {
            font: bold 11px Arial, sans-serif;
            color: #7F7F7F;
        }




        .checklabel {
            font: bold 14px Arial, sans-serif;
            color: #7F7F7F;
            vertical-align: 2px;

        }

        * {
            box-sizing: border-box;
        }

        /* Create two equal columns that floats next to each other */
        .column {
            float: left;
            width: 50%;
            padding: 5px;
            height: 30px;
            /* Should be removed. Only for demonstration */
        }

        /* Clear floats after the columns */
        .row:after {
            content: "";
            display: table;
            clear: both;
        }

        .cansave {
            display: inline-block;
            padding: 8px 22px;
            font-size: 14px;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            outline: none;
            color: #fff;
            background-color: #6396CC;
            border: none;
            border-radius: 5px;
          right: 0px;
          bottom: 7px;
          position: absolute;
          }

          .cansave:hover {background-color: #548AC6}
          
          .cansave:active {
            background-color: #507CAB;
          
            transform: translateY(0px);
          }    

          .cantsave {
            display: inline-block;
            padding: 8px 22px;
            font-size: 14px;
            background-color: grey;
            text-align: center;
            text-decoration: none;
            outline: none;
            color: #fff;
          
            border: none;
            border-radius: 5px;
          right: 0px;
          bottom: 7px;
          position: absolute;
          }

    </style>
</head>

<body>
    <div id="input" style="overflow-y:auto; overflow-x: hidden;">
        <label for="EMPLOYEE">NAME:</label>
        <input type="text" id="EMPLOYEE" displayOptions="label" value="">

        <label for="ORGANIZATION">ORGANIZATION:</label>
        <select id="ORGANIZATION" displayOptions="id"></select>

        <hr style="height:1px;border-width:0;color:#E0E0E0;background-color:#E0E0E0">

        <label for="POSITIONS">POSITION:</label>
        <select id="POSITIONS" displayOptions="id"></select>

        <label for="GRADE_STEP">GRADE/STEP:</label>
        <select id="GRADE_STEP" displayOptions="id"></select>

        <label for="LOCATION">LOCATION:</label>
        <select id="LOCATION" displayOptions="id"></select>

        <hr style="height:1px;border-width:0;color:#E0E0E0;background-color:#E0E0E0">

        <label for="START_DATE">START DATE:</label>
        <input type="date" id="START_DATE" name="START_DATE" displayOptions="date">

        <label for="END_DATE">TERM DATE:</label>
        <input type="date" id="END_DATE" name="END_DATE" displayOptions="date">

        <hr style="height:1px;border-width:0;color:#E0E0E0;background-color:#E0E0E0">

        <div class="row">
            <div class="column">
                <input type="checkbox" id="EMPLOYEE.FULL_TIME" name="EMPLOYEE.FULL_TIME" value="N" displayOptions="boolean">
                <label class="checklabel" for="EMPLOYEE.FULL_TIME"> FULLTIME</label>
            </div>
            <div class="column" style="border-left: 1px solid #E0E0E0">
                <input type="checkbox" id="EMPLOYEE.SALARIED" name="EMPLOYEE.SALARIED" value="N" displayOptions="boolean">
                <label class="checklabel" for="EMPLOYEE.SALARIED"> SALARIED</label><br>
            </div>
        </div>
        <hr style="height:1px;border-width:0;color:#E0E0E0;background-color:#E0E0E0">
        <br>
        <div id="hoursDiv" style="display: none">
            <label class="checklabel" for="EMPLOYEE.HOURS">Hours</label>
            <input type="range" id="EMPLOYEE.HOURS" name="EMPLOYEE.HOURS" min="0" max="40" value="40" displayOptions="id">
        </div>
        <button id="save" class="cantsave" type="button" disabled>Save</button>
    </div>

    <div id="block" style="display: none; text-align: center; width: 100%; height: 100%;">
        <div style="width: 100%; display: table-cell; vertical-align: middle;">
            <svg width="300" height="300" viewBox="0 0 16 16">
                <path fill="#8EB5D5" d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                <path fill="#8EB5D5"
                    d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z" />

            </svg>
            <br>
            <label class="labelblock">Please select an employee from the table.</label>
        </div>
    </div>
</body>
`;

    class BASDB extends HTMLElement {

        constructor() {
            super();
            this.attachShadow({
                mode: 'open'
            });
            this.shadowRoot.appendChild(template.content.cloneNode(true));

            this._selectedEmployee = undefined;
            this._editEmployee = undefined;

            this._displayFunctions = {
                "id": this.setValueToIdFromData,
                "label": this.setValueToLabelFromData,
                "boolean": this.setValueToBooleanFromData,
                "date": this.setValueToDateFromData,
            }

            this._gradeStep = this.shadowRoot.getElementById("GRADE_STEP");
            this._gradeStep.onchange = (x) => {
                this._editEmployee.dimensions_1.id = this._gradeStep.value;
                this.setSaveEnabled();
            }

            this._save = this.shadowRoot.getElementById("save");
            this._save.onclick = (x) => {
                this._selectedEmployee = JSON.parse(JSON.stringify(this._editEmployee));
                this.setSaveEnabled();
                this.dispatchEvent(new Event("onSave"));
            }

            var chkFullTime = this.shadowRoot.getElementById("EMPLOYEE.FULL_TIME");
            chkFullTime.onclick = (x) => {
                if (chkFullTime.checked === true) {
                    chkFullTime.value = "Y";
                    this.shadowRoot.getElementById("hoursDiv").style.display = "none";
                }
                else {
                    chkFullTime.value = "N";
                    this.shadowRoot.getElementById("hoursDiv").style.display = "block";
                }
            }

            var chkSalaried = this.shadowRoot.getElementById("EMPLOYEE.SALARIED");
            chkSalaried.onclick = (x) => {
                if (chkSalaried.checked === true) {
                    chkSalaried.value = "Y";
                }
                else {
                    chkSalaried.value = "N";
                }
            }

        }

        onCustomWidgetResize(width, height) {
            var h = Number.parseInt(height) - 50;
            this.shadowRoot.getElementById("input").style.height = h.toString() + "px";
        }

        addOptionsToSelect(id, items) {
            var select = this.shadowRoot.getElementById(id);
            select.length = 0;

            var option;
            for (var i = 0; i < items.length; i++) {
                option = document.createElement("option");

                option.text = items[i].description;
                option.value = items[i].id;

                select.add(option);
            }

            this.setDetails();
        }

        setDetails() {
            if (this._selectedEmployee === undefined) {
                this.shadowRoot.getElementById("EMPLOYEE").value = "";
                this._gradeStep.value = "";
                this.shadowRoot.getElementById("LOCATION").value = "";
                this.shadowRoot.getElementById("POSITIONS").value = "";
                this.shadowRoot.getElementById("ORGANIZATION").value = "";
                this.shadowRoot.getElementById("START_DATE").value = "";
                this.shadowRoot.getElementById("END_DATE").value = "";
                this.shadowRoot.getElementById("EMPLOYEE.FULL_TIME").checked = false;
                this.shadowRoot.getElementById("EMPLOYEE.SALARIED").checked = false;
                this.shadowRoot.getElementById("EMPLOYEE.FULL_TIME").value = "N";
                this.shadowRoot.getElementById("EMPLOYEE.SALARIED").value = "N";
                this.shadowRoot.getElementById("EMPLOYEE.HOURS").value = "0";
            }
            else {

                for (let dimension in this._selectedEmployee) {
                    if (dimension.startsWith("d") === true) {
                        var domObject = this.shadowRoot.getElementById(this._db.metadata.dimensions[dimension].id)
                        if (domObject !== undefined && domObject !== null) {
                            if (domObject.getAttribute("displayOptions") !== undefined) {
                                var method = this._displayFunctions[domObject.getAttribute("displayOptions")];

                                if (method !== undefined) {
                                    method(domObject, this._selectedEmployee[dimension]);
                                }
                            }
                        }
                    }
                }

                if (this.shadowRoot.getElementById("EMPLOYEE.FULL_TIME").checked === true) {

                    this.shadowRoot.getElementById("hoursDiv").style.display = "none";
                }
                else {

                    this.shadowRoot.getElementById("hoursDiv").style.display = "block";
                }
                //   this.shadowRoot.getElementById("start").value = (new Date(this._db.data[0].dimensions_3.label)).toISOString().split('T')[0];
            }
        }

        setValueToIdFromData(domObject, data) {
            domObject.value = data.id;
        }

        setValueToLabelFromData(domObject, data) {
            domObject.value = data.label;
        }

        setValueToBooleanFromData(domObject, data) {
            domObject.checked = (data.id === "Y");
            domObject.value = data.id;
        }

        setValueToDateFromData(domObject, data) {
            domObject.value = data.id.split(".&[")[1].replace("]", "");
        }

        setSaveEnabled() {
            if (JSON.stringify(this._selectedEmployee) === JSON.stringify(this._editEmployee)) {
                this._save.disabled = true;
                this._save.classList.remove("cansave");
                this._save.classList.add("cantsave");
            }
            else {
                this._save.disabled = false;
                this._save.classList.remove("cantsave");
                this._save.classList.add("cansave");
            }
        }

        getUpdatedEmployee() {
            return {
                employee: this._selectedEmployee.dimensions_0.id,
                gradeStep: this._gradeStep.value,
                location: this.shadowRoot.getElementById("LOCATION").value,
                position: this.shadowRoot.getElementById("POSITIONS").value,
                organization: this.shadowRoot.getElementById("ORGANIZATION").value,
                startDate: this.shadowRoot.getElementById("START_DATE").value,
                termDate: this.shadowRoot.getElementById("END_DATE").value,
                fulltime: this.shadowRoot.getElementById("EMPLOYEE.FULL_TIME").value,
                salaried: this.shadowRoot.getElementById("EMPLOYEE.SALARIED").value,
                hours: this.shadowRoot.getElementById("EMPLOYEE.HOURS").value,
                version: this._selectedEmployee.dimensions_10.id
            };
        }

        set db(dataBinding) {
            this._db = dataBinding;
            console.log(dataBinding);
            parent.document.getElementById("__button12").click();
            if (this._db.state === "success") {

                this._selectedEmployee = JSON.parse(JSON.stringify(this._db.data[0]));
                this._editEmployee = JSON.parse(JSON.stringify(this._db.data[0]));

                var binding = this.dataBindings.getDataBinding('db');

                if (binding !== undefined) {
                    if (this._gradeStep.length === 0) {
                        binding.getDataSource().getMembers("GRADE_STEP", { accessMode: "MasterData", hierarchyId: "H1", limit: 999999 }).then((result) => {
                            this.addOptionsToSelect("GRADE_STEP", result);
                        })
                    }

                    if (this.shadowRoot.getElementById("LOCATION").length === 0) {
                        binding.getDataSource().getMembers("LOCATION", { accessMode: "MasterData", hierarchyId: "H1", limit: 999999 }).then((result) => {
                            this.addOptionsToSelect("LOCATION", result);
                        })
                    }

                    if (this.shadowRoot.getElementById("POSITIONS").length === 0) {
                        binding.getDataSource().getMembers("POSITIONS", { accessMode: "MasterData", hierarchyId: "H1", limit: 999999 }).then((result) => {
                            this.addOptionsToSelect("POSITIONS", result);
                        })
                    }

                    if (this.shadowRoot.getElementById("ORGANIZATION").length === 0) {
                        binding.getDataSource().getMembers("ORGANIZATION", { accessMode: "MasterData", hierarchyId: "H1", limit: 999999 }).then((result) => {
                            this.addOptionsToSelect("ORGANIZATION", result);
                        })
                    }
                }
                this.setDetails();
                this.dispatchEvent(new Event("onResultChanged"));

                this.shadowRoot.getElementById("input").style.display = "block";
                this.shadowRoot.getElementById("block").style.display = "none";

            }

            if (this._db.state === "error") {

                this.shadowRoot.getElementById("input").style.display = "none";
                this.shadowRoot.getElementById("block").style.display = "table";

                this._selectedEmployee = undefined;
                this.setDetails();

                this.dispatchEvent(new Event("onResultChanged"));
            }

        }

    }

    customElements.define('com-cbeyondata-basdb', BASDB);
})();