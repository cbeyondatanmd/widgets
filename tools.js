(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body id="ASA12312SASDCX">
<div data-sap-ui="__button14" id="__button14">__button14</div>
<p>Some Font Awesome icons:</p>
<i class="fas fa-band-aid" style="font-size:60px;color:red;"></i>
<i class="fas fa-cat"></i>
<i class="fas fa-dragon"></i>
<i class="far fa-clock"></i>
<i class="fas fa-clock"></i>
    <input type="file" id="file_upload" />
    <button onclick="upload()" class="btn btn-primary">Upload</button>  
    <script>
     
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
       
    </script>
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
