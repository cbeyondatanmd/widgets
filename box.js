(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
<style>

table, tr, td {

	background-color:rgb(41, 49, 58);	   
    width:100%;

}

td {
padding:0pt 5pt;
}

.sel {
    background-color:rgb(242, 98, 28);
}

.sela {
	background-color:rgb(52, 75, 95);
}

body {
  background-color: rgb(41, 49, 58);
}

p {

	background-color:rgb(41, 49, 58);
	color:rgb(221, 210, 211);
	font-family:Calibri;
	font-size:10.5pt;
	font-weight:bold;
padding:0pt 5pt;
}

a {

	cursor:pointer;
	color:white;
	font-family:Calibri;
	font-size:10.5pt;
	font-weight:bold;
	text-decoration:none;
	padding:10pt 14pt;
    display: block;
	height:100%;
    width:88%;

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
  filter: invert(.8) sepia(.3) hue-rotate(170deg) saturate(300%) opacity(60%);
}

</style>

</head>
<body>
<p>NAVIGATION</p>
<table>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTUxMiAyNTZDNTEyIDM5Ny40IDM5Ny40IDUxMiAyNTYgNTEyQzExNC42IDUxMiAwIDM5Ny40IDAgMjU2QzAgMTE0LjYgMTE0LjYgMCAyNTYgMEMzOTcuNCAwIDUxMiAxMTQuNiA1MTIgMjU2ek0yNTYgNjRDMjM4LjMgNjQgMjI0IDc4LjMzIDIyNCA5NkMyMjQgMTEzLjcgMjM4LjMgMTI4IDI1NiAxMjhDMjczLjcgMTI4IDI4OCAxMTMuNyAyODggOTZDMjg4IDc4LjMzIDI3My43IDY0IDI1NiA2NHpNMjU2IDQxNkMyOTEuMyA0MTYgMzIwIDM4Ny4zIDMyMCAzNTJDMzIwIDMzNC42IDMxMy4xIDMxOC45IDMwMS45IDMwNy40TDM2NS4xIDE2MS43QzM3MS4zIDE0OS41IDM2NS44IDEzNS40IDM1My43IDEzMEMzNDEuNSAxMjQuNyAzMjcuNCAxMzAuMiAzMjIgMTQyLjNMMjU3LjkgMjg4QzI1Ny4zIDI4OCAyNTYuNiAyODcuMSAyNTYgMjg3LjFDMjIwLjcgMjg3LjEgMTkyIDMxNi43IDE5MiAzNTJDMTkyIDM4Ny4zIDIyMC43IDQxNiAyNTYgNDE2VjQxNnpNMTQ0IDExMkMxMjYuMyAxMTIgMTEyIDEyNi4zIDExMiAxNDRDMTEyIDE2MS43IDEyNi4zIDE3NiAxNDQgMTc2QzE2MS43IDE3NiAxNzYgMTYxLjcgMTc2IDE0NEMxNzYgMTI2LjMgMTYxLjcgMTEyIDE0NCAxMTJ6TTk2IDI4OEMxMTMuNyAyODggMTI4IDI3My43IDEyOCAyNTZDMTI4IDIzOC4zIDExMy43IDIyNCA5NiAyMjRDNzguMzMgMjI0IDY0IDIzOC4zIDY0IDI1NkM2NCAyNzMuNyA3OC4zMyAyODggOTYgMjg4ek00MTYgMjI0QzM5OC4zIDIyNCAzODQgMjM4LjMgMzg0IDI1NkMzODQgMjczLjcgMzk4LjMgMjg4IDQxNiAyODhDNDMzLjcgMjg4IDQ0OCAyNzMuNyA0NDggMjU2QzQ0OCAyMzguMyA0MzMuNyAyMjQgNDE2IDIyNHoiLz48L3N2Zz4='/>&nbsp;&nbsp;&nbsp;&nbsp;DASHBOARD&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTE1Mi4xIDM4LjE2QzE2MS45IDQ3LjAzIDE2Mi43IDYyLjIgMTUzLjggNzIuMDZMODEuODQgMTUyLjFDNzcuNDMgMTU2LjkgNzEuMjEgMTU5LjggNjQuNjMgMTU5LjFDNTguMDUgMTYwLjIgNTEuNjkgMTU3LjYgNDcuMDMgMTUyLjFMNy4wMjkgMTEyLjFDLTIuMzQzIDEwMy42LTIuMzQzIDg4LjQgNy4wMjkgNzkuMDNDMTYuNCA2OS42NiAzMS42IDY5LjY2IDQwLjk3IDc5LjAzTDYzLjA4IDEwMS4xTDExOC4yIDM5Ljk0QzEyNyAzMC4wOSAxNDIuMiAyOS4yOSAxNTIuMSAzOC4xNlYzOC4xNnpNMTUyLjEgMTk4LjJDMTYxLjkgMjA3IDE2Mi43IDIyMi4yIDE1My44IDIzMi4xTDgxLjg0IDMxMi4xQzc3LjQzIDMxNi45IDcxLjIxIDMxOS44IDY0LjYzIDMxOS4xQzU4LjA1IDMyMC4yIDUxLjY5IDMxNy42IDQ3LjAzIDMxMi4xTDcuMDI5IDI3Mi4xQy0yLjM0MyAyNjMuNi0yLjM0MyAyNDguNCA3LjAyOSAyMzlDMTYuNCAyMjkuNyAzMS42IDIyOS43IDQwLjk3IDIzOUw2My4wOCAyNjEuMUwxMTguMiAxOTkuOUMxMjcgMTkwLjEgMTQyLjIgMTg5LjMgMTUyLjEgMTk4LjJWMTk4LjJ6TTIyNCA5NkMyMjQgNzguMzMgMjM4LjMgNjQgMjU2IDY0SDQ4MEM0OTcuNyA2NCA1MTIgNzguMzMgNTEyIDk2QzUxMiAxMTMuNyA0OTcuNyAxMjggNDgwIDEyOEgyNTZDMjM4LjMgMTI4IDIyNCAxMTMuNyAyMjQgOTZWOTZ6TTIyNCAyNTZDMjI0IDIzOC4zIDIzOC4zIDIyNCAyNTYgMjI0SDQ4MEM0OTcuNyAyMjQgNTEyIDIzOC4zIDUxMiAyNTZDNTEyIDI3My43IDQ5Ny43IDI4OCA0ODAgMjg4SDI1NkMyMzguMyAyODggMjI0IDI3My43IDIyNCAyNTZ6TTE2MCA0MTZDMTYwIDM5OC4zIDE3NC4zIDM4NCAxOTIgMzg0SDQ4MEM0OTcuNyAzODQgNTEyIDM5OC4zIDUxMiA0MTZDNTEyIDQzMy43IDQ5Ny43IDQ0OCA0ODAgNDQ4SDE5MkMxNzQuMyA0NDggMTYwIDQzMy43IDE2MCA0MTZ6TTAgNDE2QzAgMzg5LjUgMjEuNDkgMzY4IDQ4IDM2OEM3NC41MSAzNjggOTYgMzg5LjUgOTYgNDE2Qzk2IDQ0Mi41IDc0LjUxIDQ2NCA0OCA0NjRDMjEuNDkgNDY0IDAgNDQyLjUgMCA0MTZ6Ii8+PC9zdmc+'/>&nbsp;&nbsp;&nbsp;&nbsp;WORKFLOW&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTI1NiAzMS4xYy0xNDEuNCAwLTI1NS4xIDkzLjA5LTI1NS4xIDIwOGMwIDQ5LjU5IDIxLjM3IDk0LjEgNTYuOTcgMTMwLjdjLTEyLjUgNTAuMzktNTQuMzEgOTUuMy01NC44MSA5NS44QzAgNDY4LjgtLjU5MzggNDcyLjIgLjY4NzUgNDc1LjJDMS4xIDQ3OC4yIDQuODEzIDQ3OS4xIDggNDc5LjFjNjYuMzEgMCAxMTYtMzEuOCAxNDAuNi01MS40MWMzMi43MiAxMi4zMSA2OS4wMiAxOS40MSAxMDcuNCAxOS40MWMxNDEuNCAwIDI1NS4xLTkzLjA5IDI1NS4xLTIwNy4xUzM5Ny40IDMxLjEgMjU2IDMxLjF6TTMxNy44IDI4Mi4zYy0zLjYyMyAyMC45MS0xOS40NyAzNC42NC00MS44MyAzOS40M1YzMzJjMCAxMS4wMy04Ljk0NiAyMC0xOS45OSAyMFMyMzYgMzQzIDIzNiAzMzJ2LTEwLjc3Yy04LjY4Mi0xLjkyMi0xNy4zLTQuNzIzLTI1LjA2LTcuNTEybC00LjI2Ni0xLjVDMTk2LjMgMzA4LjUgMTkwLjggMjk3LjEgMTk0LjUgMjg2LjdjMy42ODgtMTAuNDEgMTUuMTEtMTUuODEgMjUuNTItMTIuMjJsNC40NjkgMS42MjVjNy44NDQgMi44MTIgMTYuNzIgNiAyMy42NiA3LjAzMWMxMy43MiAyLjEyNSAyOC45NCAuMTg3NSAzMC4zMS03LjYyNWMuODc1LTUuMDk0IDEuMzU5LTcuOTA2LTI3LjkyLTE2LjI4TDI0NC43IDI1Ny41Yy0xNy4zMy01LjA5NC01Ny45Mi0xNy01MC41Mi01OS44NEMxOTcuOCAxNzYuOCAyMTMuNiAxNjIuOCAyMzYgMTU3LjFWMTQ4YzAtMTEuMDMgOC45NjEtMjAgMjAuMDEtMjBzMTkuOTkgOC45NjkgMTkuOTkgMjB2MTAuNjNjNS40NTMgMS4xOTUgMTEuMzQgMi43ODkgMTguNTYgNS4yNzNjMTAuNDQgMy42MjUgMTUuOTUgMTUuMDMgMTIuMzMgMjUuNDdjLTMuNjI1IDEwLjQxLTE1LjA2IDE1Ljk0LTI1LjQ1IDEyLjM0Yy01Ljg1OS0yLjAzMS0xMi00LTE3LjU5LTQuODQ0QzI1MC4yIDE5NC44IDIzNC4xIDE5Ni43IDIzMy42IDIwNC41QzIzMi44IDIwOC4xIDIzMi4zIDIxMi4yIDI1NS4xIDIxOS4ybDUuNTQ3IDEuNTk0QzI4My44IDIyNy4xIDMyNS4zIDIzOSAzMTcuOCAyODIuM3oiLz48L3N2Zz4='/>&nbsp;&nbsp;&nbsp;&nbsp;BUDGET&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTMyMCA5NkgxOTJMMTQ0LjYgMjQuODhDMTM3LjUgMTQuMjQgMTQ1LjEgMCAxNTcuOSAwSDM1NC4xQzM2Ni45IDAgMzc0LjUgMTQuMjQgMzY3LjQgMjQuODhMMzIwIDk2ek0xOTIgMTI4SDMyMEMzMjMuOCAxMzAuNSAzMjguMSAxMzMuMyAzMzIuMSAxMzYuNEMzODkuNyAxNzIuNyA1MTIgMjUwLjkgNTEyIDQxNkM1MTIgNDY5IDQ2OSA1MTIgNDE2IDUxMkg5NkM0Mi45OCA1MTIgMCA0NjkgMCA0MTZDMCAyNTAuOSAxMjIuMyAxNzIuNyAxNzkgMTM2LjRDMTgzLjkgMTMzLjMgMTg4LjIgMTMwLjUgMTkyIDEyOFYxMjh6TTI3Ni4xIDIyNEMyNzYuMSAyMTIuOSAyNjcuMSAyMDMuOSAyNTUuMSAyMDMuOUMyNDQuOSAyMDMuOSAyMzUuOSAyMTIuOSAyMzUuOSAyMjRWMjMwQzIzMC4zIDIzMS4yIDIyNC4xIDIzMi45IDIyMCAyMzUuMUMyMDUuMSAyNDEuOSAxOTIuMSAyNTQuNSAxODguOSAyNzIuOEMxODcuMSAyODMgMTg4LjEgMjkyLjkgMTkyLjMgMzAxLjhDMTk2LjUgMzEwLjYgMjAzIDMxNi44IDIwOS42IDMyMS4zQzIyMS4yIDMyOS4yIDIzNi41IDMzMy44IDI0OC4yIDMzNy4zTDI1MC40IDMzNy45QzI2NC40IDM0Mi4yIDI3My44IDM0NS4zIDI3OS43IDM0OS42QzI4Mi4yIDM1MS40IDI4My4xIDM1Mi44IDI4My40IDM1My43QzI4My44IDM1NC41IDI4NC40IDM1Ni4zIDI4My43IDM2MC4zQzI4My4xIDM2My44IDI4MS4yIDM2Ni44IDI3NS43IDM2OS4xQzI2OS42IDM3MS43IDI1OS43IDM3MyAyNDYuOSAzNzFDMjQwLjkgMzcwIDIzMC4yIDM2Ni40IDIyMC43IDM2My4yQzIxOC41IDM2Mi40IDIxNi4zIDM2MS43IDIxNC4zIDM2MUMyMDMuOCAzNTcuNSAxOTIuNSAzNjMuMiAxODkgMzczLjdDMTg1LjUgMzg0LjIgMTkxLjIgMzk1LjUgMjAxLjcgMzk4LjFDMjAyLjkgMzk5LjQgMjA0LjQgMzk5LjkgMjA2LjEgNDAwLjVDMjEzLjEgNDAzLjIgMjI2LjQgNDA3LjQgMjM1LjkgNDA5LjZWNDE2QzIzNS45IDQyNy4xIDI0NC45IDQzNi4xIDI1NS4xIDQzNi4xQzI2Ny4xIDQzNi4xIDI3Ni4xIDQyNy4xIDI3Ni4xIDQxNlY0MTAuNUMyODEuNCA0MDkuNSAyODYuNiA0MDcuMSAyOTEuNCA0MDUuOUMzMDcuMiAzOTkuMiAzMTkuOCAzODYuMiAzMjMuMSAzNjcuMkMzMjQuOSAzNTYuOCAzMjQuMSAzNDYuOCAzMjAuMSAzMzcuN0MzMTYuMiAzMjguNyAzMDkuOSAzMjIuMSAzMDMuMiAzMTcuM0MyOTEuMSAzMDguNCAyNzQuOSAzMDMuNiAyNjIuOCAyOTkuOUwyNjEuMSAyOTkuN0MyNDcuOCAyOTUuNCAyMzguMiAyOTIuNCAyMzIuMSAyODguMkMyMjkuNSAyODYuNCAyMjguNyAyODUuMiAyMjguNSAyODQuN0MyMjguMyAyODQuMyAyMjcuNyAyODMuMSAyMjguMyAyNzkuN0MyMjguNyAyNzcuNyAyMzAuMiAyNzQuNCAyMzYuNSAyNzEuNkMyNDIuMSAyNjguNyAyNTIuOSAyNjcuMSAyNjUuMSAyNjguMUMyNjkuNSAyNjkuNyAyODMgMjcyLjMgMjg2LjkgMjczLjNDMjk3LjUgMjc2LjIgMzA4LjUgMjY5LjggMzExLjMgMjU5LjFDMzE0LjIgMjQ4LjUgMzA3LjggMjM3LjUgMjk3LjEgMjM0LjdDMjkyLjcgMjMzLjUgMjgyLjcgMjMxLjUgMjc2LjEgMjMwLjNMMjc2LjEgMjI0eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;SPEND PLAN&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td id="labor">
<a id="labora" onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTE4NCA4OEMxODQgMTE4LjkgMTU4LjkgMTQ0IDEyOCAxNDRDOTcuMDcgMTQ0IDcyIDExOC45IDcyIDg4QzcyIDU3LjA3IDk3LjA3IDMyIDEyOCAzMkMxNTguOSAzMiAxODQgNTcuMDcgMTg0IDg4ek0yMDguNCAxOTYuM0MxNzguNyAyMjIuNyAxNjAgMjYxLjIgMTYwIDMwNEMxNjAgMzM4LjMgMTcxLjEgMzY5LjggMTkyIDM5NC41VjQxNkMxOTIgNDMzLjcgMTc3LjcgNDQ4IDE2MCA0NDhIOTZDNzguMzMgNDQ4IDY0IDQzMy43IDY0IDQxNlYzODkuMkMyNi4xNiAzNzEuMiAwIDMzMi43IDAgMjg4QzAgMjI2LjEgNTAuMTQgMTc2IDExMiAxNzZIMTQ0QzE2Ny4xIDE3NiAxOTAuMiAxODMuNSAyMDguNCAxOTYuM1YxOTYuM3pNNjQgMjQ1LjdDNTQuMDQgMjU2LjkgNDggMjcxLjggNDggMjg4QzQ4IDMwNC4yIDU0LjA0IDMxOS4xIDY0IDMzMC4zVjI0NS43ek00NDggNDE2VjM5NC41QzQ2OCAzNjkuOCA0ODAgMzM4LjMgNDgwIDMwNEM0ODAgMjYxLjIgNDYxLjMgMjIyLjcgNDMxLjYgMTk2LjNDNDQ5LjggMTgzLjUgNDcyIDE3NiA0OTYgMTc2SDUyOEM1ODkuOSAxNzYgNjQwIDIyNi4xIDY0MCAyODhDNjQwIDMzMi43IDYxMy44IDM3MS4yIDU3NiAzODkuMlY0MTZDNTc2IDQzMy43IDU2MS43IDQ0OCA1NDQgNDQ4SDQ4MEM0NjIuMyA0NDggNDQ4IDQzMy43IDQ0OCA0MTZ6TTU3NiAzMzAuM0M1ODUuMSAzMTkuMSA1OTIgMzA0LjIgNTkyIDI4OEM1OTIgMjcxLjggNTg1LjEgMjU2LjkgNTc2IDI0NS43VjMzMC4zek01NjggODhDNTY4IDExOC45IDU0Mi45IDE0NCA1MTIgMTQ0QzQ4MS4xIDE0NCA0NTYgMTE4LjkgNDU2IDg4QzQ1NiA1Ny4wNyA0ODEuMSAzMiA1MTIgMzJDNTQyLjkgMzIgNTY4IDU3LjA3IDU2OCA4OHpNMjU2IDk2QzI1NiA2MC42NSAyODQuNyAzMiAzMjAgMzJDMzU1LjMgMzIgMzg0IDYwLjY1IDM4NCA5NkMzODQgMTMxLjMgMzU1LjMgMTYwIDMyMCAxNjBDMjg0LjcgMTYwIDI1NiAxMzEuMyAyNTYgOTZ6TTQ0OCAzMDRDNDQ4IDM0OC43IDQyMS44IDM4Ny4yIDM4NCA0MDUuMlY0NDhDMzg0IDQ2NS43IDM2OS43IDQ4MCAzNTIgNDgwSDI4OEMyNzAuMyA0ODAgMjU2IDQ2NS43IDI1NiA0NDhWNDA1LjJDMjE4LjIgMzg3LjIgMTkyIDM0OC43IDE5MiAzMDRDMTkyIDI0Mi4xIDI0Mi4xIDE5MiAzMDQgMTkySDMzNkMzOTcuOSAxOTIgNDQ4IDI0Mi4xIDQ0OCAzMDR6TTI1NiAzNDYuM1YyNjEuN0MyNDYgMjcyLjkgMjQwIDI4Ny44IDI0MCAzMDRDMjQwIDMyMC4yIDI0NiAzMzUuMSAyNTYgMzQ2LjN6TTM4NCAyNjEuN1YzNDYuM0MzOTMuMSAzMzUgNDAwIDMyMC4yIDQwMCAzMDRDNDAwIDI4Ny44IDM5My4xIDI3Mi45IDM4NCAyNjEuN3oiLz48L3N2Zz4='/>&nbsp;&nbsp;&nbsp;&nbsp;LABOR PLANNING&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTUwMC4zIDQ0My43bC0xMTkuNy0xMTkuN2MyNy4yMi00MC40MSA0MC42NS05MC45IDMzLjQ2LTE0NC43QzQwMS44IDg3Ljc5IDMyNi44IDEzLjMyIDIzNS4yIDEuNzIzQzk5LjAxLTE1LjUxLTE1LjUxIDk5LjAxIDEuNzI0IDIzNS4yYzExLjYgOTEuNjQgODYuMDggMTY2LjcgMTc3LjYgMTc4LjljNTMuOCA3LjE4OSAxMDQuMy02LjIzNiAxNDQuNy0zMy40NmwxMTkuNyAxMTkuN2MxNS42MiAxNS42MiA0MC45NSAxNS42MiA1Ni41NyAwQzUxNS45IDQ4NC43IDUxNS45IDQ1OS4zIDUwMC4zIDQ0My43ek03OS4xIDIwOGMwLTcwLjU4IDU3LjQyLTEyOCAxMjgtMTI4czEyOCA1Ny40MiAxMjggMTI4YzAgNzAuNTgtNTcuNDIgMTI4LTEyOCAxMjhTNzkuMSAyNzguNiA3OS4xIDIwOHoiLz48L3N2Zz4='/>&nbsp;&nbsp;&nbsp;&nbsp;REVIEW&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTY0IDQwMEM2NCA0MDguOCA3MS4xNiA0MTYgODAgNDE2SDQ4MEM0OTcuNyA0MTYgNTEyIDQzMC4zIDUxMiA0NDhDNTEyIDQ2NS43IDQ5Ny43IDQ4MCA0ODAgNDgwSDgwQzM1LjgyIDQ4MCAwIDQ0NC4yIDAgNDAwVjY0QzAgNDYuMzMgMTQuMzMgMzIgMzIgMzJDNDkuNjcgMzIgNjQgNDYuMzMgNjQgNjRWNDAwek0zNDIuNiAyNzguNkMzMzAuMSAyOTEuMSAzMDkuOSAyOTEuMSAyOTcuNCAyNzguNkwyNDAgMjIxLjNMMTUwLjYgMzEwLjZDMTM4LjEgMzIzLjEgMTE3LjkgMzIzLjEgMTA1LjQgMzEwLjZDOTIuODggMjk4LjEgOTIuODggMjc3LjkgMTA1LjQgMjY1LjRMMjE3LjQgMTUzLjRDMjI5LjkgMTQwLjkgMjUwLjEgMTQwLjkgMjYyLjYgMTUzLjRMMzIwIDIxMC43TDQyNS40IDEwNS40QzQzNy45IDkyLjg4IDQ1OC4xIDkyLjg4IDQ3MC42IDEwNS40QzQ4My4xIDExNy45IDQ4My4xIDEzOC4xIDQ3MC42IDE1MC42TDM0Mi42IDI3OC42eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;SENARIO ANALYSIS&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTE2MCAzNTJoMTkyVjE2MEgxNjBWMzUyek00NDggMTc2aDQ4QzUwNC44IDE3NiA1MTIgMTY4LjggNTEyIDE2MHMtNy4xNjItMTYtMTYtMTZINDQ4VjEyOGMwLTM1LjM1LTI4LjY1LTY0LTY0LTY0aC0xNlYxNkMzNjggNy4xNjQgMzYwLjggMCAzNTIgMGMtOC44MzYgMC0xNiA3LjE2NC0xNiAxNlY2NGgtNjRWMTZDMjcyIDcuMTY0IDI2NC44IDAgMjU2IDBDMjQ3LjIgMCAyNDAgNy4xNjQgMjQwIDE2VjY0aC02NFYxNkMxNzYgNy4xNjQgMTY4LjggMCAxNjAgMEMxNTEuMiAwIDE0NCA3LjE2NCAxNDQgMTZWNjRIMTI4QzkyLjY1IDY0IDY0IDkyLjY1IDY0IDEyOHYxNkgxNkM3LjE2NCAxNDQgMCAxNTEuMiAwIDE2MHM3LjE2NCAxNiAxNiAxNkg2NHY2NEgxNkM3LjE2NCAyNDAgMCAyNDcuMiAwIDI1NnM3LjE2NCAxNiAxNiAxNkg2NHY2NEgxNkM3LjE2NCAzMzYgMCAzNDMuMiAwIDM1MnM3LjE2NCAxNiAxNiAxNkg2NFYzODRjMCAzNS4zNSAyOC42NSA2NCA2NCA2NGgxNnY0OEMxNDQgNTA0LjggMTUxLjIgNTEyIDE2MCA1MTJjOC44MzggMCAxNi03LjE2NCAxNi0xNlY0NDhoNjR2NDhjMCA4LjgzNiA3LjE2NCAxNiAxNiAxNmM4LjgzOCAwIDE2LTcuMTY0IDE2LTE2VjQ0OGg2NHY0OGMwIDguODM2IDcuMTY0IDE2IDE2IDE2YzguODM4IDAgMTYtNy4xNjQgMTYtMTZWNDQ4SDM4NGMzNS4zNSAwIDY0LTI4LjY1IDY0LTY0di0xNmg0OGM4LjgzOCAwIDE2LTcuMTY0IDE2LTE2cy03LjE2Mi0xNi0xNi0xNkg0NDh2LTY0aDQ4QzUwNC44IDI3MiA1MTIgMjY0LjggNTEyIDI1NnMtNy4xNjItMTYtMTYtMTZINDQ4VjE3NnpNMzg0IDM2OGMwIDguODM2LTcuMTYyIDE2LTE2IDE2aC0yMjRDMTM1LjIgMzg0IDEyOCAzNzYuOCAxMjggMzY4di0yMjRDMTI4IDEzNS4yIDEzNS4yIDEyOCAxNDQgMTI4aDIyNEMzNzYuOCAxMjggMzg0IDEzNS4yIDM4NCAxNDRWMzY4eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;TBM&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTUzNSA3LjAzQzU0NC40LTIuMzQzIDU1OS42LTIuMzQzIDU2OC4xIDcuMDI5TDYzMi4xIDcxLjAyQzYzNy41IDc1LjUyIDY0MCA4MS42MyA2NDAgODcuOTlDNjQwIDk0LjM2IDYzNy41IDEwMC41IDYzMi4xIDEwNC4xTDU2OC4xIDE2OC4xQzU1OS42IDE3OC4zIDU0NC40IDE3OC4zIDUzNSAxNjguMUM1MjUuNyAxNTkuNiA1MjUuNyAxNDQuNCA1MzUgMTM1TDU1OC4xIDExMS4xTDM4NCAxMTEuMUMzNzAuNyAxMTEuMSAzNjAgMTAxLjIgMzYwIDg3Ljk5QzM2MCA3NC43NCAzNzAuNyA2My45OSAzODQgNjMuOTlMNTU4LjEgNjMuMUw1MzUgNDAuOTdDNTI1LjcgMzEuNiA1MjUuNyAxNi40IDUzNSA3LjAzVjcuMDN6TTEwNC4xIDM3Ni4xTDgxLjk0IDQwMEwyNTUuMSAzOTkuMUMyNjkuMyAzOTkuMSAyNzkuMSA0MTAuNyAyNzkuMSA0MjMuMUMyNzkuMSA0MzcuMiAyNjkuMyA0NDcuMSAyNTUuMSA0NDcuMUw4MS45NSA0NDhMMTA0LjEgNDcxQzExNC4zIDQ4MC40IDExNC4zIDQ5NS42IDEwNC4xIDUwNC4xQzk1LjYgNTE0LjMgODAuNCA1MTQuMyA3MS4wMyA1MDQuMUw3LjAyOSA0NDAuMUMyLjUyOCA0MzYuNS0uMDAwMyA0MzAuNCAwIDQyMy4xQzAgNDE3LjYgMi41MjkgNDExLjUgNy4wMyA0MDdMNzEuMDMgMzQzQzgwLjQgMzMzLjcgOTUuNiAzMzMuNyAxMDQuMSAzNDNDMTE0LjMgMzUyLjQgMTE0LjMgMzY3LjYgMTA0LjEgMzc2LjFIMTA0LjF6TTk1LjEgNjRIMzM3LjlDMzM0LjEgNzEuMTggMzMyIDc5LjM0IDMzMiA4Ny4xQzMzMiAxMTYuNyAzNTUuMyAxMzkuMSAzODQgMTM5LjFMNDgxLjEgMTM5LjFDNDg0LjQgMTU3LjUgNDk0LjkgMTcyLjUgNTA5LjQgMTgxLjlDNTExLjEgMTg0LjMgNTEzLjEgMTg2LjYgNTE1LjIgMTg4LjhDNTM1LjUgMjA5LjEgNTY4LjUgMjA5LjEgNTg4LjggMTg4LjhMNjA4IDE2OS41VjM4NEM2MDggNDE5LjMgNTc5LjMgNDQ4IDU0NCA0NDhIMzAyLjFDMzA1LjkgNDQwLjggMzA3LjEgNDMyLjcgMzA3LjEgNDIzLjFDMzA3LjEgMzk1LjMgMjg0LjcgMzcxLjEgMjU1LjEgMzcxLjFMMTU4LjkgMzcyQzE1NS41IDM1NC41IDE0NS4xIDMzOS41IDEzMC42IDMzMC4xQzEyOC45IDMyNy43IDEyNi45IDMyNS40IDEyNC44IDMyMy4yQzEwNC41IDMwMi45IDcxLjU0IDMwMi45IDUxLjIzIDMyMy4yTDMxLjEgMzQyLjVWMTI4QzMxLjEgOTIuNjUgNjAuNjUgNjQgOTUuMSA2NFY2NHpNOTUuMSAxOTJDMTMxLjMgMTkyIDE1OS4xIDE2My4zIDE1OS4xIDEyOEg5NS4xVjE5MnpNNTQ0IDM4NFYzMjBDNTA4LjcgMzIwIDQ4MCAzNDguNyA0ODAgMzg0SDU0NHpNMzE5LjEgMzUyQzM3MyAzNTIgNDE2IDMwOSA0MTYgMjU2QzQxNiAyMDIuMSAzNzMgMTYwIDMxOS4xIDE2MEMyNjYuMSAxNjAgMjIzLjEgMjAyLjEgMjIzLjEgMjU2QzIyMy4xIDMwOSAyNjYuMSAzNTIgMzE5LjEgMzUyeiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;REIMB. AGREEMENTS&nbsp;&nbsp;</a>
</td>
</tr>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTI1NiAwQzExNC42IDAgMCAxMTQuNiAwIDI1NnMxMTQuNiAyNTYgMjU2IDI1NnMyNTYtMTE0LjYgMjU2LTI1NlMzOTcuNCAwIDI1NiAwek0yNTYgNDAwYy0xOCAwLTMyLTE0LTMyLTMyczEzLjEtMzIgMzItMzJjMTcuMSAwIDMyIDE0IDMyIDMyUzI3My4xIDQwMCAyNTYgNDAwek0zMjUuMSAyNThMMjgwIDI4NlYyODhjMCAxMy0xMSAyNC0yNCAyNFMyMzIgMzAxIDIzMiAyODhWMjcyYzAtOCA0LTE2IDEyLTIxbDU3LTM0QzMwOCAyMTMgMzEyIDIwNiAzMTIgMTk4QzMxMiAxODYgMzAxLjEgMTc2IDI4OS4xIDE3NmgtNTEuMUMyMjUuMSAxNzYgMjE2IDE4NiAyMTYgMTk4YzAgMTMtMTEgMjQtMjQgMjRzLTI0LTExLTI0LTI0QzE2OCAxNTkgMTk5IDEyOCAyMzcuMSAxMjhoNTEuMUMzMjkgMTI4IDM2MCAxNTkgMzYwIDE5OEMzNjAgMjIyIDM0NyAyNDUgMzI1LjEgMjU4eiIvPjwvc3ZnPg=='/>&nbsp;&nbsp;&nbsp;&nbsp;HELP&nbsp;&nbsp;</a>
</td>
</tr>
</table>
<p>ADMIN</p>
<table>
<tr>
<td>
<a onclick="return false;" href="#"><img class="icon" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTI4Ni4zIDE1NS4xQzI4Ny40IDE2MS45IDI4OCAxNjguOSAyODggMTc1LjFDMjg4IDE4My4xIDI4Ny40IDE5MC4xIDI4Ni4zIDE5Ni45TDMwOC41IDIxNi43QzMxNS41IDIyMyAzMTguNCAyMzIuMSAzMTQuNyAyNDEuN0MzMTIuNCAyNDYuMSAzMDkuOSAyNTIuMiAzMDcuMSAyNTcuMkwzMDQgMjYyLjZDMzAwLjEgMjY3LjYgMjk3LjcgMjcyLjQgMjk0LjIgMjc3LjFDMjg4LjUgMjg0LjcgMjc4LjUgMjg3LjIgMjY5LjUgMjg0LjJMMjQxLjIgMjc0LjlDMjMwLjUgMjgzLjggMjE4LjMgMjkwLjkgMjA1IDI5NS45TDE5OC4xIDMyNC45QzE5NyAzMzQuMiAxODkuOCAzNDEuNiAxODAuNCAzNDIuOEMxNzMuNyAzNDMuNiAxNjYuOSAzNDQgMTYwIDM0NEMxNTMuMSAzNDQgMTQ2LjMgMzQzLjYgMTM5LjYgMzQyLjhDMTMwLjIgMzQxLjYgMTIyLjEgMzM0LjIgMTIxIDMyNC45TDExNC4xIDI5NS45QzEwMS43IDI5MC45IDg5LjUgMjgzLjggNzguNzUgMjc0LjlMNTAuNTMgMjg0LjJDNDEuNTQgMjg3LjIgMzEuNTIgMjg0LjcgMjUuODIgMjc3LjFDMjIuMjggMjcyLjQgMTguOTggMjY3LjUgMTUuOTQgMjYyLjVMMTIuOTIgMjU3LjJDMTAuMTMgMjUyLjIgNy41OTIgMjQ3IDUuMzI0IDI0MS43QzEuNjIgMjMyLjEgNC40NTggMjIzIDExLjUyIDIxNi43TDMzLjcgMTk2LjlDMzIuNTggMTkwLjEgMzEuMSAxODMuMSAzMS4xIDE3NS4xQzMxLjEgMTY4LjkgMzIuNTggMTYxLjkgMzMuNyAxNTUuMUwxMS41MiAxMzUuM0M0LjQ1OCAxMjguMSAxLjYyIDExOSA1LjMyNCAxMTAuM0M3LjU5MiAxMDQuMSAxMC4xMyA5OS43OSAxMi45MSA5NC43NkwxNS45NSA4OS41MUMxOC45OCA4NC40NiAyMi4yOCA3OS41OCAyNS44MiA3NC44OUMzMS41MiA2Ny4zNCA0MS41NCA2NC44MyA1MC41MyA2Ny43OUw3OC43NSA3Ny4wOUM4OS41IDY4LjI1IDEwMS43IDYxLjEzIDExNC4xIDU2LjE1TDEyMSAyNy4wOEMxMjIuMSAxNy44IDEzMC4yIDEwLjM3IDEzOS42IDkuMjMxQzE0Ni4zIDguNDE4IDE1My4xIDggMTYwIDhDMTY2LjkgOCAxNzMuNyA4LjQxOCAxODAuNCA5LjIzQzE4OS44IDEwLjM3IDE5NyAxNy44IDE5OC4xIDI3LjA4TDIwNSA1Ni4xNUMyMTguMyA2MS4xMyAyMzAuNSA2OC4yNSAyNDEuMiA3Ny4wOUwyNjkuNSA2Ny43OUMyNzguNSA2NC44MyAyODguNSA2Ny4zNCAyOTQuMiA3NC44OUMyOTcuNyA3OS41NiAzMDAuMSA4NC40MiAzMDQgODkuNDRMMzA3LjEgOTQuODNDMzA5LjkgOTkuODQgMzEyLjQgMTA1IDMxNC43IDExMC4zQzMxOC40IDExOSAzMTUuNSAxMjguMSAzMDguNSAxMzUuM0wyODYuMyAxNTUuMXpNMTYwIDEyNy4xQzEzMy41IDEyNy4xIDExMiAxNDkuNSAxMTIgMTc1LjFDMTEyIDIwMi41IDEzMy41IDIyMy4xIDE2MCAyMjMuMUMxODYuNSAyMjMuMSAyMDggMjAyLjUgMjA4IDE3NS4xQzIwOCAxNDkuNSAxODYuNSAxMjcuMSAxNjAgMTI3LjF6TTQ4NC45IDQ3OC4zQzQ3OC4xIDQ3OS40IDQ3MS4xIDQ4MCA0NjQgNDgwQzQ1Ni45IDQ4MCA0NDkuOSA0NzkuNCA0NDMuMSA0NzguM0w0MjMuMyA1MDAuNUM0MTYuMSA1MDcuNSA0MDcgNTEwLjQgMzk4LjMgNTA2LjdDMzkzIDUwNC40IDM4Ny44IDUwMS45IDM4Mi44IDQ5OS4xTDM3Ny40IDQ5NkMzNzIuNCA0OTIuMSAzNjcuNiA0ODkuNyAzNjIuOSA0ODYuMkMzNTUuMyA0ODAuNSAzNTIuOCA0NzAuNSAzNTUuOCA0NjEuNUwzNjUuMSA0MzMuMkMzNTYuMiA0MjIuNSAzNDkuMSA0MTAuMyAzNDQuMSAzOTdMMzE1LjEgMzkwLjFDMzA1LjggMzg5IDI5OC40IDM4MS44IDI5Ny4yIDM3Mi40QzI5Ni40IDM2NS43IDI5NiAzNTguOSAyOTYgMzUyQzI5NiAzNDUuMSAyOTYuNCAzMzguMyAyOTcuMiAzMzEuNkMyOTguNCAzMjIuMiAzMDUuOCAzMTQuMSAzMTUuMSAzMTNMMzQ0LjEgMzA2LjFDMzQ5LjEgMjkzLjcgMzU2LjIgMjgxLjUgMzY1LjEgMjcwLjhMMzU1LjggMjQyLjVDMzUyLjggMjMzLjUgMzU1LjMgMjIzLjUgMzYyLjkgMjE3LjhDMzY3LjYgMjE0LjMgMzcyLjUgMjEwLjEgMzc3LjUgMjA3LjlMMzgyLjggMjA0LjlDMzg3LjggMjAyLjEgMzkyLjEgMTk5LjYgMzk4LjMgMTk3LjNDNDA3IDE5My42IDQxNi4xIDE5Ni41IDQyMy4zIDIwMy41TDQ0My4xIDIyNS43QzQ0OS45IDIyNC42IDQ1Ni45IDIyNCA0NjQgMjI0QzQ3MS4xIDIyNCA0NzguMSAyMjQuNiA0ODQuOSAyMjUuN0w1MDQuNyAyMDMuNUM1MTEgMTk2LjUgNTIwLjEgMTkzLjYgNTI5LjcgMTk3LjNDNTM1IDE5OS42IDU0MC4yIDIwMi4xIDU0NS4yIDIwNC45TDU1MC41IDIwNy45QzU1NS41IDIxMC4xIDU2MC40IDIxNC4zIDU2NS4xIDIxNy44QzU3Mi43IDIyMy41IDU3NS4yIDIzMy41IDU3Mi4yIDI0Mi41TDU2Mi45IDI3MC44QzU3MS44IDI4MS41IDU3OC45IDI5My43IDU4My45IDMwNi4xTDYxMi45IDMxM0M2MjIuMiAzMTQuMSA2MjkuNiAzMjIuMiA2MzAuOCAzMzEuNkM2MzEuNiAzMzguMyA2MzIgMzQ1LjEgNjMyIDM1MkM2MzIgMzU4LjkgNjMxLjYgMzY1LjcgNjMwLjggMzcyLjRDNjI5LjYgMzgxLjggNjIyLjIgMzg5IDYxMi45IDM5MC4xTDU4My45IDM5N0M1NzguOSA0MTAuMyA1NzEuOCA0MjIuNSA1NjIuOSA0MzMuMkw1NzIuMiA0NjEuNUM1NzUuMiA0NzAuNSA1NzIuNyA0ODAuNSA1NjUuMSA0ODYuMkM1NjAuNCA0ODkuNyA1NTUuNiA0OTIuMSA1NTAuNiA0OTZMNTQ1LjIgNDk5LjFDNTQwLjIgNTAxLjkgNTM0LjEgNTA0LjQgNTI5LjcgNTA2LjdDNTIwLjEgNTEwLjQgNTExIDUwNy41IDUwNC43IDUwMC41TDQ4NC45IDQ3OC4zek01MTIgMzUyQzUxMiAzMjUuNSA0OTAuNSAzMDQgNDY0IDMwNEM0MzcuNSAzMDQgNDE2IDMyNS41IDQxNiAzNTJDNDE2IDM3OC41IDQzNy41IDQwMCA0NjQgNDAwQzQ5MC41IDQwMCA1MTIgMzc4LjUgNTEyIDM1MnoiLz48L3N2Zz4='/>&nbsp;&nbsp;&nbsp;&nbsp;CONFIGURATION&nbsp;&nbsp;</a>
</td>
</tr>
</table>
<p id="context"></p>
<table id="myTable">
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
				cell1.classname = "sel";
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
