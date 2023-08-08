(function() {
	let template = document.createElement("template");
	template.innerHTML = `


  <head>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script>
     

    
      
   
    </script>    
  </head>
  <body>
  <div class="container">

    <input type="file" id="file_upload" />
    <button onclick="upload()" class="btn btn-primary">Upload</button>  
    <br>
    <br>
    <!-- table to display the csv data -->
    <table class="table table-bordered table-striped" id="display_csv_data"></table>
 </div>

  </body>
`;


	class Tools extends HTMLElement {
		constructor() {
			super();
		
			let shadowRoot = this.attachShadow({
				mode: "open"
			});
			
			shadowRoot.appendChild(template.content.cloneNode(true));

			this._props = {};
			var _selectedItem;
			var _oldSelectedItem = "";

		}
      // Method to upload a valid csv file
      function upload() {
        var files = document.getElementById('file_upload').files;
        console.log(files);
        if(files.length==0){
          alert("Please choose any file...");
          return;
        }
        var filename = files[0].name;
        var extension = filename.substring(filename.lastIndexOf(".")).toUpperCase();
        if (extension == '.CSV') {
            //Here calling another method to read CSV file into json
            fileToTable(files[0]);
        }else{
            alert("Please select a valid csv file.");
        }
      }
      
      function fileToTable(file)
      {

            var reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = function(e) {
            var s = e.target.result;
            s=s.replaceAll("\r\n","</td><tr><td>");
            s=s.replaceAll(",","</td><td>");
                s= "<tr><td>"+s+"</td></tr>";
                var table=document.getElementById("display_csv_data");
                table.innerHTML=s;
          // console.log(s)

      }
    }
		postMessage(url, body, csrf) {
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.open("POST",window.origin + url,false);

            if (csrf)
            {
                xhr.setRequestHeader("X-CSRF-Token", csrf);                
            }

            xhr.setRequestHeader("Content-Type", "text/plain");
			xhr.send(body);

            const obj = JSON.parse(xhr.responseText);
            var rtn = [];
            //document.getElementById("demo").innerHTML = obj.Data.header.findIndex((x) => x === "ID");
            for (let i = 0; i < obj.Data.member.length; i++) 
            {
                rtn.push(obj.Data.member[i][obj.Data.header.findIndex((x) => x === "ID")]);
            }

			return rtn.join("|");

            }	  
		postMessageWithContentType(url, body, csrf, contentType) {
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.open("POST",window.origin + url,false);

            if (csrf)
            {
                xhr.setRequestHeader("X-CSRF-Token", csrf);                
            }

            xhr.setRequestHeader("Content-Type", contentType);
			xhr.send(body);

			return xhr.responseText;

            }	  
        getCSRFToken()
        {
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

       //     xhr.open("GET", window.origin + "/sap/fpa/services/rest/epm/session?action=logon",false);
            xhr.open("GET", window.origin + "/api/v1/csrf",false);
            xhr.setRequestHeader("X-CSRF-Token", "Fetch");
            xhr.send();                
            return xhr.getResponseHeader("x-csrf-token");           
        }

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = {
				...this._props,
				...changedProperties
			};
		}
		onCustomWidgetAfterUpdate(changedProperties) {

		}
	}
	customElements.define("com-cbeyondata-tools", Tools);
})();
