(function() {
 let template = document.createElement("template");
 template.innerHTML = `
 
 <script>
function myFunction(newCaption, newHref) {
var table = this.shadowRoot.getElementById("myTable");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = newCaption;
cell2.innerHTML = newHref;  
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
</script>

<table id="myTable">

</table>

 <style>
 :host {
 border-radius: 25px;
 border-width: 4px;
 border-color: black;
 border-style: solid;
 display: block;
 } 
 </style>
 `;
 class Box extends HTMLElement {
 constructor() {
 super();
 let shadowRoot = this.attachShadow({mode: "open"});
 shadowRoot.appendChild(template.content.cloneNode(true));
 this.addEventListener("click", event => {
 var event = new Event("onClick");
 this.dispatchEvent(event);
 });
 this._props = {};
 }
 onCustomWidgetBeforeUpdate(changedProperties) {
 this._props = { ...this._props, ...changedProperties };
 }
 onCustomWidgetAfterUpdate(changedProperties) {
 if ("dumb" in changedProperties) {
    myFunction(changedProperties["dumb"].split('|')[0],changedProperties["dumb"].split('|')[1]);
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
