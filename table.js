(function() {
	let template = document.createElement("template");
	template.innerHTML =  `
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  </head>
  <body>
  <div class="container">
    <table class="table table-bordered table-striped" id="display_csv_data"></table>
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
