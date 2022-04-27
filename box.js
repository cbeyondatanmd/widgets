(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
<style>

table, tr, td {

	background-color:rgb(41, 49, 58);	   
    width:100%;

}

td {
padding:0pt 5pt;
}

.sel {
    background-color:rgb(242, 98, 28);
}

.sela {
	background-color:rgb(52, 75, 95);
}

body {
  background-color: rgb(41, 49, 58);
}

p {

	background-color:rgb(41, 49, 58);
	color:rgb(221, 210, 211);
	font-family:Calibri;
	font-size:10.5pt;
	font-weight:bold;
padding:0pt 5pt;
}

a {

	cursor:pointer;
	color:white;
	font-family:Calibri;
	font-size:10.5pt;
	font-weight:bold;
	text-decoration:none;
	padding:10pt 14pt;
    display: block;
	height:100%;
    width:88%;

}

a:hover {
	background-color:rgb(47, 62, 83);
}
td:active {
	position:relative;
	top:1px;
}

.icon { 
  width: 16px;
  height: 16px;
  display: inline-block;
  background-size: contain;
  vertical-align: top;
  filter: invert(.8) sepia(.3) hue-rotate(170deg) saturate(300%) opacity(60%);
}

</style>
</head>
<body>
<p>NAVIGATION</p>
<table id="tableNavigation">
</table>
<p>ADMIN</p>
<table id="tableAdmin">
</table>
<p id="context"></p>
<table id="tableContext">
</table>
</body>
 `;


	class Box extends HTMLElement {
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
        setSelected(newSelected) 
        {
            var cell;
            var anchor;

            if (this._oldSelectedItem)
            {
                cell = this.shadowRoot.getElementById(this._oldSelectedItem);
                anchor = this.shadowRoot.getElementById(this._oldSelectedItem + "A");
                
                cell.classList.remove("sel");
                anchor.classList.remove("sela");
            }

			this._oldSelectedItem = newSelected;
			this._selectedItem = newSelected;

			cell = this.shadowRoot.getElementById(newSelected);
			anchor = this.shadowRoot.getElementById(newSelected + "A");
			
			cell.classList.add("sel");
			anchor.classList.add("sela");
		}

        getSelected() {
            return this._selectedItem;
        }

		addContext(caption, icon) {
			var table = this.shadowRoot.getElementById("tableContext");
			var row = table.insertRow(0);
			var cell = row.insertCell(0);
			
			cell.innerHTML = '<a href="" onclick="return false;"><img class="icon" src="data:image/svg+xml;base64,' + icon + '"/>&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';	
			cell.addEventListener("click", () => {
				this._selectedItem = caption;
			});			
            console.log(this.shadowRoot);
	}

		addNavigation(caption, icon) {
			var table = this.shadowRoot.getElementById("tableNavigation");
			var row = table.insertRow(0);
			var cell = row.insertCell(0);
			cell.id = caption;
			cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><img class="icon" src="data:image/svg+xml;base64,' + icon + '"/>&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';		
			cell.addEventListener("click", () => {
				this._selectedItem = caption;
			});			
        }

		addAdmin(caption, icon) {
			var table = this.shadowRoot.getElementById("tableAdmin");
			var row = table.insertRow(0);
			var cell = row.insertCell(0);
			cell.id = caption;
			cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><img class="icon" src="data:image/svg+xml;base64,' + icon + '"/>&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';	
			cell.addEventListener("click", () => {
				this._selectedItem = caption;
			});			
        }

		clearContext() {
			var table = this.shadowRoot.getElementById("tableContext");
			while(table.rows.length > 0) 
				{
					table.deleteRow(0);
			  	}
        }

		setContextHeader(caption) {
			var p = this.shadowRoot.getElementById("context");
			
			p.innerHTML = caption;			
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
	customElements.define("com-cbeyondata-sidepanel", Box);
})();
