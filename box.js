(function() {
	let template = document.createElement("template");
	template.innerHTML = `
	<link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css" />
<style style="text/css">
  	.hoverTable{
		width:100%; 
		border-collapse:collapse; 
	}
	.hoverTable td{ 
		border:rgb(41, 49, 58) 1px solid;
	}
	/* Define the default color for all the table rows */
	.hoverTable tr{
		background: rgb(41, 49, 58);
         	color: white;
		  text-align:left; 
		  vertical-align: middle;
		  font-family: "Calibri"; 
		  font-size: 10.5pt; 
		  font-weight: bold; 
		  cursor: pointer;		
	}
	/* Define the hover highlight color for the table row */
    .hoverTable tr:hover {
          background-color: rgb(40, 56, 72);
    }
a {

	background-color:rgb(41, 49, 58);;
	cursor:pointer;
	color:white;
	font-family:Calibri;
	font-size:10.5pt;
	font-weight:bold;
	text-decoration:none;
	padding:10pt 15pt;
    display: block;
	height:100%;
    width:100%;	     
}

a:hover {
	background-color:rgb(47, 62, 83);
}
a:active {
	position:relative;
	top:1px;
}


align-items:center
	  font-family: "Calibri"; 
	  font-size: 10.5pt; 
	  font-weight: bold; 
	  cursor: pointer;	  
	}

</style> 
<table id="myTable" class="hoverTable">

</table>


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

		}
        setSelected(newSelected) 
        {
            this._selectedItem = newSelected;
            // fire "properties changed"
            this.dispatchEvent(
                new CustomEvent("propertiesChanged", 
                    {
                        detail: {
                            properties: {
                                            selectedItem: this._selectedItem
                                        }
                                }
                    }
                ))}

        getSelected() {
            return this._selectedItem;
        }

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = {
				...this._props,
				...changedProperties
			};
		}
		onCustomWidgetAfterUpdate(changedProperties) {
			if ("addUrl" in changedProperties) {
				var table = this.shadowRoot.getElementById("myTable");
				var row = table.insertRow(0);
				var cell1 = row.insertCell(0);
				cell1.setAttribute("style", "cursor:pointer; height:25pt; text-align:center;");
				if (changedProperties["addUrl"].split('|')[1].length === 0)
				{
				cell1.innerHTML = '<a href="" onclick="return false;"><i class="fa-solid fa-user fa-lg">' + changedProperties["addUrl"].split('|')[0] + '</a>';
				}
				else 
				{
				cell1.innerHTML = '<a href="' + changedProperties["addUrl"].split('|')[1] + '"><i class="fa-solid fa-user fa-lg">' + changedProperties["addUrl"].split('|')[0] + '</a>';
				}
				cell1.addEventListener("click", () => {
					this._selectedItem = changedProperties["addUrl"].split('|')[0];
				});
			}
			if ("color" in changedProperties) {
				this.style["background-color"] = changedProperties["color"];
			}
			if ("opacity" in changedProperties) {
				this.style["opacity"] = changedProperties["opacity"];
			}
		}
	}
	customElements.define("com-sample-box", Box);
})();
