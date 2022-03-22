(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<style style="text/css">
  	.hoverTable{
		width:100%; 
		border-collapse:collapse; 
	}
	.hoverTable td{ 
		padding:7px; border:rgb(41, 49, 58) 1px solid;
	}
	/* Define the default color for all the table rows */
	.hoverTable tr{
		background: rgb(41, 49, 58);
         	foreground: rgb(255, 255, 255);		
	}
	/* Define the hover highlight color for the table row */
    .hoverTable tr:hover {
          background-color: rgb(40, 56, 72);
    }
a:link, a:visited {
  background-color: rgb(41, 49, 58);
  color: white;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  width:100%; 
}

a:hover, a:active {
  background-color: rgb(40, 56, 72);
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
				cell1.innerHTML = '<a href="' + changedProperties["addUrl"].split('|')[1] + '">' + changedProperties["addUrl"].split('|')[0] + '</a>';
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
