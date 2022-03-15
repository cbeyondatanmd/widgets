(function() {
 let template = document.createElement("template");
 template.innerHTML = `
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
    var table = this.shadowRoot.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML=  '<a href="'+ changedProperties["dumb"].split('|')[1] +'">'+ changedProperties["dumb"].split('|')[0] +'</a>';
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
