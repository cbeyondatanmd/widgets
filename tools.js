(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
</head>
<body>
<p>Tools</p>
<div id="__button141" data-sap-ui="__button141" class="sapEpmToolbarItem sapEpmToolbarElement sapEpmUiPageTipEnabled">
    <button type="button" id="__button142" data-sap-ui="__button142" title="Version Management" class="sapEpmUiButton">
        <div id="__button142-inner" class="sapEpmUiButtonInner">
            <div id="__icon351" data-sap-ui="__icon351" class="sapEpmUiIcon">
                <span id="__icon352" data-sap-ui="__icon352" role="presentation" aria-hidden="true" aria-label="versions" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL" style="font-family: 'fpa\2dicons';"></span>
            </div>
        </div>
    </button>
</div>
</body>
 `;


	class Tools extends HTMLElement {
		constructor() {
			super();
			let shadowRoot = this.attachShadow({
				mode: "open"
			});
			shadowRoot.appendChild(template.content.cloneNode(true));

			this._props = {};
			var _selectedItem;
			var _oldSelectedItem = "";

		}

		postMessage(url, body, csrf) {
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.open("POST",window.origin + url,false);

            if (csrf)
            {
                xhr.setRequestHeader("X-CSRF-Token", csrf);                
            }

            xhr.setRequestHeader("Content-Type", "text/plain");
			xhr.send(body);

			return xhr.responseText
            }	  

        getCSRFToken()
        {
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

            xhr.open("GET", window.origin + "/sap/fpa/services/rest/epm/session?action=logon",false);
            xhr.setRequestHeader("X-CSRF-Token", "Fetch");
            xhr.send();                
            return xhr.getResponseHeader("x-csrf-token");           
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
	customElements.define("com-cbeyondata-tools", Tools);
})();
