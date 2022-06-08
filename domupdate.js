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

			this._props = {};
			var _selectedItem;
			var _oldSelectedItem = "";

		}

		setTextByAttributeValue(name, value, text, html) {
			var nodeList = document.querySelectorAll('['+name+'="'+value+'"]');
            var handleChange = (e) => {
                console.log(e.target);
                if (e.target.innerText.length > 0) 
                  {
                      if (e.target.innerText !== text.replace(/\n/g,"") && e.target.innerText !== text) 
                      {
                          e.target.innerText = text;
			              e.target.innerHTML = e.target.innerHTML + html;
                      }
                  }
                }
			if (nodeList)
			{
				if (nodeList.length > 0)
				{
					//nodeList[1].innerText = text;
					for (let i = 0; i < nodeList.length; i++) {
						nodeList[i].getElementsByTagName("span")[0].innerText = text;
                        nodeList[i].getElementsByTagName("span")[0].innerHTML = nodeList[i].getElementsByTagName("span")[0].innerHTML + html;
						if (nodeList[i].getElementsByTagName("img")[0])
						{
			nodeList[i].getElementsByTagName("img")[0].addEventListener("click", event=> {
				var event = new Event("onClick");
				this.dispatchEvent(event);
});
						}
                        //    nodeList[i].getElementsByTagName("span")[0].removeEventListener('DOMSubtreeModified' , handleChange);	
						
                        //    nodeList[i].getElementsByTagName("span")[0].addEventListener('DOMSubtreeModified' , handleChange);
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
