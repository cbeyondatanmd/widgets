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
  z-index: 1;
}


.show {
  display: block;
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


  <div class="dropdown-content" id="LAYOUTS">
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
			cell.id = caption;


cell.innerHTML = '<a href="" onclick="return false;"><svg class="child" width="16" height="16" viewBox="0 0 ' + parentname + '"><path d="' + icon + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span></a>';	
						

			cell.addEventListener("click", () => {
                this._selectedItem = caption;
				this.shadowRoot.getElementById(caption).classList.toggle("show");
                var childRows = this.shadowRoot.querySelectorAll('[parentname="'+caption+'"]');
                var rotate = false;
                for (let i = 0; i < childRows.length; i++) {
                    childRows[i].hidden = !childRows[i].hidden;
                    rotate=childRows[i].hidden;
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
	customElements.define("com-cbeyondata-menubar", MenuBar);
})();
