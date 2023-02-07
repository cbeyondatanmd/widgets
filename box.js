(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
<script>

</script>
<style>
path {
  fill: #7E99B0;
}
.childtext {
  position: relative;
  top: -3px;  /* relative to parent container */
  
}
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
    transition-duration:0.25s;
  
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
    width:92%;

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
<p><i class="fa-solid fa-user"></i>NAVIGATION</p>
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
            if (cell.parentElement.hidden)
            {
		var caption =  cell.parentNode.getAttribute("parentname").toString();
                
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
                        parentCaratNode.classList.remove("rotated"); 
                    }
                    else
                    {
                        parentCaratNode.classList.add("rotated");
                    }
                }
            }
		}

        getSelected() {
            return this._selectedItem;
        }

        getClientHeight() {
            var rtn = 0;
            for (let i = 0; i < this.shadowRoot.getRootNode().children.length; i++) {
                rtn += this.shadowRoot.getRootNode().children[i].clientHeight;
              }
            return rtn;
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
			//var nodeList = document.querySelectorAll('[title="Prior Spend plan"]');
			//if (nodeList)
			//{
			//	if (nodeList.length>1)
			//	{
			//		nodeList[1].innerText = caption;
			//	}
			//}
		}
		addNavigation(caption, icon, parentname) {
			var table = this.shadowRoot.getElementById("tableNavigation");
			var row = table.insertRow(0);
			var cell = row.insertCell(0);
			cell.id = caption;
 var icons = {
    "0": [320, 512, [], "30", "M160 32.01c-88.37 0-160 71.63-160 160v127.1c0 88.37 71.63 160 160 160s160-71.63 160-160V192C320 103.6 248.4 32.01 160 32.01zM256 320c0 52.93-43.06 96-96 96c-52.93 0-96-43.07-96-96V192c0-52.94 43.07-96 96-96c52.94 0 96 43.06 96 96V320z"],
    "1": [256, 512, [], "31", "M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z"],
    "crosshairs": [512, 512, [], "f05b", "M224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256zM256 0C273.7 0 288 14.33 288 32V42.35C381.7 56.27 455.7 130.3 469.6 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H469.6C455.7 381.7 381.7 455.7 288 469.6V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V469.6C130.3 455.7 56.27 381.7 42.35 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H42.35C56.27 130.3 130.3 56.27 224 42.35V32C224 14.33 238.3 0 256 0V0zM224 404.6V384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384V404.6C346.3 392.1 392.1 346.3 404.6 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H404.6C392.1 165.7 346.3 119.9 288 107.4V128C288 145.7 273.7 160 256 160C238.3 160 224 145.7 224 128V107.4C165.7 119.9 119.9 165.7 107.4 224H128C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288H107.4C119.9 346.3 165.7 392.1 224 404.6z"]
};
            if (parentname==="*")
            {
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><svg class="child" width="16" height="16" viewBox="0 0 512 512"><path d="' + icons[icon][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span><img id="'+caption+'C" class="icon" style="float:right;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTY0IDQ0OGMtOC4xODggMC0xNi4zOC0zLjEyNS0yMi42Mi05LjM3NWMtMTIuNS0xMi41LTEyLjUtMzIuNzUgMC00NS4yNUwxNzguOCAyNTZMNDEuMzggMTE4LjZjLTEyLjUtMTIuNS0xMi41LTMyLjc1IDAtNDUuMjVzMzIuNzUtMTIuNSA0NS4yNSAwbDE2MCAxNjBjMTIuNSAxMi41IDEyLjUgMzIuNzUgMCA0NS4yNWwtMTYwIDE2MEM4MC4zOCA0NDQuOSA3Mi4xOSA0NDggNjQgNDQ4eiIvPjwvc3ZnPg=="/></a>';
            }
            else if (parentname)
            {
                row.setAttribute("parentname", parentname);
                row.classList.add("childNav");
                row.hidden=true;
                cell.classList.add("childNav");
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';
            }
            else
            {
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><svg class="child" width="16" height="16" viewBox="0 0 512 512"><path d="' + icons[icon][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span></a>';	
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
                        parentCaratNode.classList.remove("rotated"); 
                    }
                    else
                    {
                        parentCaratNode.classList.add("rotated");
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

        eventFire(el, etype){
            if (el.fireEvent) {
              el.fireEvent('on' + etype);
            } else {
              var evObj = document.createEvent('Events');
              evObj.initEvent(etype, true, false);
              el.dispatchEvent(evObj);
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
	customElements.define("com-cbeyondata-sidepanel", Box);
})();