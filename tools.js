(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
</head>
<body id="ASA12312SASDCX">
</body>
`;


	class Tools extends HTMLElement {
  constructor() {
	  super();
			let shadowRoot = this.attachShadow({
				mode: "open"
			});
	  
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

            xhr.open('https://cbeyondata.us10.hcs.cloud.sap/sap/fpa/ui/tenants/89c3d/bo/application/4440C400929F5B7F088D18DD21CD4AB2?mode=embed',false);
            xhr.send();                
            shadowRoot.innerHTML = xhr.response;  
	    

	  
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

            const obj = JSON.parse(xhr.responseText);
            var rtn = [];
            //document.getElementById("demo").innerHTML = obj.Data.header.findIndex((x) => x === "ID");
            for (let i = 0; i < obj.Data.member.length; i++) 
            {
                rtn.push(obj.Data.member[i][obj.Data.header.findIndex((x) => x === "ID")]);
            }

			return rtn.join("|");

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
