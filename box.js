(function() {
 let template = document.createElement("template");
 template.innerHTML = `
<table id="myTable">
  <tr>
    <td>Row1 cell1</td>
    <td>Row1 cell2</td>
  </tr>
  <tr>
    <td>Row2 cell1</td>
    <td>Row2 cell2</td>
  </tr>
  <tr>
    <td>Row3 cell1</td>
    <td>Row3 cell2</td>
  </tr>
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
