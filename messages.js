(function () {
    let template = document.createElement("template");
    template.innerHTML = `
    <head>
    </head>
    <body>
    </body>
`;


    class Messages extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({
                mode: "open"
            });
            shadowRoot.appendChild(template.content.cloneNode(true));
            var _select;
        }

        register(id) {
            var div = this.shadowRoot.getElementById("messaging");
            this._select = document.createElement("select");
            this._select.id = id;
            this._select.setAttribute("type", "hidden");
            this._select.appendOption = (x) => {
                this._select.appendChild(x);
                this.dispatchEvent(new Event("messageReceived"));
            }

            parent.document.body.appendChild(this._select);
        }

        sendMessage(id, message) {
            var select = parent.document.getElementById(id);

            if (select !== null) {

                var option = document.createElement("option");
                option.text = JSON.stringify(message);
                
                
                select.appendOption(option);

            }
        }

        getMessage() {
            var rtn = undefined;
            if (this._select.options.length > 0)
            {
                rtn = JSON.parse(this._select.options[0].value);
                this._select.options.remove(0);
            }
            return rtn;
            //return JSON.parse('{"MSG1":{"ID":"001","DETAILS":"Item Details 1"},"MSG2":{"ID":"002","DETAILS":"Item Details 2"}}');           
        }

        initMessage() {
            return undefined;
        }

    }
    customElements.define("com-cbeyondata-messages", Messages);
})();