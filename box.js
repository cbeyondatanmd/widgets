(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
<style>

table, tr, td {

	background-color:rgb(41, 49, 58);	   
    width:100%;

}


a {

	background-color:rgb(41, 49, 58);;
	cursor:pointer;
	color:white;
	font-family:Calibri;
	font-size:10.5pt;
	font-weight:bold;
	text-decoration:none;
	padding:10pt 15pt;
    display: block;
	height:100%;
    width:83%;	     
}

a:hover {
	background-color:rgb(47, 62, 83);
}
a:active {
	position:relative;
	top:1px;
}

.user-icon {

    display: inline-block;
    vertical-align: middle;
    background-size: contain;

	height:22px;
    width:22px;	


}

.icon { 
  width: 16px;
  height: 16px;
  display: inline-block;
  background-size: contain;
  vertical-align: top;
  filter: brightness(.1) invert(.5) sepia(.5) hue-rotate(180deg) saturate(200%) opacity(90%);
}

</style>

</head>
<body>

<table id="myTable">
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4QzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0yNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjYgMCA0NzcuM2MwIDE5LjE0IDE1LjUyIDM0LjY3IDM0LjY2IDM0LjY3aDM3OC43QzQzMi41IDUxMiA0NDggNDk2LjUgNDQ4IDQ3Ny4zQzQ0OCAzODEuNiAzNzAuNCAzMDQgMjc0LjcgMzA0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;DASHBOARD&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4QzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0yNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjYgMCA0NzcuM2MwIDE5LjE0IDE1LjUyIDM0LjY3IDM0LjY2IDM0LjY3aDM3OC43QzQzMi41IDUxMiA0NDggNDk2LjUgNDQ4IDQ3Ny4zQzQ0OCAzODEuNiAzNzAuNCAzMDQgMjc0LjcgMzA0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;WORKFLOW&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4QzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0yNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjYgMCA0NzcuM2MwIDE5LjE0IDE1LjUyIDM0LjY3IDM0LjY2IDM0LjY3aDM3OC43QzQzMi41IDUxMiA0NDggNDk2LjUgNDQ4IDQ3Ny4zQzQ0OCAzODEuNiAzNzAuNCAzMDQgMjc0LjcgMzA0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;BUDGET&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4QzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0yNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjYgMCA0NzcuM2MwIDE5LjE0IDE1LjUyIDM0LjY3IDM0LjY2IDM0LjY3aDM3OC43QzQzMi41IDUxMiA0NDggNDk2LjUgNDQ4IDQ3Ny4zQzQ0OCAzODEuNiAzNzAuNCAzMDQgMjc0LjcgMzA0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;SPEND PLAN&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4QzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0yNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjYgMCA0NzcuM2MwIDE5LjE0IDE1LjUyIDM0LjY3IDM0LjY2IDM0LjY3aDM3OC43QzQzMi41IDUxMiA0NDggNDk2LjUgNDQ4IDQ3Ny4zQzQ0OCAzODEuNiAzNzAuNCAzMDQgMjc0LjcgMzA0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;LABOR PLANNING&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4QzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0yNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjYgMCA0NzcuM2MwIDE5LjE0IDE1LjUyIDM0LjY3IDM0LjY2IDM0LjY3aDM3OC43QzQzMi41IDUxMiA0NDggNDk2LjUgNDQ4IDQ3Ny4zQzQ0OCAzODEuNiAzNzAuNCAzMDQgMjc0LjcgMzA0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;REVIEW&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4QzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0yNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjYgMCA0NzcuM2MwIDE5LjE0IDE1LjUyIDM0LjY3IDM0LjY2IDM0LjY3aDM3OC43QzQzMi41IDUxMiA0NDggNDk2LjUgNDQ4IDQ3Ny4zQzQ0OCAzODEuNiAzNzAuNCAzMDQgMjc0LjcgMzA0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;SENARIO ANALYSIS&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4QzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0yNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjYgMCA0NzcuM2MwIDE5LjE0IDE1LjUyIDM0LjY3IDM0LjY2IDM0LjY3aDM3OC43QzQzMi41IDUxMiA0NDggNDk2LjUgNDQ4IDQ3Ny4zQzQ0OCAzODEuNiAzNzAuNCAzMDQgMjc0LjcgMzA0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;TBM&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4QzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0yNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjYgMCA0NzcuM2MwIDE5LjE0IDE1LjUyIDM0LjY3IDM0LjY2IDM0LjY3aDM3OC43QzQzMi41IDUxMiA0NDggNDk2LjUgNDQ4IDQ3Ny4zQzQ0OCAzODEuNiAzNzAuNCAzMDQgMjc0LjcgMzA0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;HELP&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4QzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0yNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjYgMCA0NzcuM2MwIDE5LjE0IDE1LjUyIDM0LjY3IDM0LjY2IDM0LjY3aDM3OC43QzQzMi41IDUxMiA0NDggNDk2LjUgNDQ4IDQ3Ny4zQzQ0OCAzODEuNiAzNzAuNCAzMDQgMjc0LjcgMzA0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;CONFIGURATION&nbsp;&nbsp;</a>
</td>
</tr>
</table>
</body>
 `;


	class Box extends HTMLElement {
		constructor() {
			super();
			let shadowRoot = this.attachShadow({
				mode: "open"
			});
			shadowRoot.appendChild(template.content.cloneNode(true));
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			this._props = {};
			var _selectedItem;

		}
        setSelected(newSelected) 
        {
            this._selectedItem = newSelected;
            // fire "properties changed"
            this.dispatchEvent(
                new CustomEvent("propertiesChanged", 
                    {
                        detail: {
                            properties: {
                                            selectedItem: this._selectedItem
                                        }
                                }
                    }
                ))}

        getSelected() {
            return this._selectedItem;
        }

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = {
				...this._props,
				...changedProperties
			};
		}
		onCustomWidgetAfterUpdate(changedProperties) {
			if ("addUrl" in changedProperties) {
				var table = this.shadowRoot.getElementById("myTable");
				var row = table.insertRow(0);
				var cell1 = row.insertCell(0);
				if (changedProperties["addUrl"].split('|')[1].length === 0)
				{
				cell1.innerHTML = '<a href="" onclick="return false;"><i class="user-icon"></i>&nbsp;&nbsp;' + changedProperties["addUrl"].split('|')[0] + '&nbsp;&nbsp;</a>';
				}
				else 
				{
				cell1.innerHTML = '<a href="' + changedProperties["addUrl"].split('|')[1] + '"><i class="user-icon"></i>&nbsp;&nbsp;' + changedProperties["addUrl"].split('|')[0] + '&nbsp;&nbsp;</a>';
				}
				cell1.addEventListener("click", () => {
					this._selectedItem = changedProperties["addUrl"].split('|')[0];
				});
			}
		}
	}
	customElements.define("com-sample-box", Box);
})();
