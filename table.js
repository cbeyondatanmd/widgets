(function() {
	let template = document.createElement("template");
	template.innerHTML =  `
  <head>
	<style>
	table, th, td {
	  border-bottom: 1px dotted #ABB4BE;
	  border-collapse: collapse;
	  font-family: Segoe UI, sans-serif;
	  font-size: 12px;
	
	
	}
	
	tr:nth-child(even) {
	  background-color: #F4F7FB;
	}
	
	.intro {
	  background-color: #FCFFA6;
	}
 
	.hide {
		display: none;
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

            s = s.replaceAll("\r\n", "</td><tr style='height:35px'><td>");
            s = s.replaceAll(",", "</td><td>");
            s = "<tr style='height:40px;font-weight:bold'><td>" + s + "</td></tr>";
	    s = s.replaceAll("<td>FPAC_FBV</td>", "<td class='intro'>FPAC_FBV</td>");
            var table = this.shadowRoot.getElementById('display_csv_data');
            table.innerHTML = s;
         console.log(s)


    }
    filterRejectedOnly(b) {

        var table = this.shadowRoot.getElementById('display_csv_data');
	for (let row of table.rows) 
	{
	    for(let cell of row.cells) 
	    {
		    if (b)
		    {
			if (!cell.classList.contains("intro"))
			{
			  row.classList.add('hide');
			}
		    }
		    else
		    {	
			if (row.classList.contains("hide"))
			{
			  row.classList.remove('hide');
			}			    
			  
		    }
	    }
	}


    }	
}
window.customElements.define('com-cbeyondata-table', Table);
})();
