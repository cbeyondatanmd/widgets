(function () {
    let template = document.createElement("template");
    template.innerHTML = `
    <style>
    div {
      display: flex;
      align-items: center;
      background-color: #394A5F;
    }
    .label {
    font: 14px Arial, sans-serif;
    font-weight: bold;
    color: #CED2D6;
    margin-right: 10px;
    margin-left: 5px;
    }
    svg {
    margin-left: 15px;
    margin-right: 5px;
    }
    .value {
    font: 15px Arial, sans-serif;
    font-weight: bold;
    color: #FFFFFF;
    margin-right: 15px;
    }
      .column {
        float: left;
    
        padding: 5px;
        height: 10px; /* Should be removed. Only for demonstration */
      }
      
      /* Clear floats after the columns */
      .row:after {
        content: "";
        display: table;
        clear: both;
      }
      .height {
      height: 32px;
    
    
    }
    </style>
    <body>
    <div class="height">
    <div class="row">
      <div class="column">
    <svg id="existingSGV" width="20" height="20" fill="#FFFFFF" viewBox="0 0 16 16">
      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
      <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
    </svg>
        </svg> 
        <label class="label" id="existingLabel" for="existingSGV">Existing: </label>
        <label class="value" id="existing" for="existingLabel">0</label>
      </div>
      <div class="column" style="border-left: 1px dotted #CED2D6"> 
    <svg id="newSVG" width="20" height="20" fill="#FFFFFF" viewBox="0 0 16 16">
      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
      <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
    </svg>
        </svg> 
        <label class="label" id="newLabel" for="newSVG">New: </label>
        <label class="value" id="new" for="newLabel">0</label>
      </div>
      <div class="column" style="border-left: 1px dotted #CED2D6"> 
    <svg id="totalSVG" width="20" height="20" fill="#FFFFFF" viewBox="0 0 16 16">
      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
    </svg>
        <label class="label" id="totalLabel" for="totalSVG">Total: </label>
        <label class="value" id="total" for="totalLabel">0</label>
      </div></div>
    </div>
    </body>
`;

    class BASHDASH extends HTMLElement {

        constructor() {
            super();
            this.attachShadow({
                mode: 'open'
            });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }

        set db(dataBinding) {
            this._db = dataBinding;
    
            if (this._db.state === "success") {

                this.shadowRoot.getElementById("existing").innerText = this._db.data[0].measures_0.formatted||0;
                this.shadowRoot.getElementById("new").innerText = this._db.data[0].measures_1.formatted||0;
                this.shadowRoot.getElementById("total").innerText = this._db.data[0].measures_2.formatted||0;

                this.dispatchEvent(new Event("onResultChanged"));
                console.log(dataBinding);
            }

            if (this._db.state === "error") {

                this.shadowRoot.getElementById("existing").innerText = "0";
                this.shadowRoot.getElementById("new").innerText = "0";
                this.shadowRoot.getElementById("total").innerText = "0";

                this.dispatchEvent(new Event("onResultChanged"));
            }

        }

    }

    customElements.define('com-cbeyondata-bashdash', BASHDASH);
})();