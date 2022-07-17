(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
</head>
<body>
<p>Tools</p>
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
            var myHeaders = new Headers();
            myHeaders.append("Accept", "application/json, text/javascript, */*; q=0.01");
            myHeaders.append("Accept-Language", "en");
            myHeaders.append("Connection", "keep-alive");
            myHeaders.append("Content-Type", "application/json;charset=UTF-8");
            myHeaders.append("Cookie", "signature; __VCAP_ID__=c481ae72-ec4f-48fe-6f03-05ab; JSESSIONID=s%3ApB27F6tDBgPmcOOj25jyYjAzO0F9jHQ8.7riKxLYF1Dwhhxss0U0dFzjzLh5VIaLmfOteFpxqK4M");
            myHeaders.append("Origin", "https://cbeyondata.us10.hcs.cloud.sap");
            myHeaders.append("Referer", "https://cbeyondata.us10.hcs.cloud.sap/sap/fpa/ui/app.html");
            myHeaders.append("Sec-Fetch-Dest", "empty");
            myHeaders.append("Sec-Fetch-Mode", "cors");
            myHeaders.append("Sec-Fetch-Site", "same-origin");
            myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36");
            myHeaders.append("X-CSRF-Token", csrf);
            myHeaders.append("X-Requested-With", "XMLHttpRequest");
            myHeaders.append("sec-ch-ua", "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"");
            myHeaders.append("sec-ch-ua-mobile", "?0");
            myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
            myHeaders.append("x-correlationid", "34487464-8012-4802-8432-212305989911");
            
            var raw = "{\"action\":\"postDiscussionComment\",\"data\":{\"commentText\":\"test\",\"contentType\":\"COMMENT\",\"discussionId\":\"513D4F85141A61167E6A58FDB3AC2D4D\",\"discussionType\":\"GROUP\",\"strangers\":[],\"title\":\"\",\"commentType\":\"CONVERSATION\",\"cellAssociation\":{\"reportId\":\"\",\"drillState\":\"\",\"hierarchy\":\"\"}}}";
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            fetch("https://cbeyondata.us10.hcs.cloud.sap/sap/fpa/services/rest/fpa/collaboration?tenant=A", requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
              return "neat";
            }	
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
