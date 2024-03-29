(function() {
	let template = document.createElement("template");
	template.innerHTML = `


  <head>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">


    
 
  </head>
  <body>
  <div class="container">

    <input type="file" id="file_upload" />
    <button id="uploadButton" onclick="document.getElementsByTagName('com-cbeyondata-tools')[0].shadowRoot.fileToTable()" class="btn btn-primary">Upload</button>  
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

		
      
      fileToTable()
      {
	var file = document.getElementsByTagName('com-cbeyondata-tools')[0].shadowRoot.getElementById('file_upload').files[0];
            var reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = function(e) {
            var s = e.target.result;
            s=s.replaceAll("\r\n","</td><tr><td>");
            s=s.replaceAll(",","</td><td>");
                s= "<tr><td>"+s+"</td></tr>";
                var table=this.shadowRoot.getElementById("display_csv_data");
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
		createMembers(dimensionId, cubeId, header, member) {
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.open("POST",window.origin + "/sap/fpa/services/rest/fpa/member?tenant=A",false);


                xhr.setRequestHeader("X-CSRF-Token", this.getCSRFToken2());                

            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			var body = '{"action":"update","data":{"dimensionId":"[dimensionId]","cubeId":"[cubeId]","refreshDACInBackground":true,"insertedMembers":{"bIncrementalUpdate":true,"header":[[header]],"member":[[member]]}}}';
			body = body.replaceAll("[dimensionId]",dimensionId);
			body = body.replaceAll("[cubeId]",cubeId);
			body = body.replaceAll("[header]",header);
			body = body.replaceAll("[member]",member);
			xhr.send(body);
//comment
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

        getCSRFToken2()
        {
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

            xhr.open("GET", window.origin + "/sap/fpa/services/rest/epm/session?action=logon",false);
         //   xhr.open("GET", window.origin + "/api/v1/csrf",false);
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
