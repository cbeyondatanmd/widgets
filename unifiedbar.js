(function() {
	let template = this.document.createElement("template");//SRC IS REMOVED FROM SCRIPT TAG <script src="https://kit.fontawesome.com/931b129623.js" crossorigin="anonymous"></script>
	template.innerHTML = `
<head>
<script>

</script>

<link rel="stylesheet" href="https://cbeyondatanmd.github.io/widgets/font-awesome.min.css">
<style>
body {
    margin: 0;
  }
  .hierarchy{
    height:48.666px;
    .opacity: 99%;
  }
  .iconPad{
    padding-left: .2rem;
  }
  .hoverItems{
    display: inline;
  }
  .p-inline{
    display: inline;
    z-index: 0;
    display: block;
  }
  .sidebarItem{
    opacity: 99%;
    display: inline
  }
  .pencilButton{
    opacity: 99%;
    padding: 1rem;
    background-color: #20243c;
    border: 1px solid black;
    cursor: move;
    cursor: pointer;
    color: white;
    font-family: Calibri;
    font-size: 10.5pt;
    font-weight: bold;
    text-decoration: none;
    padding: 10pt 14pt;
    display: block;
    height: 100%;
    width: 80%;
  }
  .section{
    color: rgb(221, 210, 211);
    font-family: Calibri;
    font-size: 10.5pt;
    font-weight: bold;
    text-decoration: none;
    cursor: move;
    cursor: pointer;
    padding: 0pt 5pt;
    width: 270px;
    display: inline-block;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  .standAlone{
    padding: 14.333px;
    height: 20px;
  }
   .draggable {
    background-color: #29313a;
    
    cursor: move;
    cursor: pointer;
    color: white;
    font-family: Calibri;
    font-size: 10.5pt;
    font-weight: bold;
    text-decoration: none;
  
    display: inline-block;
    width: 243px;
    transition-duration: 0.4s;
  }
  .draggable:hover {
    background-color: #354a5f;
    color: white;
  }
  .draggable.dragging {
    opacity: .7;
    background-color: #354a5f;
  }
  .container {
    background-color: #29313a;
    width: 290px;
    height: 100%;
    top: 48px;
  }
 
  path {
    fill: #7E99B0;
  }
  .childtext {
    position: relative;
    top: -3px;  /* relative to parent container */
    
  }
  table, tr, td {
  
      background-color:rgb(41, 49, 58);	   
      width:100%;
  
  }
  
  .childNav {
  
      background-color:rgb(31, 39, 48);	   
      width:100%;
  
  }
  
  .rotated {
      transform: rotate(90deg); /* Equal to rotateZ(45deg) */
      transition-duration:0.25s;
    
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
      height:20px;
      width:92%;
  
  }
  
  a:hover {
      background-color:rgb(47, 62, 83);
  }
  td:active {
      position:relative;
      top:1px;
  }
  
  .icon { 
    width: 16px;
    height: 16px;
    display: inline-block;
    background-size: contain;
    vertical-align: top;
    filter: invert(.8) sepia(.3) hue-rotate(170deg) saturate(300%) opacity(60%);
  }
  .mainHolder{
    opacity: 99%;
    width: 290px;
    
  }

</style>
</head>
<body>
    <div class="mainHolder" id="regularSideBar">
        <p><i class="fa-solid fa-user"></i>NAVIGATION</p>
        <table id="tableNavigation"></table>
        
        <!--
            <p id="userDefined"><i class="fa-solid fa-user"></i></p>
            <table id="tableUserDefined"></table>
        -->
        
        <p>ADMIN</p>
        <table id="tableAdmin"></table>
        <p id="context"></p>
        <table id="tableContext"></table>
    </div>

    <div hidden class="container" id="editSideBar"></div>
    <br>

</body>
 `;


	class Unifiedbar extends HTMLElement {
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
			var _oldSelectedItem = "";
            var _selectedApp;

            var currentDelete;
            var currentEdit;

            var sidebarItems = null;
            var editBool = true; //edit status
            var preciseItem = null //LOOK AT ME

            var selectionVar;
            
		}
        initialize(){
            this.containerPrep()
            var draggables = this.shadowRoot.querySelectorAll('.draggable')
            var sections = this.shadowRoot.querySelectorAll('.section')
    
            this.shadowRoot.querySelectorAll('.draggable').forEach(item =>{
                this.hoverButtonAdd(item)
            })
            this.shadowRoot.querySelectorAll('.section').forEach(item =>{
                this.hoverButtonAdd(item)
            })
            
            
            this.shadowRoot.querySelectorAll('.xButton').forEach(item => {
                item.addEventListener("click", ()=>{
                    //console.log("XXXXXXXXXX")
                })
            })
            
            this.shadowRoot.querySelectorAll('.editButton').forEach(item => {
                item.addEventListener("click", ()=>{
                    //console.log("EDITTTTT")
                    var event = new Event("onEdit");
				    this.dispatchEvent(event);
                })
            })

            draggables.forEach(draggable => {//draggables will be added to dragging class when dragged
                draggable.addEventListener('dragstart', () => {
                    draggable.classList.add('dragging')
                    this.preciseItem=draggable
                })
                draggable.addEventListener('dragend', () => {//and removed when not being dragged
                    draggable.classList.remove('dragging')
                })
            })
    
            sections.forEach(section => {//same as for sections
                section.addEventListener('dragstart', () => {
                section.classList.add('dragging')
                    this.preciseItem = section
                })
                section.addEventListener('dragend', () => {
                    section.classList.remove('dragging')
                })
            })
        }
        receiveSelectionVariable(selvar){
            this.selectionVar = selvar
            console.log("rdtcfgvh"+selvar.toString)
            //console.log("dasfdaf"+selvar.)
        }
        receiveKeyValArray(stuff){
            console.log("stuff"+stuff)
        }
        getFullEditSideBar(){
            let returnList = [["id","type","description","link","icon","model","linktype","title","parent"]]
            //let returnList = [["description","link","icon","model","linktype","title","parent"]]
            //var curList = []
            var editSideBar = this.shadowRoot.getElementById("editSideBar").children
            for(var i=0;i<editSideBar.length;i++){
                if(editSideBar[i].classList.contains("hierarchy")){
                    //console.log("hierarchy " + editSideBar[i].id)
                    returnList.push([editSideBar[i].id,"hierarchy",editSideBar[i].getAttribute("description"),editSideBar[i].getAttribute("link"),editSideBar[i].getAttribute("icon"),editSideBar[i].getAttribute("model"),editSideBar[i].getAttribute("linktype"),editSideBar[i].getAttribute("title"),editSideBar[i].getAttribute("parent")])
                    
                    for(var j=1;j<editSideBar[i].children[1].children.length;j++){
                        //ADD CHECK FOR EMPTY LIST
                        var shorthand = editSideBar[i].children[1].children[j]
                        //returnList.push([editSideBar[i].children[1].children[j].id,"child",editSideBar[i].children[1].children[j].getAttribute("description"),editSideBar[i].children[1].children[j].getAttribute("link")])
                        returnList.push([shorthand.id,"child",shorthand.getAttribute("description"),shorthand.getAttribute("link"),shorthand.getAttribute("icon"),shorthand.getAttribute("model"),shorthand.getAttribute("linktype"),shorthand.getAttribute("title"),shorthand.getAttribute("parent")])
                    }
                }
                else if(editSideBar[i].classList.contains("section")){
                    returnList.push([editSideBar[i].id,"section",editSideBar[i].getAttribute("description"),editSideBar[i].getAttribute("link"),,editSideBar[i].getAttribute("icon"),editSideBar[i].getAttribute("model"),editSideBar[i].getAttribute("linktype"),editSideBar[i].getAttribute("title"),editSideBar[i].getAttribute("parent")])
           
                }
                else{
                    returnList.push([editSideBar[i].id,"standalone",editSideBar[i].getAttribute("description"),editSideBar[i].getAttribute("link"),,editSideBar[i].getAttribute("icon"),editSideBar[i].getAttribute("model"),editSideBar[i].getAttribute("linktype"),editSideBar[i].getAttribute("title"),editSideBar[i].getAttribute("parent")])
                }
            }
            //console.log(returnList)
            return returnList
        }
        // getEditSideBar(){
        //     var returnList
        //     var editSideBar = this.shadowRoot.getElementById("editSideBar").children
        //     for(var i=0;i<editSideBar.length;i++){
        //         if(editSideBar[i].classList.contains("hierarchy")){ //&& editSideBar.children[i].children[1].children!=null
        //             console.log("hierarchy " + editSideBar[i].id)
        //             //returnList.append("hierarchy " + editSideBar[i].id)
        //             for(var j=1;j<editSideBar[i].children[1].children.length;j++){
        //                 //ADD CHECK FOR EMPTY LIST
                        
        //                 //returnList.append("child "+this.shadowRoot.getElementById("editSideBar").children[2].children[1].children[j].id)
        //                 console.log("child "+editSideBar[i].children[1].children[j].id)
        //             }
        //         }
        //         else if(editSideBar[i].classList.contains("section")){
        //             //returnList.append("section " + editSideBar[i].id)
        //             console.log("section " + editSideBar[i].id)
        //         }
        //         else{
        //             //returnList.append("standalone "+editSideBar[i].id)
        //             console.log("standalone "+editSideBar[i].id)
        //         }
        //     }
        //     //return returnList

        // }
        addTableToMainSidebar(tableName){
            var mainSideBar = this.shadowRoot.getElementById("regularSideBar")
            var pel = document.createElement("p")
            pel.innerHTML = tableName
            mainSideBar.appendChild(pel)

            var tab = document.createElement("table")
            tab.id = ("table"+tableName)
            mainSideBar.appendChild(tab)
        }
        addItemToTable(caption, icon, parentname, tableName) {
			var table = this.shadowRoot.getElementById(tableName);
			var row = table.insertRow();//changed index
			var cell = row.insertCell(0);
			cell.id = caption;
 var icons = {
    "comment-dollar": [512, 512, [], "f651", "M256 31.1c-141.4 0-255.1 93.09-255.1 208c0 49.59 21.37 94.1 56.97 130.7c-12.5 50.39-54.31 95.3-54.81 95.8C0 468.8-.5938 472.2 .6875 475.2C1.1 478.2 4.813 479.1 8 479.1c66.31 0 116-31.8 140.6-51.41c32.72 12.31 69.02 19.41 107.4 19.41c141.4 0 255.1-93.09 255.1-207.1S397.4 31.1 256 31.1zM317.8 282.3c-3.623 20.91-19.47 34.64-41.83 39.43V332c0 11.03-8.946 20-19.99 20S236 343 236 332v-10.77c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5C196.3 308.5 190.8 297.1 194.5 286.7c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031c13.72 2.125 28.94 .1875 30.31-7.625c.875-5.094 1.359-7.906-27.92-16.28L244.7 257.5c-17.33-5.094-57.92-17-50.52-59.84C197.8 176.8 213.6 162.8 236 157.1V148c0-11.03 8.961-20 20.01-20s19.99 8.969 19.99 20v10.63c5.453 1.195 11.34 2.789 18.56 5.273c10.44 3.625 15.95 15.03 12.33 25.47c-3.625 10.41-15.06 15.94-25.45 12.34c-5.859-2.031-12-4-17.59-4.844C250.2 194.8 234.1 196.7 233.6 204.5C232.8 208.1 232.3 212.2 255.1 219.2l5.547 1.594C283.8 227.1 325.3 239 317.8 282.3z"],
    "gauge-high": [512, 512, [62461, "tachometer-alt", "tachometer-alt-fast"], "f625", "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"],
    "money-check-dollar": [576, 512, ["money-check-alt"], "f53d", "M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM272 192C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224H496C504.8 224 512 216.8 512 208C512 199.2 504.8 192 496 192H272zM272 320H496C504.8 320 512 312.8 512 304C512 295.2 504.8 288 496 288H272C263.2 288 256 295.2 256 304C256 312.8 263.2 320 272 320zM164.1 160C164.1 148.9 155.1 139.9 143.1 139.9C132.9 139.9 123.9 148.9 123.9 160V166C118.3 167.2 112.1 168.9 108 171.1C93.06 177.9 80.07 190.5 76.91 208.8C75.14 219 76.08 228.9 80.32 237.8C84.47 246.6 91 252.8 97.63 257.3C109.2 265.2 124.5 269.8 136.2 273.3L138.4 273.9C152.4 278.2 161.8 281.3 167.7 285.6C170.2 287.4 171.1 288.8 171.4 289.7C171.8 290.5 172.4 292.3 171.7 296.3C171.1 299.8 169.2 302.8 163.7 305.1C157.6 307.7 147.7 309 134.9 307C128.9 306 118.2 302.4 108.7 299.2C106.5 298.4 104.3 297.7 102.3 297C91.84 293.5 80.51 299.2 77.02 309.7C73.53 320.2 79.2 331.5 89.68 334.1C90.89 335.4 92.39 335.9 94.11 336.5C101.1 339.2 114.4 343.4 123.9 345.6V352C123.9 363.1 132.9 372.1 143.1 372.1C155.1 372.1 164.1 363.1 164.1 352V346.5C169.4 345.5 174.6 343.1 179.4 341.9C195.2 335.2 207.8 322.2 211.1 303.2C212.9 292.8 212.1 282.8 208.1 273.7C204.2 264.7 197.9 258.1 191.2 253.3C179.1 244.4 162.9 239.6 150.8 235.9L149.1 235.7C135.8 231.4 126.2 228.4 120.1 224.2C117.5 222.4 116.7 221.2 116.5 220.7C116.3 220.3 115.7 219.1 116.3 215.7C116.7 213.7 118.2 210.4 124.5 207.6C130.1 204.7 140.9 203.1 153.1 204.1C157.5 205.7 171 208.3 174.9 209.3C185.5 212.2 196.5 205.8 199.3 195.1C202.2 184.5 195.8 173.5 185.1 170.7C180.7 169.5 170.7 167.5 164.1 166.3L164.1 160z"],
    "people-group": [640, 512, [], "e533", "M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"],
    "magnifying-glass": [512, 512, [128269, "search"], "f002", "M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"],
    "sack-dollar": [512, 512, [128176], "f81d", "M320 96H192L144.6 24.88C137.5 14.24 145.1 0 157.9 0H354.1C366.9 0 374.5 14.24 367.4 24.88L320 96zM192 128H320C323.8 130.5 328.1 133.3 332.1 136.4C389.7 172.7 512 250.9 512 416C512 469 469 512 416 512H96C42.98 512 0 469 0 416C0 250.9 122.3 172.7 179 136.4C183.9 133.3 188.2 130.5 192 128V128zM276.1 224C276.1 212.9 267.1 203.9 255.1 203.9C244.9 203.9 235.9 212.9 235.9 224V230C230.3 231.2 224.1 232.9 220 235.1C205.1 241.9 192.1 254.5 188.9 272.8C187.1 283 188.1 292.9 192.3 301.8C196.5 310.6 203 316.8 209.6 321.3C221.2 329.2 236.5 333.8 248.2 337.3L250.4 337.9C264.4 342.2 273.8 345.3 279.7 349.6C282.2 351.4 283.1 352.8 283.4 353.7C283.8 354.5 284.4 356.3 283.7 360.3C283.1 363.8 281.2 366.8 275.7 369.1C269.6 371.7 259.7 373 246.9 371C240.9 370 230.2 366.4 220.7 363.2C218.5 362.4 216.3 361.7 214.3 361C203.8 357.5 192.5 363.2 189 373.7C185.5 384.2 191.2 395.5 201.7 398.1C202.9 399.4 204.4 399.9 206.1 400.5C213.1 403.2 226.4 407.4 235.9 409.6V416C235.9 427.1 244.9 436.1 255.1 436.1C267.1 436.1 276.1 427.1 276.1 416V410.5C281.4 409.5 286.6 407.1 291.4 405.9C307.2 399.2 319.8 386.2 323.1 367.2C324.9 356.8 324.1 346.8 320.1 337.7C316.2 328.7 309.9 322.1 303.2 317.3C291.1 308.4 274.9 303.6 262.8 299.9L261.1 299.7C247.8 295.4 238.2 292.4 232.1 288.2C229.5 286.4 228.7 285.2 228.5 284.7C228.3 284.3 227.7 283.1 228.3 279.7C228.7 277.7 230.2 274.4 236.5 271.6C242.1 268.7 252.9 267.1 265.1 268.1C269.5 269.7 283 272.3 286.9 273.3C297.5 276.2 308.5 269.8 311.3 259.1C314.2 248.5 307.8 237.5 297.1 234.7C292.7 233.5 282.7 231.5 276.1 230.3L276.1 224z"],
    "list-check": [512, 512, ["tasks"], "f0ae", "M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z"],    
     "crosshairs": [512, 512, [], "f05b", "M224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256zM256 0C273.7 0 288 14.33 288 32V42.35C381.7 56.27 455.7 130.3 469.6 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H469.6C455.7 381.7 381.7 455.7 288 469.6V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V469.6C130.3 455.7 56.27 381.7 42.35 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H42.35C56.27 130.3 130.3 56.27 224 42.35V32C224 14.33 238.3 0 256 0V0zM224 404.6V384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384V404.6C346.3 392.1 392.1 346.3 404.6 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H404.6C392.1 165.7 346.3 119.9 288 107.4V128C288 145.7 273.7 160 256 160C238.3 160 224 145.7 224 128V107.4C165.7 119.9 119.9 165.7 107.4 224H128C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288H107.4C119.9 346.3 165.7 392.1 224 404.6z"]
};
            if (parentname==="*"){//parent
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><svg class="child" width="16" height="16" viewBox="0 0 '+icons[icon][0]+' '+icons[icon][1]+'"><path d="' + icons[icon][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span><img id="'+caption+'C" class="icon" style="float:right;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTY0IDQ0OGMtOC4xODggMC0xNi4zOC0zLjEyNS0yMi42Mi05LjM3NWMtMTIuNS0xMi41LTEyLjUtMzIuNzUgMC00NS4yNUwxNzguOCAyNTZMNDEuMzggMTE4LjZjLTEyLjUtMTIuNS0xMi41LTMyLjc1IDAtNDUuMjVzMzIuNzUtMTIuNSA0NS4yNSAwbDE2MCAxNjBjMTIuNSAxMi41IDEyLjUgMzIuNzUgMCA0NS4yNWwtMTYwIDE2MEM4MC4zOCA0NDQuOSA3Mi4xOSA0NDggNjQgNDQ4eiIvPjwvc3ZnPg=="/></a>';
            }
            else if (parentname){
                row.setAttribute("parentname", parentname);
                row.classList.add("childNav");
                row.hidden=true;
                cell.classList.add("childNav");
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';
            }
            else{//standalone
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><svg class="child" width="16" height="16" viewBox="0 0 '+icons[icon][0]+' '+icons[icon][1]+'"><path d="' + icons[icon][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span></a>';	
			}
					

			cell.addEventListener("click", () => {
                this._selectedItem = caption;
                var childRows = this.shadowRoot.querySelectorAll('[parentname="'+caption+'"]');
                var rotate = false;
                for (let i = 0; i < childRows.length; i++) {
                    childRows[i].hidden = !childRows[i].hidden;
                    rotate=childRows[i].hidden;
                  }                
                
                var parentCaratNode = this.shadowRoot.getElementById(caption+'C');
                if (parentCaratNode){
                    if (rotate){
                        parentCaratNode.classList.remove("rotated"); 
                    }
                    else{
                        parentCaratNode.classList.add("rotated");
                    }
                }
			});			
        }

        writeToMainSidebar(array){
            var mainSideBar = this.shadowRoot.getElementById("regularSideBar")
            // while(mainSideBar.firstChild){
            //     mainSideBar.remove(mainSideBar.firstChild)
            // }
            mainSideBar.replaceChildren()
            var curTable
            var curHier
            for(var i=1;i<array.length;i++){
                if(array[i][1] == "section"){
                    this.addTableToMainSidebar(array[i][0].slice(4))
                    // var pel = document.createElement("p")
                    var value = array[i][0]
                    // pel.innerHTML = value.slice(4)
                    
                    // mainSideBar.appendChild(pel)

                    // var tab = document.createElement("table")
                    // tab.id = ("table"+array[i][1]).slice(4)
                    // mainSideBar.appendChild(tab)
                    curTable = "table"+value.slice(4)
                }
                else if(array[i][1] == "hierarchy"){
                    //var pel = document.createElement("p")
                    var value = array[i][0]
                    if(curTable){
                        //value = value + " " + curTable
                        this.addItemToTable(value.slice(4),"comment-dollar","*",curTable)
                    }
                    //pel.innerHTML = value.slice(4)
                    
                    //mainSideBar.appendChild(pel)

                    // var tab = document.createElement("table")
                    // tab.id = "table"+array[i][1]
                    // editSideBar.appendChild(tab)
                    curHier = value.slice(4)
                }
                else if(array[i][1] == "child"){
                    //var pel = document.createElement("p")
                    var value = array[i][0]
                    if(curTable){
                        if(curHier){
                            // value = value + " " + curHier
                            this.addItemToTable(value.slice(4),"sack-dollar",curHier,curTable)
                        }
                    }
                    
                    
                    
                    //mainSideBar.appendChild(pel)

                    // var tab = document.createElement("table")
                    // tab.id = "table"+array[i][1]
                    // editSideBar.appendChild(tab)
                }
                else if(array[i][1] == "standalone"){
                    // var pel = document.createElement("p")
                    var value = array[i][0]// + " standalone"
                    // pel.innerHTML = value.slice(4)
                    
                    // mainSideBar.appendChild(pel)
                    this.addItemToTable(value.slice(4),"crosshairs","",curTable)
                }
            }
        }
       
        getFullMainSidebar(){//desc link icon model linktype title parentid
            //let returnList = [["id","type","description","link"]]
            let formatList = [["desc",'link',"icon","model","linktype","title","parentID"]]
            //var curList = []
            var editSideBar = this.shadowRoot.getElementById("editSideBar").children
            for(var i=0;i<editSideBar.length;i++){
                if(editSideBar[i].classList.contains("hierarchy")){
                    //("hierarchy " + editSideBar[i].id)
                    returnList.push([editSideBar[i].id,"hierarchy",editSideBar[i].getAttribute("description"),editSideBar[i].getAttribute("link")])
                    
                    for(var j=1;j<editSideBar[i].children[1].children.length;j++){
                        //ADD CHECK FOR EMPTY LIST
                        returnList.push([editSideBar[i].children[1].children[j].id,"child",editSideBar[i].children[1].children[j].getAttribute("description"),editSideBar[i].children[1].children[j].getAttribute("link")])
                    }
                }
                else if(editSideBar[i].classList.contains("section")){
                    returnList.push([editSideBar[i].id,"section",editSideBar[i].getAttribute("description"),editSideBar[i].getAttribute("link")])
           
                }
                else{
                    returnList.push([editSideBar[i].id,"standalone",editSideBar[i].getAttribute("description"),editSideBar[i].getAttribute("link")])
                }
            }
            //console.log(returnList)
            for(i=1;i<formatList.length;i++){

            }
            return returnList

        }
        loadEditSidebar(){
            var event = new Event("dataPull");
			this.dispatchEvent(event);

            var sideBar = this.shadowRoot.getElementById("editSideBar")
            sideBar.innerHTML = ""
            //document.getElementsByTagName("com-cbeyondata-sidepanel")[0].shadowRoot.getElementById("tableNavigation") is parent name if it exists
            for(var num = 0; num < this.shadowRoot.getElementById("regularSideBar").children.length; num++){
                var shadowNode = this.shadowRoot.getElementById("regularSideBar").children[num]
                if(shadowNode.tagName != null && shadowNode.tagName == "TABLE" && shadowNode.children.length>0){
                    this.addNewSection(shadowNode.id.slice(5).toUpperCase(),"this is a section")
                    var table = this.shadowRoot.getElementById("regularSideBar").children[num]
                    for (var i = 0; i<table.rows.length; i++) {
                        //iterate through rows
                        if(i<table.rows.length-1){
                            if(table.rows[i+1].getAttribute("parentname") != null){
                                var parentIndex = i
                                this.addNewHier(table.rows[i].cells[0].id, "I am crying")
                                while(i<table.rows.length-1 && table.rows[i+1].getAttribute("parentname") != null){
                                    this.addToHier(table.rows[parentIndex].cells[0].id, this.createNewChild(table.rows[i+1].cells[0].id,"A test","pray for me"))
                                    i++
                                }
                            }
                            else{
                                this.addNewChild(table.rows[i].cells[0].id,"A test","pray for me")
                            }

                        }
                        else{
                            this.addNewChild(table.rows[i].cells[0].id,"A test","pray for me")
                        }
                        
                        //console.log(table.rows[i].cells[0].id)
                    }
                }
            }
        }
        containerPrep(){
            var containers = this.shadowRoot.querySelectorAll('.container')
            containers.forEach(container => {//containers are MARKED
                container.addEventListener('dragover', e => { //when an item is dragged over it
                    e.preventDefault()//makes icon not freak out
                    var afterElement = this.getDragAfterElement(container, e.clientY)//e.clientY finds height of mouse
                    //var draggable = this.shadowRoot.querySelector('.dragging') //grabs the object actually being dragged
                    if (afterElement == null) {//if mouse+draggable is below lowest item
                        container.appendChild(this.preciseItem)
                    } else {//otherwise put it above the closest item
                        // console.log(this.preciseItem)
                        // console.log(afterElement)
                        try{container.insertBefore(this.preciseItem, afterElement)}
                        catch (error) {  console.error(error)
                        }
                    }
                })
            })
        }
        setSelected(newSelected){
            var cell;
            var anchor;

            if (this._oldSelectedItem){
                cell = this.shadowRoot.getElementById(this._oldSelectedItem);
                anchor = this.shadowRoot.getElementById(this._oldSelectedItem + "A");
                
                cell.classList.remove("sel");
                anchor.classList.remove("sela");
            }

			this._oldSelectedItem = newSelected;
			this._selectedItem = newSelected;

			cell = this.shadowRoot.getElementById(newSelected);
			anchor = this.shadowRoot.getElementById(newSelected + "A");
			
			cell.classList.add("sel");
			anchor.classList.add("sela");
            if (cell.parentElement.hidden){
		        var caption =  cell.parentNode.getAttribute("parentname").toString();
                
                var childRows = this.shadowRoot.querySelectorAll('[parentname="'+caption+'"]');
                var rotate = false;
		
                for (let i = 0; i < childRows.length; i++) {
                    childRows[i].hidden = !childRows[i].hidden;
                    rotate=childRows[i].hidden;
                }                
                var parentCaratNode = this.shadowRoot.getElementById(caption+'C');
                if (parentCaratNode){
                    if (rotate){
                        parentCaratNode.classList.remove("rotated"); 
                    }
                    else{
                        parentCaratNode.classList.add("rotated");
                    }
                }
            }
		}
        getSelected() {
            return this._selectedItem;
        }
        getClientHeight() {//refactor to include all objects
            var rtn = 0;
            for (let i = 0; i < this.shadowRoot.getRootNode().children.length; i++) {
                rtn += this.shadowRoot.getRootNode().children[i].clientHeight;
              }
            return rtn;
        }
        addContext(caption, icon) {
			var table = this.shadowRoot.getElementById("tableContext");
			var row = table.insertRow(0);
			var cell = row.insertCell(0);
			
			cell.innerHTML = '<a href="" onclick="return false;"><img class="icon" src="data:image/svg+xml;base64,' + icon + '"/>&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';	
			cell.addEventListener("click", () => {
				this._selectedItem = caption;
			});

			//console.log(document.querySelectorAll('[title="Prior Spend plan"]'));
			//var nodeList = document.querySelectorAll('[title="Prior Spend plan"]');
			//if (nodeList)
			//{
			//	if (nodeList.length>1)
			//	{
			//		nodeList[1].innerText = caption;
			//	}
			//}
		}

        addNavigation(caption, icon, parentname) {
			var table = this.shadowRoot.getElementById("tableNavigation");
			var row = table.insertRow(0);
			var cell = row.insertCell(0);
			cell.id = caption;
 var icons = {
    "comment-dollar": [512, 512, [], "f651", "M256 31.1c-141.4 0-255.1 93.09-255.1 208c0 49.59 21.37 94.1 56.97 130.7c-12.5 50.39-54.31 95.3-54.81 95.8C0 468.8-.5938 472.2 .6875 475.2C1.1 478.2 4.813 479.1 8 479.1c66.31 0 116-31.8 140.6-51.41c32.72 12.31 69.02 19.41 107.4 19.41c141.4 0 255.1-93.09 255.1-207.1S397.4 31.1 256 31.1zM317.8 282.3c-3.623 20.91-19.47 34.64-41.83 39.43V332c0 11.03-8.946 20-19.99 20S236 343 236 332v-10.77c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5C196.3 308.5 190.8 297.1 194.5 286.7c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031c13.72 2.125 28.94 .1875 30.31-7.625c.875-5.094 1.359-7.906-27.92-16.28L244.7 257.5c-17.33-5.094-57.92-17-50.52-59.84C197.8 176.8 213.6 162.8 236 157.1V148c0-11.03 8.961-20 20.01-20s19.99 8.969 19.99 20v10.63c5.453 1.195 11.34 2.789 18.56 5.273c10.44 3.625 15.95 15.03 12.33 25.47c-3.625 10.41-15.06 15.94-25.45 12.34c-5.859-2.031-12-4-17.59-4.844C250.2 194.8 234.1 196.7 233.6 204.5C232.8 208.1 232.3 212.2 255.1 219.2l5.547 1.594C283.8 227.1 325.3 239 317.8 282.3z"],
    "gauge-high": [512, 512, [62461, "tachometer-alt", "tachometer-alt-fast"], "f625", "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"],
    "money-check-dollar": [576, 512, ["money-check-alt"], "f53d", "M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM272 192C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224H496C504.8 224 512 216.8 512 208C512 199.2 504.8 192 496 192H272zM272 320H496C504.8 320 512 312.8 512 304C512 295.2 504.8 288 496 288H272C263.2 288 256 295.2 256 304C256 312.8 263.2 320 272 320zM164.1 160C164.1 148.9 155.1 139.9 143.1 139.9C132.9 139.9 123.9 148.9 123.9 160V166C118.3 167.2 112.1 168.9 108 171.1C93.06 177.9 80.07 190.5 76.91 208.8C75.14 219 76.08 228.9 80.32 237.8C84.47 246.6 91 252.8 97.63 257.3C109.2 265.2 124.5 269.8 136.2 273.3L138.4 273.9C152.4 278.2 161.8 281.3 167.7 285.6C170.2 287.4 171.1 288.8 171.4 289.7C171.8 290.5 172.4 292.3 171.7 296.3C171.1 299.8 169.2 302.8 163.7 305.1C157.6 307.7 147.7 309 134.9 307C128.9 306 118.2 302.4 108.7 299.2C106.5 298.4 104.3 297.7 102.3 297C91.84 293.5 80.51 299.2 77.02 309.7C73.53 320.2 79.2 331.5 89.68 334.1C90.89 335.4 92.39 335.9 94.11 336.5C101.1 339.2 114.4 343.4 123.9 345.6V352C123.9 363.1 132.9 372.1 143.1 372.1C155.1 372.1 164.1 363.1 164.1 352V346.5C169.4 345.5 174.6 343.1 179.4 341.9C195.2 335.2 207.8 322.2 211.1 303.2C212.9 292.8 212.1 282.8 208.1 273.7C204.2 264.7 197.9 258.1 191.2 253.3C179.1 244.4 162.9 239.6 150.8 235.9L149.1 235.7C135.8 231.4 126.2 228.4 120.1 224.2C117.5 222.4 116.7 221.2 116.5 220.7C116.3 220.3 115.7 219.1 116.3 215.7C116.7 213.7 118.2 210.4 124.5 207.6C130.1 204.7 140.9 203.1 153.1 204.1C157.5 205.7 171 208.3 174.9 209.3C185.5 212.2 196.5 205.8 199.3 195.1C202.2 184.5 195.8 173.5 185.1 170.7C180.7 169.5 170.7 167.5 164.1 166.3L164.1 160z"],
    "people-group": [640, 512, [], "e533", "M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"],
    "magnifying-glass": [512, 512, [128269, "search"], "f002", "M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"],
    "sack-dollar": [512, 512, [128176], "f81d", "M320 96H192L144.6 24.88C137.5 14.24 145.1 0 157.9 0H354.1C366.9 0 374.5 14.24 367.4 24.88L320 96zM192 128H320C323.8 130.5 328.1 133.3 332.1 136.4C389.7 172.7 512 250.9 512 416C512 469 469 512 416 512H96C42.98 512 0 469 0 416C0 250.9 122.3 172.7 179 136.4C183.9 133.3 188.2 130.5 192 128V128zM276.1 224C276.1 212.9 267.1 203.9 255.1 203.9C244.9 203.9 235.9 212.9 235.9 224V230C230.3 231.2 224.1 232.9 220 235.1C205.1 241.9 192.1 254.5 188.9 272.8C187.1 283 188.1 292.9 192.3 301.8C196.5 310.6 203 316.8 209.6 321.3C221.2 329.2 236.5 333.8 248.2 337.3L250.4 337.9C264.4 342.2 273.8 345.3 279.7 349.6C282.2 351.4 283.1 352.8 283.4 353.7C283.8 354.5 284.4 356.3 283.7 360.3C283.1 363.8 281.2 366.8 275.7 369.1C269.6 371.7 259.7 373 246.9 371C240.9 370 230.2 366.4 220.7 363.2C218.5 362.4 216.3 361.7 214.3 361C203.8 357.5 192.5 363.2 189 373.7C185.5 384.2 191.2 395.5 201.7 398.1C202.9 399.4 204.4 399.9 206.1 400.5C213.1 403.2 226.4 407.4 235.9 409.6V416C235.9 427.1 244.9 436.1 255.1 436.1C267.1 436.1 276.1 427.1 276.1 416V410.5C281.4 409.5 286.6 407.1 291.4 405.9C307.2 399.2 319.8 386.2 323.1 367.2C324.9 356.8 324.1 346.8 320.1 337.7C316.2 328.7 309.9 322.1 303.2 317.3C291.1 308.4 274.9 303.6 262.8 299.9L261.1 299.7C247.8 295.4 238.2 292.4 232.1 288.2C229.5 286.4 228.7 285.2 228.5 284.7C228.3 284.3 227.7 283.1 228.3 279.7C228.7 277.7 230.2 274.4 236.5 271.6C242.1 268.7 252.9 267.1 265.1 268.1C269.5 269.7 283 272.3 286.9 273.3C297.5 276.2 308.5 269.8 311.3 259.1C314.2 248.5 307.8 237.5 297.1 234.7C292.7 233.5 282.7 231.5 276.1 230.3L276.1 224z"],
    "list-check": [512, 512, ["tasks"], "f0ae", "M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z"],    
     "crosshairs": [512, 512, [], "f05b", "M224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256zM256 0C273.7 0 288 14.33 288 32V42.35C381.7 56.27 455.7 130.3 469.6 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H469.6C455.7 381.7 381.7 455.7 288 469.6V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V469.6C130.3 455.7 56.27 381.7 42.35 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H42.35C56.27 130.3 130.3 56.27 224 42.35V32C224 14.33 238.3 0 256 0V0zM224 404.6V384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384V404.6C346.3 392.1 392.1 346.3 404.6 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H404.6C392.1 165.7 346.3 119.9 288 107.4V128C288 145.7 273.7 160 256 160C238.3 160 224 145.7 224 128V107.4C165.7 119.9 119.9 165.7 107.4 224H128C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288H107.4C119.9 346.3 165.7 392.1 224 404.6z"]
};
            if (parentname==="*"){
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><svg class="child" width="16" height="16" viewBox="0 0 '+icons[icon][0]+' '+icons[icon][1]+'"><path d="' + icons[icon][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span><img id="'+caption+'C" class="icon" style="float:right;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTY0IDQ0OGMtOC4xODggMC0xNi4zOC0zLjEyNS0yMi42Mi05LjM3NWMtMTIuNS0xMi41LTEyLjUtMzIuNzUgMC00NS4yNUwxNzguOCAyNTZMNDEuMzggMTE4LjZjLTEyLjUtMTIuNS0xMi41LTMyLjc1IDAtNDUuMjVzMzIuNzUtMTIuNSA0NS4yNSAwbDE2MCAxNjBjMTIuNSAxMi41IDEyLjUgMzIuNzUgMCA0NS4yNWwtMTYwIDE2MEM4MC4zOCA0NDQuOSA3Mi4xOSA0NDggNjQgNDQ4eiIvPjwvc3ZnPg=="/></a>';
            }
            else if (parentname){
                row.setAttribute("parentname", parentname);
                row.classList.add("childNav");
                row.hidden=true;
                cell.classList.add("childNav");
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';
            }
            else{
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><svg class="child" width="16" height="16" viewBox="0 0 '+icons[icon][0]+' '+icons[icon][1]+'"><path d="' + icons[icon][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span></a>';	
			}
					

			cell.addEventListener("click", () => {
                this._selectedItem = caption;
                var childRows = this.shadowRoot.querySelectorAll('[parentname="'+caption+'"]');
                var rotate = false;
                for (let i = 0; i < childRows.length; i++) {
                    childRows[i].hidden = !childRows[i].hidden;
                    rotate=childRows[i].hidden;
                  }                
                
                var parentCaratNode = this.shadowRoot.getElementById(caption+'C');
                if (parentCaratNode){
                    if (rotate){
                        parentCaratNode.classList.remove("rotated"); 
                    }
                    else{
                        parentCaratNode.classList.add("rotated");
                    }
                }
			});			
        }


        addUserDefined(caption, icon, parentname) { 
			var table = this.shadowRoot.getElementById("tableUserDefined");
			var row = table.insertRow(0);
			var cell = row.insertCell(0);
			cell.id = caption;
 var icons = {
    "comment-dollar": [512, 512, [], "f651", "M256 31.1c-141.4 0-255.1 93.09-255.1 208c0 49.59 21.37 94.1 56.97 130.7c-12.5 50.39-54.31 95.3-54.81 95.8C0 468.8-.5938 472.2 .6875 475.2C1.1 478.2 4.813 479.1 8 479.1c66.31 0 116-31.8 140.6-51.41c32.72 12.31 69.02 19.41 107.4 19.41c141.4 0 255.1-93.09 255.1-207.1S397.4 31.1 256 31.1zM317.8 282.3c-3.623 20.91-19.47 34.64-41.83 39.43V332c0 11.03-8.946 20-19.99 20S236 343 236 332v-10.77c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5C196.3 308.5 190.8 297.1 194.5 286.7c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031c13.72 2.125 28.94 .1875 30.31-7.625c.875-5.094 1.359-7.906-27.92-16.28L244.7 257.5c-17.33-5.094-57.92-17-50.52-59.84C197.8 176.8 213.6 162.8 236 157.1V148c0-11.03 8.961-20 20.01-20s19.99 8.969 19.99 20v10.63c5.453 1.195 11.34 2.789 18.56 5.273c10.44 3.625 15.95 15.03 12.33 25.47c-3.625 10.41-15.06 15.94-25.45 12.34c-5.859-2.031-12-4-17.59-4.844C250.2 194.8 234.1 196.7 233.6 204.5C232.8 208.1 232.3 212.2 255.1 219.2l5.547 1.594C283.8 227.1 325.3 239 317.8 282.3z"],
    "gauge-high": [512, 512, [62461, "tachometer-alt", "tachometer-alt-fast"], "f625", "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"],
    "money-check-dollar": [576, 512, ["money-check-alt"], "f53d", "M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM272 192C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224H496C504.8 224 512 216.8 512 208C512 199.2 504.8 192 496 192H272zM272 320H496C504.8 320 512 312.8 512 304C512 295.2 504.8 288 496 288H272C263.2 288 256 295.2 256 304C256 312.8 263.2 320 272 320zM164.1 160C164.1 148.9 155.1 139.9 143.1 139.9C132.9 139.9 123.9 148.9 123.9 160V166C118.3 167.2 112.1 168.9 108 171.1C93.06 177.9 80.07 190.5 76.91 208.8C75.14 219 76.08 228.9 80.32 237.8C84.47 246.6 91 252.8 97.63 257.3C109.2 265.2 124.5 269.8 136.2 273.3L138.4 273.9C152.4 278.2 161.8 281.3 167.7 285.6C170.2 287.4 171.1 288.8 171.4 289.7C171.8 290.5 172.4 292.3 171.7 296.3C171.1 299.8 169.2 302.8 163.7 305.1C157.6 307.7 147.7 309 134.9 307C128.9 306 118.2 302.4 108.7 299.2C106.5 298.4 104.3 297.7 102.3 297C91.84 293.5 80.51 299.2 77.02 309.7C73.53 320.2 79.2 331.5 89.68 334.1C90.89 335.4 92.39 335.9 94.11 336.5C101.1 339.2 114.4 343.4 123.9 345.6V352C123.9 363.1 132.9 372.1 143.1 372.1C155.1 372.1 164.1 363.1 164.1 352V346.5C169.4 345.5 174.6 343.1 179.4 341.9C195.2 335.2 207.8 322.2 211.1 303.2C212.9 292.8 212.1 282.8 208.1 273.7C204.2 264.7 197.9 258.1 191.2 253.3C179.1 244.4 162.9 239.6 150.8 235.9L149.1 235.7C135.8 231.4 126.2 228.4 120.1 224.2C117.5 222.4 116.7 221.2 116.5 220.7C116.3 220.3 115.7 219.1 116.3 215.7C116.7 213.7 118.2 210.4 124.5 207.6C130.1 204.7 140.9 203.1 153.1 204.1C157.5 205.7 171 208.3 174.9 209.3C185.5 212.2 196.5 205.8 199.3 195.1C202.2 184.5 195.8 173.5 185.1 170.7C180.7 169.5 170.7 167.5 164.1 166.3L164.1 160z"],
    "people-group": [640, 512, [], "e533", "M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"],
    "magnifying-glass": [512, 512, [128269, "search"], "f002", "M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"],
    "sack-dollar": [512, 512, [128176], "f81d", "M320 96H192L144.6 24.88C137.5 14.24 145.1 0 157.9 0H354.1C366.9 0 374.5 14.24 367.4 24.88L320 96zM192 128H320C323.8 130.5 328.1 133.3 332.1 136.4C389.7 172.7 512 250.9 512 416C512 469 469 512 416 512H96C42.98 512 0 469 0 416C0 250.9 122.3 172.7 179 136.4C183.9 133.3 188.2 130.5 192 128V128zM276.1 224C276.1 212.9 267.1 203.9 255.1 203.9C244.9 203.9 235.9 212.9 235.9 224V230C230.3 231.2 224.1 232.9 220 235.1C205.1 241.9 192.1 254.5 188.9 272.8C187.1 283 188.1 292.9 192.3 301.8C196.5 310.6 203 316.8 209.6 321.3C221.2 329.2 236.5 333.8 248.2 337.3L250.4 337.9C264.4 342.2 273.8 345.3 279.7 349.6C282.2 351.4 283.1 352.8 283.4 353.7C283.8 354.5 284.4 356.3 283.7 360.3C283.1 363.8 281.2 366.8 275.7 369.1C269.6 371.7 259.7 373 246.9 371C240.9 370 230.2 366.4 220.7 363.2C218.5 362.4 216.3 361.7 214.3 361C203.8 357.5 192.5 363.2 189 373.7C185.5 384.2 191.2 395.5 201.7 398.1C202.9 399.4 204.4 399.9 206.1 400.5C213.1 403.2 226.4 407.4 235.9 409.6V416C235.9 427.1 244.9 436.1 255.1 436.1C267.1 436.1 276.1 427.1 276.1 416V410.5C281.4 409.5 286.6 407.1 291.4 405.9C307.2 399.2 319.8 386.2 323.1 367.2C324.9 356.8 324.1 346.8 320.1 337.7C316.2 328.7 309.9 322.1 303.2 317.3C291.1 308.4 274.9 303.6 262.8 299.9L261.1 299.7C247.8 295.4 238.2 292.4 232.1 288.2C229.5 286.4 228.7 285.2 228.5 284.7C228.3 284.3 227.7 283.1 228.3 279.7C228.7 277.7 230.2 274.4 236.5 271.6C242.1 268.7 252.9 267.1 265.1 268.1C269.5 269.7 283 272.3 286.9 273.3C297.5 276.2 308.5 269.8 311.3 259.1C314.2 248.5 307.8 237.5 297.1 234.7C292.7 233.5 282.7 231.5 276.1 230.3L276.1 224z"],
    "list-check": [512, 512, ["tasks"], "f0ae", "M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z"],    
     "crosshairs": [512, 512, [], "f05b", "M224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256zM256 0C273.7 0 288 14.33 288 32V42.35C381.7 56.27 455.7 130.3 469.6 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H469.6C455.7 381.7 381.7 455.7 288 469.6V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V469.6C130.3 455.7 56.27 381.7 42.35 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H42.35C56.27 130.3 130.3 56.27 224 42.35V32C224 14.33 238.3 0 256 0V0zM224 404.6V384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384V404.6C346.3 392.1 392.1 346.3 404.6 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H404.6C392.1 165.7 346.3 119.9 288 107.4V128C288 145.7 273.7 160 256 160C238.3 160 224 145.7 224 128V107.4C165.7 119.9 119.9 165.7 107.4 224H128C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288H107.4C119.9 346.3 165.7 392.1 224 404.6z"]
};
            if (parentname==="*"){
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><svg class="child" width="16" height="16" viewBox="0 0 '+icons[icon][0]+' '+icons[icon][1]+'"><path d="' + icons[icon][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span><img id="'+caption+'C" class="icon" style="float:right;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTY0IDQ0OGMtOC4xODggMC0xNi4zOC0zLjEyNS0yMi42Mi05LjM3NWMtMTIuNS0xMi41LTEyLjUtMzIuNzUgMC00NS4yNUwxNzguOCAyNTZMNDEuMzggMTE4LjZjLTEyLjUtMTIuNS0xMi41LTMyLjc1IDAtNDUuMjVzMzIuNzUtMTIuNSA0NS4yNSAwbDE2MCAxNjBjMTIuNSAxMi41IDEyLjUgMzIuNzUgMCA0NS4yNWwtMTYwIDE2MEM4MC4zOCA0NDQuOSA3Mi4xOSA0NDggNjQgNDQ4eiIvPjwvc3ZnPg=="/></a>';
            }
            else if (parentname){
                row.setAttribute("parentname", parentname);
                row.classList.add("childNav");
                row.hidden=true;
                cell.classList.add("childNav");
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';
            }
            else{
                cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><svg class="child" width="16" height="16" viewBox="0 0 '+icons[icon][0]+' '+icons[icon][1]+'"><path d="' + icons[icon][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span></a>';	
			}
			cell.addEventListener("click", () => {
                this._selectedItem = caption;
                var childRows = this.shadowRoot.querySelectorAll('[parentname="'+caption+'"]');
                var rotate = false;
                for (let i = 0; i < childRows.length; i++) {
                    childRows[i].hidden = !childRows[i].hidden;
                    rotate=childRows[i].hidden;
                  }                
                
                var parentCaratNode = this.shadowRoot.getElementById(caption+'C');
                if (parentCaratNode){
                    if (rotate){
                        parentCaratNode.classList.remove("rotated"); 
                    }
                    else{
                        parentCaratNode.classList.add("rotated");
                    }
                }
			});			
        }
        addAdmin(caption, icon) {
			var table = this.shadowRoot.getElementById("tableAdmin");
			var row = table.insertRow(0);
			var cell = row.insertCell(0);
			cell.id = caption;
			cell.innerHTML = '<a id="'+caption+'A" href="" onclick="return false;"><img class="icon" src="data:image/svg+xml;base64,' + icon + '"/>&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</a>';	
			cell.addEventListener("click", () => {
				this._selectedItem = caption;
			});			
        }
        clearContext() {
			var table = this.shadowRoot.getElementById("tableContext");
			while(table.rows.length > 0){
					table.deleteRow(0);
			  	}
        }

		setContextHeader(caption) {
			var p = this.shadowRoot.getElementById("context");
			
			p.innerHTML = caption;			
        }
		setUserDefinedHeader(caption) {
			var p = this.shadowRoot.getElementById("userDefined");
			
			p.innerHTML = caption;			
        }
        eventFire(el, etype){
            if (el.fireEvent) {
              el.fireEvent('on' + etype);
            } else {
              var evObj = document.createEvent('Events');
              evObj.initEvent(etype, true, false);
              el.dispatchEvent(evObj);
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

        addNewSection(name, description){//Ideally trying to add a section THESE ARE TABLES THEY HAVE NO ATTRIBUTES
            var editSideBar = this.shadowRoot.getElementById("editSideBar")
            var newSection = document.createElement("div") //create a p element
            newSection.classList.add("section") //section class added for format
            newSection.classList.add("p-inline")
            newSection.innerText = name //get the correct text on

            this.shadowRoot.querySelectorAll("*").forEach((item)=>{
                if(item.hasAttribute('id')){
                    //console.log(item.id)
                }
            }) 

            newSection.draggable = true //can be dragged :)

            // newSection.classList.add("sidebarItem") //sidebarItem class added for future usage

            // var workingString = this.selectionVar[name.toUpperCase()].split(",")
            // console.log("WORKING STEING"+workingString)

            //var idstuff = this.selectionVar[name.toUpperCase()].split(",")[0]


            // newSection.setAttribute("parameters", "mode=embed,pageBar=disabled");
            // newSection.setAttribute("icon", "exFontAwesomeIcon");
            // newSection.setAttribute("model", "");
            // newSection.setAttribute("link", "URL/last section of URL in sac");
            // newSection.setAttribute("title", "The big name");
            // newSection.setAttribute("parent", "* is a parent, otherwise must reference parent");
            // newSection.setAttribute("linkType", "4 types APP,URL,STORY,EXT");
            // newSection.setAttribute("description", description);


            newSection.addEventListener('dragstart', () => {//dragging functionality
            newSection.classList.add('dragging')
                this.preciseItem = newSection
            })
            newSection.addEventListener('dragend', () => {//has now been added
                newSection.classList.remove('dragging')
            })
            this.hoverButtonAdd(newSection)
            newSection.id = "edit"+name
            newSection.addEventListener('click', () => {
                //console.log(this.getParameters(newSection.id) + " " + this.getIcon(newSection.id) + " " +this.getModel(newSection.id) + " " +this.getLink(newSection.id) + " " +this.getTitle(newSection.id) + " " +this.getParent(newSection.id) + " " +this.getLinkType(newSection.id) + " " +this.getDescription(newSection.id) + " ")
            })
            

            editSideBar.appendChild(newSection) //add to our main container the new section
            this.setTitle(newSection.id, name)
        }
        
        createNewChild(name, description, link){
            var newChild = document.createElement("div")
            newChild.classList.add('draggable')//draggable CLASS for the correct format
            //newChild.classList.add('hoverer')
            newChild.innerText = name//text, lets move the reference of this to the method call?
            newChild.draggable = true //can drag
            newChild.classList.add("sidebarItem") //sidebar usage pls
            newChild.classList.add("p-inline")
            newChild.classList.add('standAlone')
            
            
            //console.log("WORKING STEING"+workingString)

            if(this.selectionVar[name.toUpperCase()]!=null){
                var workingString = this.selectionVar[name.toUpperCase()].split(",")
                newChild.setAttribute("description", workingString[0]);
                newChild.setAttribute("link", workingString[1]);
                newChild.setAttribute("icon", workingString[2]);
                newChild.setAttribute("model", workingString[3]);
                newChild.setAttribute("linkType", workingString[4]);
                newChild.setAttribute("title", workingString[5]);
                newChild.setAttribute("parent", workingString[6]);

                workingString = null;
            }

            newChild.addEventListener('dragstart', () => {//oooo we know this
            newChild.classList.add('dragging')
                this.preciseItem = newChild
            })
            newChild.addEventListener('dragend', () => {
                newChild.classList.remove('dragging')
            })
            newChild.id = "edit"+name
            this.hoverButtonAdd(newChild)
            newChild.addEventListener('click', () => {
                //console.log(this.getParameters(newChild.id) + " " + this.getIcon(newChild.id) + " " +this.getModel(newChild.id) + " " +this.getLink(newChild.id) + " " +this.getTitle(newChild.id) + " " +this.getParent(newChild.id) + " " +this.getLinkType(newChild.id) + " " +this.getDescription(newChild.id) + " ")
            })
            //this.setTitle(newChild.id, name)
            return newChild
        }


        addNewChild(name, description, link){
            var editSideBar = this.shadowRoot.getElementById("editSideBar")
            var newChild = document.createElement("div")
            newChild.classList.add('standAlone')
            newChild.classList.add('draggable')//draggable CLASS for the correct format
            //newChild.classList.add('hoverer')
            newChild.innerText = name//text, lets move the reference of this to the method call?
            newChild.draggable = true //can drag
            newChild.classList.add("sidebarItem") //sidebar usage pls
            newChild.classList.add("p-inline")
            

            
            //console.log("WORKING STEING"+workingString)
            if(this.selectionVar[name.toUpperCase()]!=null){
                var workingString = this.selectionVar[name.toUpperCase()].split(",")
                newChild.setAttribute("description", workingString[0]);
                newChild.setAttribute("link", workingString[1]);
                newChild.setAttribute("icon", workingString[2]);
                newChild.setAttribute("model", workingString[3]);
                newChild.setAttribute("linkType", workingString[4]);
                newChild.setAttribute("title", workingString[5]);
                newChild.setAttribute("parent", workingString[6]);
                //newChild.setAttribute("parameters", "mode=embed,pageBar=disabled")   
                workingString = null;
            }
            
            
            

            newChild.addEventListener('dragstart', () => {//oooo we know this
            newChild.classList.add('dragging')
                this.preciseItem = newChild
            })
            newChild.addEventListener('dragend', () => {
                newChild.classList.remove('dragging')
            })
            newChild.id = "edit"+name
            this.hoverButtonAdd(newChild)
            newChild.addEventListener('click', () => {
                console.log(this.getParameters(newChild.id) + " " + this.getIcon(newChild.id) + " " +this.getModel(newChild.id) + " " +this.getLink(newChild.id) + " " +this.getTitle(newChild.id) + " " +this.getParent(newChild.id) + " " +this.getLinkType(newChild.id) + " " +this.getDescription(newChild.id) + " ")
            })

            editSideBar.appendChild(newChild)//add it
            this.setTitle(newChild.id, name)
        }
        
        addToHier(parentID, child){
            this.shadowRoot.getElementById("edit"+parentID).children[1].appendChild(child)
        }

        addNewHier(name, description){//add a new hierarchy object
            var editSideBar = this.shadowRoot.getElementById("editSideBar")
            var newHier = document.createElement("div")//div element, will be the main object

            var icons = {
                "comment-dollar": [512, 512, [], "f651", "M256 31.1c-141.4 0-255.1 93.09-255.1 208c0 49.59 21.37 94.1 56.97 130.7c-12.5 50.39-54.31 95.3-54.81 95.8C0 468.8-.5938 472.2 .6875 475.2C1.1 478.2 4.813 479.1 8 479.1c66.31 0 116-31.8 140.6-51.41c32.72 12.31 69.02 19.41 107.4 19.41c141.4 0 255.1-93.09 255.1-207.1S397.4 31.1 256 31.1zM317.8 282.3c-3.623 20.91-19.47 34.64-41.83 39.43V332c0 11.03-8.946 20-19.99 20S236 343 236 332v-10.77c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5C196.3 308.5 190.8 297.1 194.5 286.7c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031c13.72 2.125 28.94 .1875 30.31-7.625c.875-5.094 1.359-7.906-27.92-16.28L244.7 257.5c-17.33-5.094-57.92-17-50.52-59.84C197.8 176.8 213.6 162.8 236 157.1V148c0-11.03 8.961-20 20.01-20s19.99 8.969 19.99 20v10.63c5.453 1.195 11.34 2.789 18.56 5.273c10.44 3.625 15.95 15.03 12.33 25.47c-3.625 10.41-15.06 15.94-25.45 12.34c-5.859-2.031-12-4-17.59-4.844C250.2 194.8 234.1 196.7 233.6 204.5C232.8 208.1 232.3 212.2 255.1 219.2l5.547 1.594C283.8 227.1 325.3 239 317.8 282.3z"],
                "gauge-high": [512, 512, [62461, "tachometer-alt", "tachometer-alt-fast"], "f625", "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"],
                "money-check-dollar": [576, 512, ["money-check-alt"], "f53d", "M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM272 192C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224H496C504.8 224 512 216.8 512 208C512 199.2 504.8 192 496 192H272zM272 320H496C504.8 320 512 312.8 512 304C512 295.2 504.8 288 496 288H272C263.2 288 256 295.2 256 304C256 312.8 263.2 320 272 320zM164.1 160C164.1 148.9 155.1 139.9 143.1 139.9C132.9 139.9 123.9 148.9 123.9 160V166C118.3 167.2 112.1 168.9 108 171.1C93.06 177.9 80.07 190.5 76.91 208.8C75.14 219 76.08 228.9 80.32 237.8C84.47 246.6 91 252.8 97.63 257.3C109.2 265.2 124.5 269.8 136.2 273.3L138.4 273.9C152.4 278.2 161.8 281.3 167.7 285.6C170.2 287.4 171.1 288.8 171.4 289.7C171.8 290.5 172.4 292.3 171.7 296.3C171.1 299.8 169.2 302.8 163.7 305.1C157.6 307.7 147.7 309 134.9 307C128.9 306 118.2 302.4 108.7 299.2C106.5 298.4 104.3 297.7 102.3 297C91.84 293.5 80.51 299.2 77.02 309.7C73.53 320.2 79.2 331.5 89.68 334.1C90.89 335.4 92.39 335.9 94.11 336.5C101.1 339.2 114.4 343.4 123.9 345.6V352C123.9 363.1 132.9 372.1 143.1 372.1C155.1 372.1 164.1 363.1 164.1 352V346.5C169.4 345.5 174.6 343.1 179.4 341.9C195.2 335.2 207.8 322.2 211.1 303.2C212.9 292.8 212.1 282.8 208.1 273.7C204.2 264.7 197.9 258.1 191.2 253.3C179.1 244.4 162.9 239.6 150.8 235.9L149.1 235.7C135.8 231.4 126.2 228.4 120.1 224.2C117.5 222.4 116.7 221.2 116.5 220.7C116.3 220.3 115.7 219.1 116.3 215.7C116.7 213.7 118.2 210.4 124.5 207.6C130.1 204.7 140.9 203.1 153.1 204.1C157.5 205.7 171 208.3 174.9 209.3C185.5 212.2 196.5 205.8 199.3 195.1C202.2 184.5 195.8 173.5 185.1 170.7C180.7 169.5 170.7 167.5 164.1 166.3L164.1 160z"],
                "people-group": [640, 512, [], "e533", "M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"],
                "magnifying-glass": [512, 512, [128269, "search"], "f002", "M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"],
                "sack-dollar": [512, 512, [128176], "f81d", "M320 96H192L144.6 24.88C137.5 14.24 145.1 0 157.9 0H354.1C366.9 0 374.5 14.24 367.4 24.88L320 96zM192 128H320C323.8 130.5 328.1 133.3 332.1 136.4C389.7 172.7 512 250.9 512 416C512 469 469 512 416 512H96C42.98 512 0 469 0 416C0 250.9 122.3 172.7 179 136.4C183.9 133.3 188.2 130.5 192 128V128zM276.1 224C276.1 212.9 267.1 203.9 255.1 203.9C244.9 203.9 235.9 212.9 235.9 224V230C230.3 231.2 224.1 232.9 220 235.1C205.1 241.9 192.1 254.5 188.9 272.8C187.1 283 188.1 292.9 192.3 301.8C196.5 310.6 203 316.8 209.6 321.3C221.2 329.2 236.5 333.8 248.2 337.3L250.4 337.9C264.4 342.2 273.8 345.3 279.7 349.6C282.2 351.4 283.1 352.8 283.4 353.7C283.8 354.5 284.4 356.3 283.7 360.3C283.1 363.8 281.2 366.8 275.7 369.1C269.6 371.7 259.7 373 246.9 371C240.9 370 230.2 366.4 220.7 363.2C218.5 362.4 216.3 361.7 214.3 361C203.8 357.5 192.5 363.2 189 373.7C185.5 384.2 191.2 395.5 201.7 398.1C202.9 399.4 204.4 399.9 206.1 400.5C213.1 403.2 226.4 407.4 235.9 409.6V416C235.9 427.1 244.9 436.1 255.1 436.1C267.1 436.1 276.1 427.1 276.1 416V410.5C281.4 409.5 286.6 407.1 291.4 405.9C307.2 399.2 319.8 386.2 323.1 367.2C324.9 356.8 324.1 346.8 320.1 337.7C316.2 328.7 309.9 322.1 303.2 317.3C291.1 308.4 274.9 303.6 262.8 299.9L261.1 299.7C247.8 295.4 238.2 292.4 232.1 288.2C229.5 286.4 228.7 285.2 228.5 284.7C228.3 284.3 227.7 283.1 228.3 279.7C228.7 277.7 230.2 274.4 236.5 271.6C242.1 268.7 252.9 267.1 265.1 268.1C269.5 269.7 283 272.3 286.9 273.3C297.5 276.2 308.5 269.8 311.3 259.1C314.2 248.5 307.8 237.5 297.1 234.7C292.7 233.5 282.7 231.5 276.1 230.3L276.1 224z"],
                "list-check": [512, 512, ["tasks"], "f0ae", "M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z"],    
                 "crosshairs": [512, 512, [], "f05b", "M224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256zM256 0C273.7 0 288 14.33 288 32V42.35C381.7 56.27 455.7 130.3 469.6 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H469.6C455.7 381.7 381.7 455.7 288 469.6V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V469.6C130.3 455.7 56.27 381.7 42.35 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H42.35C56.27 130.3 130.3 56.27 224 42.35V32C224 14.33 238.3 0 256 0V0zM224 404.6V384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384V404.6C346.3 392.1 392.1 346.3 404.6 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H404.6C392.1 165.7 346.3 119.9 288 107.4V128C288 145.7 273.7 160 256 160C238.3 160 224 145.7 224 128V107.4C165.7 119.9 119.9 165.7 107.4 224H128C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288H107.4C119.9 346.3 165.7 392.1 224 404.6z"]
            };
            var stuff = "edit"+name

            
            newHier.id = stuff
            //newHier.innerHTML = '<a id="'+"name"+name+'A" href=""><svg class="child" width="16" height="16" viewBox="0 0 '+icons["sack-dollar"][0]+' '+icons["sack-dollar"][1]+'"><path d="' + icons["sack-dollar"][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + caption + '&nbsp;&nbsp;</span></a>';
            //newHier.innerText = "> "+name//added the carat for distinguishability, move reference
            newHier.draggable = true //can be dragged
            //newHier.style.width = "80%"

            newHier.classList.add('draggable')//draggable format, CHANGE SOON
            newHier.classList.add("sidebarItem") //add class for usage
            newHier.classList.add("p-inline")
            newHier.classList.add("hierarchy")


            if(this.selectionVar[name.toUpperCase()]!=null){
                var workingString = this.selectionVar[name.toUpperCase()].split(",")
                //console.log("WORKING STEING"+workingString)

                newHier.setAttribute("description", workingString[0]);
                newHier.setAttribute("link", workingString[1]);
                newHier.setAttribute("icon", workingString[2]);
                newHier.setAttribute("model", workingString[3]);
                newHier.setAttribute("linkType", workingString[4]);
                newHier.setAttribute("title", workingString[5]);
                newHier.setAttribute("parent", workingString[6]);

                workingString = null;
            }

            this.hoverButtonAdd(newHier)

            var upperDropBounds = document.createElement("p")
            var dummy2 = document.createElement("div")
            var lowerDropBounds = document.createElement("p")
            
            upperDropBounds.innerText = " "
            dummy2.innerText = " Demo Item "
            lowerDropBounds.innerText = " ^ Drop Here ^ "

            upperDropBounds.classList.add('draggable')

            var insideList= document.createElement("div")
            insideList.classList.add("container")
            insideList.id = "insideList"
            insideList.appendChild(upperDropBounds)

            insideList.style.width = "273px"
            this.containerPrep();
            newHier.appendChild(insideList)

            insideList.addEventListener('dragover', e => {//event listener for our interior list. IDK if it works help me
                e.preventDefault()
                insideList.appendChild(this.preciseItem)
            })


            newHier.addEventListener('dragstart', () => {//dragging listeners are important
            if(insideList.style.display=="none")
                this.preciseItem = newHier
                newHier.classList.add('dragging')
            })
            newHier.addEventListener('dragend', () => {
                newHier.classList.remove('dragging')
            })  

            newHier.addEventListener("click", (event) =>{//fun stuff here. Listens for a click
                if(insideList.style.display=="none"){//if interiorList is hidden, show it and TURN OFF DRAG
                    insideList.style.display=""
                    insideList.parentElement.draggable=false //CANNOT DRAG AN OPEN LIST
                    //console.log("OPEN")
                }
                else{
                    insideList.style.display="none" //IF SHOWING WE ROLL UP
                    insideList.parentElement.draggable=true //CAN DRAG CLOSED LIST
                    //console.log("closed")
                }
            })

            insideList.style.display="none"
            //newHier.id = "edit"+name
            
            newHier.addEventListener('click', () => {
                //console.log(this.getParameters(newHier.id) + " " + this.getIcon(newHier.id) + " " +this.getModel(newHier.id) + " " +this.getLink(newHier.id) + " " +this.getTitle(newHier.id) + " " +this.getParent(newHier.id) + " " +this.getLinkType(newHier.id) + " " +this.getDescription(newHier.id) + " ")
            })

            editSideBar.appendChild(newHier)//FINALLY ADD US TO SIDEBAR AND CAN WE PLEASE CHANGE THIS REFERENCE NAME
            this.setTitle(newHier.id, name)
            newHier.innerHTML = newHier.innerHTML+'<a id="'+stuff+'A"" href="""><svg class="child" width="16" height="16" viewBox="0 0 '+icons["sack-dollar"][0]+' '+icons["sack-dollar"][1]+'"><path d="' + icons["sack-dollar"][4] + '"></path></svg><span class="childtext">&nbsp;&nbsp;' + name + '&nbsp;&nbsp;</span><img id="'+name+'C" class="icon" style="float:right;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTY0IDQ0OGMtOC4xODggMC0xNi4zOC0zLjEyNS0yMi42Mi05LjM3NWMtMTIuNS0xMi41LTEyLjUtMzIuNzUgMC00NS4yNUwxNzguOCAyNTZMNDEuMzggMTE4LjZjLTEyLjUtMTIuNS0xMi41LTMyLjc1IDAtNDUuMjVzMzIuNzUtMTIuNSA0NS4yNSAwbDE2MCAxNjBjMTIuNSAxMi41IDEyLjUgMzIuNzUgMCA0NS4yNWwtMTYwIDE2MEM4MC4zOCA0NDQuOSA3Mi4xOSA0NDggNjQgNDQ4eiIvPjwvc3ZnPg=="/></a>';
        }

            //Below all runs on start up, super important to know by heart

            //draggables should be renamed for clarity in the future OKAY???
        


        getDeletedObject(){
            //console.log(this.shadowRoot.getElementById(object)) k
            //console.log("WILL BE DELETED" + this.currentDelete)
            return this.currentDelete
        }
        deleteObject(){
            this.shadowRoot.getElementById(this.currentDelete).remove()
        }
        confirmEdit(id, description, link, newID){
            var item = this.shadowRoot.getElementById(id) 
            item.setAttribute("description",description)
            item.setAttribute("link",link) 
            item.id = "edit"+newID
            if(item.classList.contains("hierarchy")){
                item.firstChild.data = "> "+newID
            }
            else{
                item.firstChild.data = newID
            }
        }
        getEditObject(){
            //console.log("WILL BE EDIT" + this.currentEdit)
            return this.currentEdit
        }
            

        hoverButtonAdd(parent){
            //console.log("ADDING")
            var hiddenDiv = document.createElement("div")

            var icons = {
                "comment-dollar": [512, 512, [], "f651", "M256 31.1c-141.4 0-255.1 93.09-255.1 208c0 49.59 21.37 94.1 56.97 130.7c-12.5 50.39-54.31 95.3-54.81 95.8C0 468.8-.5938 472.2 .6875 475.2C1.1 478.2 4.813 479.1 8 479.1c66.31 0 116-31.8 140.6-51.41c32.72 12.31 69.02 19.41 107.4 19.41c141.4 0 255.1-93.09 255.1-207.1S397.4 31.1 256 31.1zM317.8 282.3c-3.623 20.91-19.47 34.64-41.83 39.43V332c0 11.03-8.946 20-19.99 20S236 343 236 332v-10.77c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5C196.3 308.5 190.8 297.1 194.5 286.7c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031c13.72 2.125 28.94 .1875 30.31-7.625c.875-5.094 1.359-7.906-27.92-16.28L244.7 257.5c-17.33-5.094-57.92-17-50.52-59.84C197.8 176.8 213.6 162.8 236 157.1V148c0-11.03 8.961-20 20.01-20s19.99 8.969 19.99 20v10.63c5.453 1.195 11.34 2.789 18.56 5.273c10.44 3.625 15.95 15.03 12.33 25.47c-3.625 10.41-15.06 15.94-25.45 12.34c-5.859-2.031-12-4-17.59-4.844C250.2 194.8 234.1 196.7 233.6 204.5C232.8 208.1 232.3 212.2 255.1 219.2l5.547 1.594C283.8 227.1 325.3 239 317.8 282.3z"],
                "gauge-high": [512, 512, [62461, "tachometer-alt", "tachometer-alt-fast"], "f625", "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"],
                "money-check-dollar": [576, 512, ["money-check-alt"], "f53d", "M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM272 192C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224H496C504.8 224 512 216.8 512 208C512 199.2 504.8 192 496 192H272zM272 320H496C504.8 320 512 312.8 512 304C512 295.2 504.8 288 496 288H272C263.2 288 256 295.2 256 304C256 312.8 263.2 320 272 320zM164.1 160C164.1 148.9 155.1 139.9 143.1 139.9C132.9 139.9 123.9 148.9 123.9 160V166C118.3 167.2 112.1 168.9 108 171.1C93.06 177.9 80.07 190.5 76.91 208.8C75.14 219 76.08 228.9 80.32 237.8C84.47 246.6 91 252.8 97.63 257.3C109.2 265.2 124.5 269.8 136.2 273.3L138.4 273.9C152.4 278.2 161.8 281.3 167.7 285.6C170.2 287.4 171.1 288.8 171.4 289.7C171.8 290.5 172.4 292.3 171.7 296.3C171.1 299.8 169.2 302.8 163.7 305.1C157.6 307.7 147.7 309 134.9 307C128.9 306 118.2 302.4 108.7 299.2C106.5 298.4 104.3 297.7 102.3 297C91.84 293.5 80.51 299.2 77.02 309.7C73.53 320.2 79.2 331.5 89.68 334.1C90.89 335.4 92.39 335.9 94.11 336.5C101.1 339.2 114.4 343.4 123.9 345.6V352C123.9 363.1 132.9 372.1 143.1 372.1C155.1 372.1 164.1 363.1 164.1 352V346.5C169.4 345.5 174.6 343.1 179.4 341.9C195.2 335.2 207.8 322.2 211.1 303.2C212.9 292.8 212.1 282.8 208.1 273.7C204.2 264.7 197.9 258.1 191.2 253.3C179.1 244.4 162.9 239.6 150.8 235.9L149.1 235.7C135.8 231.4 126.2 228.4 120.1 224.2C117.5 222.4 116.7 221.2 116.5 220.7C116.3 220.3 115.7 219.1 116.3 215.7C116.7 213.7 118.2 210.4 124.5 207.6C130.1 204.7 140.9 203.1 153.1 204.1C157.5 205.7 171 208.3 174.9 209.3C185.5 212.2 196.5 205.8 199.3 195.1C202.2 184.5 195.8 173.5 185.1 170.7C180.7 169.5 170.7 167.5 164.1 166.3L164.1 160z"],
                "people-group": [640, 512, [], "e533", "M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"],
                "magnifying-glass": [512, 512, [128269, "search"], "f002", "M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"],
                "sack-dollar": [512, 512, [128176], "f81d", "M320 96H192L144.6 24.88C137.5 14.24 145.1 0 157.9 0H354.1C366.9 0 374.5 14.24 367.4 24.88L320 96zM192 128H320C323.8 130.5 328.1 133.3 332.1 136.4C389.7 172.7 512 250.9 512 416C512 469 469 512 416 512H96C42.98 512 0 469 0 416C0 250.9 122.3 172.7 179 136.4C183.9 133.3 188.2 130.5 192 128V128zM276.1 224C276.1 212.9 267.1 203.9 255.1 203.9C244.9 203.9 235.9 212.9 235.9 224V230C230.3 231.2 224.1 232.9 220 235.1C205.1 241.9 192.1 254.5 188.9 272.8C187.1 283 188.1 292.9 192.3 301.8C196.5 310.6 203 316.8 209.6 321.3C221.2 329.2 236.5 333.8 248.2 337.3L250.4 337.9C264.4 342.2 273.8 345.3 279.7 349.6C282.2 351.4 283.1 352.8 283.4 353.7C283.8 354.5 284.4 356.3 283.7 360.3C283.1 363.8 281.2 366.8 275.7 369.1C269.6 371.7 259.7 373 246.9 371C240.9 370 230.2 366.4 220.7 363.2C218.5 362.4 216.3 361.7 214.3 361C203.8 357.5 192.5 363.2 189 373.7C185.5 384.2 191.2 395.5 201.7 398.1C202.9 399.4 204.4 399.9 206.1 400.5C213.1 403.2 226.4 407.4 235.9 409.6V416C235.9 427.1 244.9 436.1 255.1 436.1C267.1 436.1 276.1 427.1 276.1 416V410.5C281.4 409.5 286.6 407.1 291.4 405.9C307.2 399.2 319.8 386.2 323.1 367.2C324.9 356.8 324.1 346.8 320.1 337.7C316.2 328.7 309.9 322.1 303.2 317.3C291.1 308.4 274.9 303.6 262.8 299.9L261.1 299.7C247.8 295.4 238.2 292.4 232.1 288.2C229.5 286.4 228.7 285.2 228.5 284.7C228.3 284.3 227.7 283.1 228.3 279.7C228.7 277.7 230.2 274.4 236.5 271.6C242.1 268.7 252.9 267.1 265.1 268.1C269.5 269.7 283 272.3 286.9 273.3C297.5 276.2 308.5 269.8 311.3 259.1C314.2 248.5 307.8 237.5 297.1 234.7C292.7 233.5 282.7 231.5 276.1 230.3L276.1 224z"],
                "list-check": [512, 512, ["tasks"], "f0ae", "M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z"],    
                 "crosshairs": [512, 512, [], "f05b", "M224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256zM256 0C273.7 0 288 14.33 288 32V42.35C381.7 56.27 455.7 130.3 469.6 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H469.6C455.7 381.7 381.7 455.7 288 469.6V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V469.6C130.3 455.7 56.27 381.7 42.35 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H42.35C56.27 130.3 130.3 56.27 224 42.35V32C224 14.33 238.3 0 256 0V0zM224 404.6V384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384V404.6C346.3 392.1 392.1 346.3 404.6 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H404.6C392.1 165.7 346.3 119.9 288 107.4V128C288 145.7 273.7 160 256 160C238.3 160 224 145.7 224 128V107.4C165.7 119.9 119.9 165.7 107.4 224H128C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288H107.4C119.9 346.3 165.7 392.1 224 404.6z"]
            };

            hiddenDiv.innerHTML = hiddenDiv.innerHTML+'<svg class="iconPad child" id="trashCanDelete" style="float: right;" width="16" height="16" viewBox="0 0 '+icons["sack-dollar"][0]+' '+icons["sack-dollar"][1]+'"><path d="' + icons["sack-dollar"][4] + '"></path></svg>'
            var trashy = hiddenDiv.children[0]
            // var trashCanIcon = document.createElement("button")

            // trashCanIcon.style = "button"
            // trashCanIcon.innerText = "X"
            // trashCanIcon.classList.add("xButton")
            //trashy.classList.add('')

            hiddenDiv.innerHTML = hiddenDiv.innerHTML+'<svg class="iconPad child" id="pencilIconEdit" style="float: right;" width="16" height="16" viewBox="0 0 '+icons["sack-dollar"][0]+' '+icons["sack-dollar"][1]+'"><path d="' + icons["sack-dollar"][4] + '"></path></svg>'
            // trashCanIcon.classList.add("iconPad")
            // trashCanIcon.style.float = "right"
            trashy.addEventListener("click", () => {
                this.currentDelete = trashy.parentNode.parentNode.id
                var event = new Event("onDelete");
				this.dispatchEvent(event);
                
            })
            
            var pencilIcon = document.createElement("button")
            pencilIcon.style = "button"
            pencilIcon.innerText = "E"
            
            pencilIcon.classList.add("editButton")

            pencilIcon.classList.add("iconPad")
            pencilIcon.style.float = "right"
            
            pencilIcon.addEventListener("click", ()=>{
                //console.log("EDITTTTT")
                let editArr = [pencilIcon.parentNode.parentNode.id,pencilIcon.parentNode.parentNode.getAttribute("description"),pencilIcon.parentNode.parentNode.getAttribute("link")]
                this.currentEdit = editArr
                var event = new Event("onEdit");
			    this.dispatchEvent(event);
            })
            

            hiddenDiv.classList.add("hoverItems")

            //hiddenDiv.appendChild(trashCanIcon)
            hiddenDiv.appendChild(pencilIcon)
              
            parent.append(hiddenDiv)
            parent.querySelectorAll(".hoverItems").forEach(batch => {
                batch.style.display = "none"
            })
            parent.addEventListener('mouseover', () =>{
                if(this.editBool){
                parent.querySelectorAll(".hoverItems").forEach(batch => {
                    batch.style.display = ""
                })
                }
            })
            parent.addEventListener('mouseleave', () =>{
                if(this.editBool){
                parent.querySelectorAll(".hoverItems").forEach(batch => {
                    batch.style.display = "none"
                })
                }
            })
        }

        editActivate(){ //turn on 
            this.editBool = true
           
            this.shadowRoot.querySelectorAll(".mainHolder").forEach(item => { //turns off dragging on sidebarItem, should add cursor support?
                item.hidden=true;
            })

            this.shadowRoot.querySelectorAll(".container").forEach(item => { //turns off dragging on sidebarItem, should add cursor support?
                item.hidden=false;
            })
            this.shadowRoot.querySelectorAll(".sidebarItem").forEach(item => { //turns off dragging on sidebarItem, should add cursor support?
                item.draggable=true;
            })
        }
        editDeactivate(){ //turn off edit
            this.editBool = false;
           
            this.shadowRoot.querySelectorAll(".mainHolder").forEach(item => { //turns off dragging on sidebarItem, should add cursor support?
                item.hidden=false;
            })

            this.shadowRoot.querySelectorAll(".container").forEach(item => { //turns off dragging on sidebarItem, should add cursor support?
                item.hidden=true;
            })
            this.shadowRoot.querySelectorAll(".sidebarItem").forEach(item => { //turns on dragging for sidebarItem, should add cursor support?
                item.draggable=false;
            })
        }

        getDragAfterElement(container, y) {//handles which item is considered above and below when dragging,
        //y is the height of mouse, container is the items in question
            var draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

            return draggableElements.reduce((closest, child) => {
                var box = child.getBoundingClientRect()
                var offset = y - box.top - box.height / 2 //tries to sense middle of box
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child }
                } else {
                    return closest
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element
        }
        getParameters(item){
            return this.shadowRoot.getElementById(item).getAttribute("parameters")
        }
        setParameters(item, newVal){
            this.shadowRoot.getElementById(item).setAttribute("parameters", newVal)
        }

        getIcon(item){
            return this.shadowRoot.getElementById(item).getAttribute("icon")
        }
        setIcon(item, newVal){
            this.shadowRoot.getElementById(item).setAttribute("icon", newVal)
        }

        getModel(item){
            return this.shadowRoot.getElementById(item).getAttribute("model")
        }
        setModel(item, newVal){
            this.shadowRoot.getElementById(item).setAttribute("model", newVal)
        }

        getLink(item){
            return this.shadowRoot.getElementById(item).getAttribute("link")
        }
        setLink(item, newVal){
            this.shadowRoot.getElementById(item).setAttribute("link", newVal)
        }

        getTitle(item){
            return this.shadowRoot.getElementById(item).getAttribute("title")
        }
        setTitle(item, newVal){
            this.shadowRoot.getElementById(item).setAttribute("title", newVal)
        }

        getParent(item){
            return this.shadowRoot.getElementById(item).getAttribute("parent")
        }
        setParent(item, newVal){
            this.shadowRoot.getElementById(item).setAttribute("parent", newVal)
        }

        getLinkType(item){
            return this.shadowRoot.getElementById(item).getAttribute("linktype")
        }
        setLinkType(item, newVal){
            this.shadowRoot.getElementById(item).setAttribute("linktype", newVal)
        }

        getDescription(item){
            return this.shadowRoot.getElementById(item).getAttribute("description")
        }
        setDescription(item, newVal){
            this.shadowRoot.getElementById(item).setAttribute("description", newVal)
        }

        getApp(){
            return this._selectedApp
        }
        setApp(newApp){
            this._selectedApp = newApp
        }
	}
	customElements.define("com-cbeyondata-unifiedbar", Unifiedbar);
})();
