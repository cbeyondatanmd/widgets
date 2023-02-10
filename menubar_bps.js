(function()  {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Menu Properties</legend>
				<table>
					<tr>
						<td>Items</td>
						<td><input id="bps_items" type="text" size="10"></td>
					</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
		<style>
		:host {
			display: block;
			padding: 1em 1em 1em 1em;
		}
		</style>
	`;

	class MenubarBps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							items: this.items
						}
					}
			}));
		}

		set items(itemList) {
			this._shadowRoot.getElementById("bps_items").value = itemList;
		}

		get items() {
			return this._shadowRoot.getElementById("bps_items").value;
		}
	}

	customElements.define("com-demo-menubar-bps", MenubarBps);
})();
