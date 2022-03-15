(function() {
 let template = document.createElement("template");
 template.innerHTML = `
 <form id="form">
 <fieldset>
 <legend>Box Properties</legend>
 <table>
 <tr>
 <td>Color</td>
 <td><input id="styling_color" type="text" size="40" maxlength="40"></td>
 </tr>
 </table>
 <input type="submit" style="display:none;">
 </fieldset>
 </form>
 `;
 class BoxStylingPanel extends HTMLElement {
 constructor() {
 super();
 this._shadowRoot = this.attachShadow({mode: "open"});
 this._shadowRoot.appendChild(template.content.cloneNode(true));

this._shadowRoot.getElementById("form").addEventListener("submit",
this._submit.bind(this));
 }
 _submit(e) {
 e.preventDefault();
 this.dispatchEvent(new CustomEvent("propertiesChanged", {
 detail: {
 properties: {
 color: this.color
 }
 }
 }));
 }
 set color(newColor) {
 this._shadowRoot.getElementById("styling_color").value = newColor;
// Find a <table> element with id="myTable":
var table = this._shadowRoot.getElementById("myTable");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";
 }
 get color() {
 return this._shadowRoot.getElementById("styling_color").value;
 }
 }
customElements.define("com-sample-boxstyling", BoxStylingPanel);
