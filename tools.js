(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
</head>
<body>
<p>Tools</p>
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
            var token = "";
			xhr.withCredentials = true;

			xhr.addEventListener("readystatechange", function() {
			  if(this.readyState === 4) {
			    console.log(this.responseText);
			  }
			});

            if (csrf==="true")
            {
                xhr.open("GET", "https://cbeyondata.us10.hcs.cloud.sap/sap/fpa/services/rest/epm/session?action=logon",false);
                xhr.setRequestHeader("X-CSRF-Token", "Fetch");
                xhr.send();                
                token = xhr.getResponseHeader("x-csrf-token");
            }

			xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.open("POST",url,false);

            if (csrf==="true")
            {
                xhr.setRequestHeader("X-CSRF-Token", token);
                xhr.setRequestHeader("Content-Type", "text/plain");
            }

			xhr.send(body);

			return xhr.responseText
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
