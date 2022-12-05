(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
</head>
<body id="ASA12312SASDCX">


<div style="width:100%; position:relative;">
  <iframe id="frame1a" src="https://cbeyondata.us10.hcs.cloud.sap/sap/fpa/ui/tenants/89c3d/bo/application/7F0050867C996BEAEA2CD148810F9CA9?mode=embed" style="position:absolute; top:0px; left:0px; width:100%; height:100%; border: none; overflow: hidden;">
</div>
<div style="width:100%; position:relative;">
  <iframe id="frame1b" src="https://cbeyondata.us10.hcs.cloud.sap/sap/fpa/ui/tenants/89c3d/bo/application/1440C400929936218F1314B3AABF4C35?mode=embed" style="position:absolute; top:0px; left:0px; width:100%; height:100%; border: none; overflow: hidden;">
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
			
			var visibility = this.shadowRoot.getElementById("frame1a").style.visibility; 
			if (visibility === "" || visibility === "hidden")
			{
				this.shadowRoot.getElementById("frame1a").style.visibility = "visible"; 			
				this.shadowRoot.getElementById("frame1b").style.visibility = "hidden"; 			
			}
			else
			{
				this.shadowRoot.getElementById("frame1b").style.visibility = "visible"; 			
				this.shadowRoot.getElementById("frame1a").style.visibility = "hidden"; 			
			}
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
