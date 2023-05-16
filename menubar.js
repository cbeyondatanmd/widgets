(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
<style>
.dropdown .dropbtn {
  cursor: pointer;
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}




.dropdown-content {
  display: none;
  border-radius:5px;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: inherit;
}


.show {
  display: inline-block;

}




/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 30px;
  padding-top: 7px;
  cursor: pointer;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 25px;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 8px;
  left: 8px;
  height: 12px;
  width: 12px;
  background-color: #FFF;
  border: 2px solid RGB(66,124,172);

}

/* On mouse-over, add a grey background color */
.container:hover  {
  background-color: #eff5f9;
 border-radius:5px;
}



/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  fill: black;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
  
}
.container .checkmark:after {
  left: 3px;
  top: 0px;
  width: 3px;
  height: 8px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Style the checkmark/indicator */

table, tr, td {

	background-color:rgb(239, 245, 249);	   
    

}


.sel {
    background-color:rgb(242, 98, 28);
}

.sela {
	background-color:rgb(52, 75, 95);
}

body {
  background-color: rgb(239, 245, 249);
}

p {

	background-color:rgb(239, 245, 249);
	color:rgb(221, 210, 211);
	font-family:Calibri;
	font-size:10.5pt;
	font-weight:bold;
padding:0pt 5pt;
}

.child {
  position: relative;
  top: 2px;  /* relative to parent container */

}
.childtext {
  position: relative;
  top: -2px;  /* relative to parent container */
  
}

path {
  fill: #427CAC;
}

a {
	cursor:pointer;
	color:rgb(70,70,70);
	font-family:Calibri;
	font-size:10.5pt;
	font-weight:bold;
	text-decoration:none;
	padding:7pt 14pt;
    display: block;
	height:100%;

}

a:hover {
	background-color:rgb(229, 235, 239);
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
  filter: invert(.8) sepia(.3) hue-rotate(170deg) saturate(300%) opacity(80%);
}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>
</head>
<body>
<table id="tableNavigation">
<tr id="rowMenu">
</tr>
</table>
<table id="tableAdmin">
</table>
<p id="context"></p>
<table id="tableContext">
</table>


  <div style="left:123px;top:46px" class="dropdown-content" id="LAYOUTS__DC">
<label class="container">Org
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
</label>
<label class="container">Project
  <input type="checkbox">
  <span class="checkmark"></span>
</label>
<label class="container">Object Class
  <input type="checkbox">
  <span class="checkmark"></span>
</label>
<hr size=0.5px>
<label class="container">Advanced...

 
</label>
  </div>


</body>
 `;


	class MenuBar extends HTMLElement {
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
            }

			this._oldSelectedItem = newSelected;
			this._selectedItem = newSelected;

			cell = this.shadowRoot.getElementById(newSelected);
			anchor = this.shadowRoot.getElementById(newSelected + "A");
			
			cell.classList.add("sel");
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
			var row = this.shadowRoot.getElementById("rowMenu");
			var cell = row.insertCell(0);
			
cell.innerHTML = '<a href="" onclick="return false;"><svg width="16" height="16" viewBox="0 0 32 32"><path d="M30.148 5.588c-2.934-3.42-7.288-5.588-12.148-5.588-8.837 0-16 7.163-16 16s7.163 16 16 16c4.86 0 9.213-2.167 12.148-5.588l-10.148-10.412 10.148-10.412zM22 3.769c1.232 0 2.231 0.999 2.231 2.231s-0.999 2.231-2.231 2.231-2.231-0.999-2.231-2.231c0-1.232 0.999-2.231 2.231-2.231z"></path></svg>&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';	
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
			var row = this.shadowRoot.getElementById("rowMenu");
			var cell = row.insertCell(0);
			var icons = {
    "plus": [448, 512, [], "f1da", "M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"],
    "clock-rotate-left": [512, 512, ["history"], "f1da", "M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C201.7 512 151.2 495 109.7 466.1C95.2 455.1 91.64 436 101.8 421.5C111.9 407 131.8 403.5 146.3 413.6C177.4 435.3 215.2 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C202.1 64 155 85.46 120.2 120.2L151 151C166.1 166.1 155.4 192 134.1 192H24C10.75 192 0 181.3 0 168V57.94C0 36.56 25.85 25.85 40.97 40.97L74.98 74.98C121.3 28.69 185.3 0 255.1 0L256 0zM256 128C269.3 128 280 138.7 280 152V246.1L344.1 311C354.3 320.4 354.3 335.6 344.1 344.1C335.6 354.3 320.4 354.3 311 344.1L239 272.1C234.5 268.5 232 262.4 232 256V152C232 138.7 242.7 128 256 128V128z"],
    "table-cells-large": [512, 512, ["th-large"], "f009", "M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM448 96H288V224H448V96zM448 288H288V416H448V288zM224 224V96H64V224H224zM64 416H224V288H64V416z"],
    "user-plus": [640, 512, [], "f234", "M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"],
    "copy": [512, 512, [], "f0c5", "M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z"],
    "floppy-disk": [448, 512, [128426, 128190, "save"], "f0c7", "M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z"],
				    "arrows-rotate": [512, 512, [128472, "refresh", "sync"], "f021", "M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"]
			}
			cell.id = caption;
//this.shadowRoot.activeElement.getBoundingClientRect()
cell.classList.add("dropdown");
cell.innerHTML = '<a href="" onclick="return false;"><svg class="child" width="16" height="16" viewBox="0 0 '+icons[icon][0]+' '+icons[icon][1]+'"><path d="' + icons[icon][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span></a>';	
			if (caption==="LAYOUTS")
			{
			cell.addEventListener('mouseleave', (event) => {
					                       				var event = new Event("onCollapse");
				this.dispatchEvent(event);				
				});
		cell.addEventListener('mouseenter', (event) => {
                       				var event = new Event("onExpand");
				this.dispatchEvent(event);		
		});
			}
			
			cell.addEventListener("click", () => {
                this._selectedItem = caption;
				this.shadowRoot.getElementById(caption+"__DC").classList.toggle("show");
				
				if (this.shadowRoot.getElementById(caption+"__DC").classList.contains('show'))
				{
                       				var event = new Event("onExpand");
				this.dispatchEvent(event);
				}
				else
				{
					                       				var event = new Event("onCollapse");
				this.dispatchEvent(event);
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
			var row = this.shadowRoot.getElementById("rowMenu");
			while(row.cells.length > 0) 
				{
					row.deleteCell(0);
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
			if ("items" in changedProperties) {
			var row = this.shadowRoot.getElementById("rowMenu");
			while(row.cells.length > 0) 
				{
					row.deleteCell(0);
			  	}				
				this.$items = changedProperties["items"];
                var itemArray = this.$items.split("|");
                for (var i = 0; i < itemArray.length; i++)
                {
                    var item = itemArray[i].split("=");
                    this.addNavigation(item[0],item[1],"");
                }
			}
			
			console.log(this.$items);
		}
	}
	customElements.define("com-cbeyondata-menubar", MenuBar);
})();
