(function () {
    let template = document.createElement("template");
    template.innerHTML = `
<head>
</head>
<body/>
`;


    class Content extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({
                mode: "open"
            });
            shadowRoot.appendChild(template.content.cloneNode(true));

            this._props = {};
            var _selectedItem;
        }

        loadScreen(key, url) {
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.id = key;
            iframe.style = "visibility: hidden; position:absolute; top:0px; left:0px; width:100%; height:100%; border: none; overflow: hidden;"
            iframe.addEventListener("load", () => {
                this.dispatchEvent(new Event("onLoad"));
            });
            this.shadowRoot.appendChild(iframe);
            return "";
        }

        postMessage(message) {
            var iframe = this.shadowRoot.getElementById(this._selectedItem);

            if (iframe) {
                iframe.contentWindow.postMessage("REFRESH", "*");
            }
            return "";
        }

        showScreen(key, filter) {
            var rtn = false;

            var iframe = this.shadowRoot.getElementById(this._selectedItem);
            if (iframe) {
                iframe.style.visibility = "hidden";
            }

            iframe = this.shadowRoot.getElementById(key);
            if (iframe) {
                this._selectedItem = key;
                rtn = true;
                iframe.style.visibility = "visible";
                iframe.contentWindow.postMessage(filter, "*");
                ///////
                var shellContent = iframe.getElementById("shell_content");
                var sapHcsShellMainContent = iframe.getElementsByClassName("sapHcsShellMainContent");
                var sapHcsShellMainContainer = iframe.getElementsByClassName("sapHcsShellMainContainer");

                if (shellContent !== undefined && shellContent !== null) {
                    if (shellContent.classList.length > 0) {
                        shellContent.classList.remove("sapMNav");
                    }
                }

                if (sapHcsShellMainContent !== undefined && sapHcsShellMainContent !== null) {
                    if (sapHcsShellMainContent.length > 0) {
                        if (sapHcsShellMainContent[0].classList.length > 0) {
                            sapHcsShellMainContent[0].classList.remove("sapHcsShellMainContent");
                        }
                    }
                }

                if (sapHcsShellMainContainer !== undefined && sapHcsShellMainContainer !== null) {
                    if (sapHcsShellMainContainer.length > 0) {
                        if (sapHcsShellMainContainer[0].classList.length > 0) {
                            sapHcsShellMainContainer[0].classList.remove("sapHcsShellMainContainer");
                        }
                    }
                }
                /////////                
            }

            return rtn;
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = {
                ...this._props,
                ...changedProperties
            };
        }
        onCustomWidgetAfterUpdate(changedProperties) {

        }
    }
    customElements.define("com-cbeyondata-content", Content);
})();