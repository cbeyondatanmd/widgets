(function() {
	let template = document.createElement("template");
	template.innerHTML =  `
  <head>
	<style>
	table, th, td {
	  border-bottom: 1px dotted grey;
	  border-collapse: collapse;
	  font-family: Calibri, Helvetica, sans-serif;
	  font-size: 16px;
	
	
	}
	
	tr:nth-child(even) {
	  background-color: rgba(150, 212, 212, 0.4);
	}
	
	.intro {
	  background-color: yellow;
	}
	
	</style>
  </head>
  <body>
  
  <div class="container" style="overflow-x:auto;height:40vh">
    <table style="width:100%" id="display_csv_data"></table>
 </div>
 </body>
`;
class Table extends HTMLElement {
    constructor() {
        // Inititialize custom component
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    loadTableFromCSV(s) {

            s = s.replaceAll("\r\n", "</td><tr><td>");
            s = s.replaceAll(",", "</td><td>");
            s = "<tr><td>" + s + "</td></tr>";
            var table = this.shadowRoot.getElementById('display_csv_data');
            table.innerHTML = s;
         console.log(s)


    }
}
window.customElements.define('com-cbeyondata-table', Table);
})();
