(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
<style>

table, tr, td {

	background-color:rgb(41, 49, 58);	   
    width:100%;

}

.childNav {

	background-color:rgb(31, 39, 48);	   
    width:100%;

}

.rotated {
    transform: rotate(90deg); /* Equal to rotateZ(45deg) */
    transition-duration:0.5s;
  
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

			//console.log(document.querySelectorAll('[title="Prior Spend plan"]'));
			var nodeList = document.querySelectorAll('[title="Prior Spend plan"]');
			if (nodeList)
			{
				if (nodeList.length>1)
				{
					nodeList[1].innerText = caption;
				}
			}
		}
		addNavigation(caption, icon, parentname) {
			var table = this.shadowRoot.getElementById("tableNavigation");
			var row = table.insertRow(0);
			var cell = row.insertCell(0);
			cell.id = caption;

            if (parentname==="*")
            {
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><img class="icon" src="data:image/svg+xml;base64,' + icon + '"/>&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;<img id="'+caption+'C" class="icon" style="float:right;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTY0IDQ0OGMtOC4xODggMC0xNi4zOC0zLjEyNS0yMi42Mi05LjM3NWMtMTIuNS0xMi41LTEyLjUtMzIuNzUgMC00NS4yNUwxNzguOCAyNTZMNDEuMzggMTE4LjZjLTEyLjUtMTIuNS0xMi41LTMyLjc1IDAtNDUuMjVzMzIuNzUtMTIuNSA0NS4yNSAwbDE2MCAxNjBjMTIuNSAxMi41IDEyLjUgMzIuNzUgMCA0NS4yNWwtMTYwIDE2MEM4MC4zOCA0NDQuOSA3Mi4xOSA0NDggNjQgNDQ4eiIvPjwvc3ZnPg=="/></a>';
            }
            else if (parentname)
            {
                row.setAttribute("parentname", parentname);
                row.classList.add("childNav");
                row.hidden=true;
                cell.classList.add("childNav");
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><img class="icon" src="data:image/svg+xml;base64,' + icon + '"/>&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';
            }
            else
            {
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><img class="icon" src="data:image/svg+xml;base64,' + icon + '"/>&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';
			}
					

			cell.addEventListener("click", () => {
				this._selectedItem = caption;
                var childRows = this.shadowRoot.querySelectorAll('[parentname="'+caption+'"]');
                var rotate = false;
                for (let i = 0; i < childRows.length; i++) {
                    childRows[i].hidden = !childRows[i].hidden;
                    rotate=childRows[i].hidden;
                  }                
                
                var parentCaratNode = this.shadowRoot.getElementById(caption+'C');
                if (parentCaratNode)
                {
                    if (rotate) 
                    {
                        parentCaratNode.classList.add("rotated");
                    }
                    else
                    {
                        parentCaratNode.classList.remove("rotated");
                    }
                }
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
