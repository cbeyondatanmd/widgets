(function () {
    let template = document.createElement("template");
    template.innerHTML = `
    <head>

    <style>
        .logo {
            display: flex;

        }

        .avatar {
            position: relative;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            top: 7px;
            left: 10px;
        }

        .header {
            color: black;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
            position: relative;
            left: 15px;
        }

        div {
            color: #507cad;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 30px;
            left: 15px;

        }

        div.relative {
            position: relative;
            top: -10px;
        }
    </style>
</head>

<body>
    <div class="logo">
        <img id="EMPLOYEE.PICTURE" src="" alt="" class="avatar"
            onerror="this.style.display = 'none'" onload="this.style.display = 'initial'"  displayOptions="picture">
        <div>
            <p class="header">Employee</p>

            <div id="EMPLOYEE" class="relative" displayOptions="label">
            </div>
        </div>
    </div>
</body>
`;

    class BASEDH extends HTMLElement {

        constructor() {
            super();
            this.attachShadow({
                mode: 'open'
            });
            this.shadowRoot.appendChild(template.content.cloneNode(true));

            this._selectedEmployee = undefined;
            this._editEmployee = undefined;

            this._displayFunctions = {
                "label": this.setValueToLabelFromData,
                "picture": this.setValueToImgFromData
            }

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
                this.shadowRoot.getElementById("EMPLOYEE").innerText = "";
                this.shadowRoot.getElementById("EMPLOYEE.PICTURE").src = "";
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
                //   this.shadowRoot.getElementById("start").value = (new Date(this._db.data[0].dimensions_3.label)).toISOString().split('T')[0];
            }
        }

        setValueToLabelFromData(domObject, data) {
            domObject.innerText = data.label;
        }

        setValueToImgFromData(domObject, data) {
            domObject.src = data.id;
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

            if (this._db.state === "success") {

                this.setDetails();

                this._selectedEmployee = JSON.parse(JSON.stringify(this._db.data[0]));
                this._editEmployee = JSON.parse(JSON.stringify(this._db.data[0]));

                var binding = this.dataBindings.getDataBinding('db');

                this.setDetails();
                this.dispatchEvent(new Event("onResultChanged"));

                //    this.shadowRoot.getElementById("input").style.display = "block";
                //    this.shadowRoot.getElementById("block").style.display = "none";

            }

            if (this._db.state === "error") {
                //    this.shadowRoot.getElementById("input").style.display = "none";
                //    this.shadowRoot.getElementById("block").style.display = "table";

                this._selectedEmployee = undefined;
                this.setDetails();

                this.dispatchEvent(new Event("onResultChanged"));
            }

        }

    }

    customElements.define('com-cbeyondata-basedh', BASEDH);
})();