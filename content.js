(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
</head>
<body>
<div id="cached_screens" style="width:100%; height:100%; position:relative;">
</div>
</body>
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
			var _oldSelectedItem = "";

		}

loadScreen(key, url) {
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.id = key;
this.shadowRoot.getElementById("cached_screens").appendChild(iframe);
 
    return "";
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
