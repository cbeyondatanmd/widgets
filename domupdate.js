(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
</head>
<body>
<p>DOMUpdate</p>
</body>
 `;


	class DOMUpdate extends HTMLElement {
		constructor() {
			super();
			let shadowRoot = this.attachShadow({
				mode: "open"
			});
			shadowRoot.appendChild(template.content.cloneNode(true));
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			this._props = {};
			var _selectedItem;
			var _oldSelectedItem = "";

		}

		setTextByAttributeValue(name, value, text) {
			var nodeList = document.querySelectorAll('['+name+'="'+value+'"]');
			if (nodeList)
			{
				if (nodeList.length>1)
				{
					//nodeList[1].innerText = text;
					for (let i = 1; i < nodeList.length; i++) {
						  nodeList[i].getElementsByTagName("span")[0].innerText = text;
						}
					
				}
			}		
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
	customElements.define("com-cbeyondata-domupdate", DOMUpdate);
})();
