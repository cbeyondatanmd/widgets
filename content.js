(function() {
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
			var _oldSelectedItem = "";

		}

loadScreen(key, url) {
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.id = key;
	iframe.style = "visibility: visible; position:absolute; top:0px; left:0px; width:100%; height:100%; border: none; overflow: hidden;"
this.shadowRoot.appendChild(iframe);
 
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
