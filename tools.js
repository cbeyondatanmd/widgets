(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
</head>
<body id="ASA12312SASDCX">
<div style="width:100%; padding-bottom:56.25%; position:relative;">
  <iframe src="https://cbeyondata.us10.hcs.cloud.sap/sap/fpa/ui/tenants/89c3d/bo/application/7F0050867C996BEAEA2CD148810F9CA9?mode=embed" style="position:absolute; top:0px; left:0px; 
  width:100%; height:100%; border: none; overflow: hidden;">iframe>
div>

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
