(function() {
 let template = document.createElement("template");
 template.innerHTML = `
<table id="myTable">

</table>


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
 if ("addUrl" in changedProperties) {
    var table = this.shadowRoot.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML=  '<a href="'+ changedProperties["addUrl"].split('|')[1] +'">'+ changedProperties["addUrl"].split('|')[0] +'</a>';
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
