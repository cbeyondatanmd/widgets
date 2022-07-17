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
			var data = "{\"action\":\"postDiscussionComment\",\"data\":{\"commentText\":\"test\",\"contentType\":\"COMMENT\",\"discussionId\":\"513D4F85141A61167E6A58FDB3AC2D4D\",\"discussionType\":\"GROUP\",\"strangers\":[],\"title\":\"\",\"commentType\":\"CONVERSATION\",\"cellAssociation\":{\"reportId\":\"\",\"drillState\":\"\",\"hierarchy\":\"\"}}}";

			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.addEventListener("readystatechange", function() {
			  if(this.readyState === 4) {
			    console.log(this.responseText);
			  }
			});

			xhr.open("POST", "https://cbeyondata.us10.hcs.cloud.sap/sap/fpa/services/rest/fpa/collaboration?tenant=A",false);

			xhr.setRequestHeader("X-CSRF-Token", csrf);
			xhr.setRequestHeader("Content-Type", "text/plain");

			xhr.send(data);

			return xhr.responseText();
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
