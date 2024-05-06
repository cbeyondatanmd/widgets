(function () {
    let template = document.createElement("template");
    template.innerHTML = `
<head>
<script>

</script>
<style>
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
div {

	background-color:rgb(41, 49, 58);	   


}
.childNav {

	background-color:rgb(31, 39, 48);	   
    width:100%;

}

.rotated {
    transform: rotate(90deg); /* Equal to rotateZ(45deg) */
    transition-duration:0.2s;
  
  }

  .unrotated {
    transform: rotate(0deg); /* Equal to rotateZ(45deg) */
    transition-duration:0.2s;
  
  }

td {
padding:0pt 5pt;
}

.cellSelected {
    background-color:rgb(242, 98, 28);
}

.anchorSelected {
	background-color:rgb(52, 75, 95);
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
    width:92%;

}

a:hover {
	background-color:rgb(47, 62, 83);
}
td:active {
	position:relative;
	top:1px;
}

</style>
</head>
<body>
<div id="candybar" style="overflow-y:auto; overflow-x: hidden;"/>
<div id="messaging"/>
</body>
 `;
    class CandyBar extends HTMLElement {
        constructor() {
            // Inititialize custom component
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            var _selectedItem;
            var _oldSelectedItem = "";
            //this._CSRFAPI = this.getCSRFTokenAPI();
            this._CSRFUser = this.getCSRFTokenUser();
            var _app = "";
            var _defaultScreen = "";
        }

        onCustomWidgetResize(width, height) {
            console.log(width);
            console.log(height);
            this.shadowRoot.getElementById("candybar").style.height = height + "px";
        }

        setSelected(newSelected) {
            var cell;
            var anchor;

            if (this._oldSelectedItem) {
                cell = this.shadowRoot.getElementById(this._oldSelectedItem);
                anchor = this.shadowRoot.getElementById(this._oldSelectedItem + "_ANCHOR");

                cell.classList.remove("cellSelected");
                anchor.classList.remove("anchorSelected");
            }

            this._oldSelectedItem = newSelected;
            this._selectedItem = newSelected;

            cell = this.shadowRoot.getElementById(newSelected);
            anchor = this.shadowRoot.getElementById(newSelected + "_ANCHOR");

            cell.classList.add("cellSelected");
            anchor.classList.add("anchorSelected");

            if (cell.parentNode.getAttribute("parentid")) {
                var parentID = cell.parentNode.getAttribute("parentid").toString();
                var childRows = this.shadowRoot.querySelectorAll('[parentid="' + parentID + '"]');

                for (let i = 0; i < childRows.length; i++) {
                    childRows[i].hidden = false;
                }

                var parentCaratNode = this.shadowRoot.getElementById(parentID + '_CARROT');
                if (parentCaratNode) {
                    // if (!parentCaratNode.classList.contains("rotated"))
                    // {
                    parentCaratNode.classList.remove("unrotated");
                    parentCaratNode.classList.add("rotated");
                    // }
                }
            }
        }

        getSelected() {
            return this._items[this._selectedItem];
        }

        getParameters() {
            //return {"mode":"embed","page":"1"};
            return this._parameters[this._selectedItem];
        }

        getClientHeight() {
            var rtn = 0;
            for (let i = 0; i < this.shadowRoot.getRootNode().children.length; i++) {
                rtn += this.shadowRoot.getRootNode().children[i].clientHeight;
            }
            return rtn;
        }

        removeAll() {
            this._items = {};
            this._oldSelectedItem = undefined;
            const div = this.shadowRoot.getElementById("candybar");
            while (div.firstChild) {
                div.removeChild(div.lastChild);
            }
        }

        removeItem(id) {
            this.shadowRoot.getElementById(id).remove();
            delete this._items[id];
        }

        getAllItems() {
            return this._items;
        }

        itemExists(id) {
            return (this._items[id] !== undefined);
        }

        addSection(id, caption, textColor) {
            var divID = id + "_SECTION"
            var tableID = id + "_TABLE"

            var div = this.shadowRoot.getElementById("candybar");
            var section = document.createElement("p");

            section.textContent = caption;
            section.id = divID;

            if (textColor !== "") {
                section.style["color"] = textColor;
            }
            div.appendChild(section);

            var table = document.createElement("table");
            table.id = tableID;
            div.appendChild(table);
        }

        addParent(id, caption, icon, viewBox, section) {

            var tableID = section + "_TABLE"
            var anchorID = id + "_ANCHOR"
            var carrotID = id + "_CARROT"

            var table = this.shadowRoot.getElementById(tableID);

            var row = table.insertRow(-1);
            var cell = row.insertCell(0);
            cell.id = id;

            var a = document.createElement("a");
            a.id = anchorID;
            a.href = "";
            a.setAttribute("onclick", "return false;");
            cell.appendChild(a);

            var svg = document.createElement("svg");
            svg.classList.add("child");
            svg.setAttribute("width", "16");
            svg.setAttribute("height", "16");
            svg.setAttribute("viewBox", viewBox);
            a.appendChild(svg);

            var path = document.createElement("path");
            path.setAttribute("d", icon);
            svg.appendChild(path);

            var span = document.createElement("span");
            span.classList.add("childtext");
            span.style["white-space"] = "pre"
            span.setAttribute("parentid", parent);
            span.textContent = "   " + caption + "  ";
            a.appendChild(span);

            svg = document.createElement("svg");
            svg.id = carrotID;
            svg.classList.add("unrotated");
            svg.style["float"] = "right";
            svg.setAttribute("width", "16");
            svg.setAttribute("height", "16");
            svg.setAttribute("viewBox", "0 0 256 512");
            a.appendChild(svg);

            path = document.createElement("path");
            path.setAttribute("d", "M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z");
            svg.appendChild(path);

            cell.innerHTML = cell.innerHTML;

            cell.addEventListener("click", () => {
                this._selectedItem = id;
                var childRows = this.shadowRoot.querySelectorAll('[parentid="' + id + '"]');

                for (let i = 0; i < childRows.length; i++) {
                    childRows[i].hidden = !childRows[i].hidden;
                }

                var parentCaratNode = this.shadowRoot.getElementById(carrotID);
                if (parentCaratNode) {
                    parentCaratNode.classList.toggle("rotated");
                    parentCaratNode.classList.toggle("unrotated");
                }
                this.dispatchEvent(new Event("onClick"));
            });
        }

        addChild(id, caption, parent, section, title, link, linktype) {

            var tableID = section + "_TABLE"
            var anchorID = id + "_ANCHOR"

            var rowIndex = this.shadowRoot.getElementById(parent).parentNode.rowIndex;

            var childRows = this.shadowRoot.querySelectorAll('[parentid="' + parent + '"]');
            for (let i = 0; i < childRows.length; i++) {
                if (rowIndex < childRows[i].rowIndex) {
                    rowIndex = childRows[i].rowIndex;
                }
            }

            rowIndex++

            var table = this.shadowRoot.getElementById(tableID);
            var row = table.insertRow(rowIndex);
            row.setAttribute("parentid", parent);
            row.classList.add("childNav");
            row.hidden = true;

            var cell = row.insertCell(0);
            cell.id = id;
            cell.classList.add("childNav");

            var a = document.createElement("a");
            a.id = anchorID;
            a.href = "";
            a.style["white-space"] = "pre"
            a.textContent = "            " + caption + "  ";
            a.setAttribute("onclick", "return false;");
            cell.appendChild(a);
            this._items[id] = { id: id, description: caption, title: title, link: link, linktype: linktype }
            this.dispatchSelect(cell, id);
        }

        addAdult(id, caption, icon, viewBox, section, title, link, linktype) {

            var tableID = section + "_TABLE"
            var anchorID = id + "_ANCHOR"

            var table = this.shadowRoot.getElementById(tableID);

            var row = table.insertRow(-1);

            var cell = row.insertCell(0);
            cell.id = id;

            var a = document.createElement("a");
            a.id = anchorID;
            a.href = "";
            a.setAttribute("onclick", "return false;");
            cell.appendChild(a);

            var svg = document.createElement("svg");
            svg.classList.add("child");
            svg.setAttribute("width", "16");
            svg.setAttribute("height", "16");
            svg.setAttribute("viewBox", viewBox);
            a.appendChild(svg);

            var path = document.createElement("path");
            path.setAttribute("d", icon);
            svg.appendChild(path);

            var span = document.createElement("span");
            span.classList.add("childtext");
            span.style["white-space"] = "pre"
            span.setAttribute("parentid", parent);
            span.textContent = "   " + caption + "  ";
            a.appendChild(span);

            cell.innerHTML = cell.innerHTML;

            this._items[id] = { id: id, description: caption, title: title, link: link, linktype: linktype }
            this.dispatchSelect(cell, id);
        }

        async getUserDefault(model, userId) {
            var rtn = "";
            var data = {
                "action": "query",
                "data": {
                    "dimensionId": "Settings",
                    "filter": [
                        {
                            "attributeId": "USER",
                            "regrex": "^" + userId + "$"
                        }
                    ],
                    "paging": {
                        "fromIndex": 0,
                        "pageSize": 200
                    },
                    "cubeId": model,
                    "needPrevId": true,
                    "orderby": [
                        {
                            "attributeId": "USER",
                            "order": "asc"
                        }
                    ]
                }
            }

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.open("POST", "/sap/fpa/services/rest/fpa/member?tenant=A", false);
            xhr.setRequestHeader("X-CSRF-Token", this._CSRFUser);

            xhr.send(JSON.stringify(data));

            var response = JSON.parse(xhr.responseText);

            var header = response["Data"]["header"];
            header = header.entries();
            header = Object.fromEntries(header);
            header = Object.entries(header);
            header = header.map(a => a.reverse());
            header = Object.fromEntries(header);

            console.log(header);

            var members = response["Data"]["member"];

            for (var member in members) {
                this._app = members[member][header["APP"]];
                this._defaultScreen = members[member][header["DEFAULT_SCREEN"]];
                break;
            }

            return rtn;    

        }

        getApp()
        {
            return this._app;
        }

        getDefaultScreen()
        {
            return this._defaultScreen;
        }

        quickLoad(model, hierarchy, application) {
            var data = {
                "action": "query",
                "data": {
                    "dimensionId": "Items",
                    "filter": [
                        {
                            "attributeId": hierarchy,
                            "regrex": ".*"
                        },
                        {
                            "attributeId": "READ"
                        }
                    ],
                    "cubeId": model,
                    "needPrevId": true,
                    "orderby": [
                        {
                            "attributeId": hierarchy,
                            "order": "asc"
                        }
                    ]
                }
            }

            this.lookupParameters(model);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", e => {
                if (e.currentTarget.readyState === 4) {
                    var response = JSON.parse(e.currentTarget.responseText);

                    var header = response["Data"]["header"];
                    header = header.entries();
                    header = Object.fromEntries(header);
                    header = Object.entries(header);
                    header = header.map(a => a.reverse());
                    header = Object.fromEntries(header);

                    var members = response["Data"]["member"];
                    var sections = members.filter(item => { return item[header[hierarchy]] === application });

                    this._items = {};

                    for (var section in sections) {
                        var sectionID = sections[section][header["ID"]];
                        var sectionCaption = sections[section][header["_DESCRIPTION"]];
                        var color = sections[section][header["COLOR"]];
                        this.addSection(sectionID, sectionCaption, color);

                        var adults = members.filter(item => { return item[header[hierarchy]] === sections[section][header["ID"]] });

                        for (var adult in adults) {
                            var adultID = adults[adult][header["ID"]];
                            var adultCaption = adults[adult][header["_DESCRIPTION"]];
                            var adultTitle = adults[adult][header["Title"]];
                            var adultIcon = adults[adult][header["Icon"]];
                            var adultViewBox = adults[adult][header["ViewBox"]];
                            var adultLink = adults[adult][header["Link"]];
                            var adultLinkType = adults[adult][header["LinkType"]];

                            if (adultLinkType === undefined) {
                                adultLinkType = "";
                            }

                            if (adultLink.trim().length === 0) {
                                this.addParent(adultID, adultCaption, adultIcon, adultViewBox, sectionID);

                                var children = members.filter(item => { return item[header[hierarchy]] === adults[adult][header["ID"]] });

                                for (var child in children) {
                                    var childID = children[child][header["ID"]];
                                    var childCaption = children[child][header["_DESCRIPTION"]];
                                    var childTitle = children[child][header["Title"]];
                                    var childLink = children[child][header["Link"]];
                                    var childLinkType = children[child][header["LinkType"]];

                                    this.addChild(childID, childCaption, adultID, sectionID, childTitle, childLink, childLinkType);
                                }
                            }
                            else {
                                this.addAdult(adultID, adultCaption, adultIcon, adultViewBox, sectionID, adultTitle, adultLink, adultLinkType);
                            }
                        }
                    }

                }
            });

            xhr.open("POST", "/sap/fpa/services/rest/fpa/member?tenant=A");
            xhr.setRequestHeader("X-CSRF-Token", this._CSRFUser);

            xhr.send(JSON.stringify(data));
        }

        lookupParameters(model) {
            var data = {
                "action": "query",
                "data": {
                    "dimensionId": "Parameters",
                    "filter": [],
                    "cubeId": model,
                    "needPrevId": true,
                    "orderby": []
                }
            }

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", e => {
                if (e.currentTarget.readyState === 4) {
                    var response = JSON.parse(e.currentTarget.responseText);

                    var header = response["Data"]["header"];
                    header = header.entries();
                    header = Object.fromEntries(header);
                    header = Object.entries(header);
                    header = header.map(a => a.reverse());
                    header = Object.fromEntries(header);

                    var members = response["Data"]["member"];

                    this._parameters = {};

                    for (var member in members) {
                        if (members[member][header["Item"]]) {
                            if (this._parameters[members[member][header["Item"]]] === undefined) {
                                this._parameters[members[member][header["Item"]]] = {};
                            }
                            this._parameters[members[member][header["Item"]]][members[member][header["Name"]]] = members[member][header["Value"]];
                        }
                    }

                }
            });

            xhr.open("POST", "/sap/fpa/services/rest/fpa/member?tenant=A");
            xhr.setRequestHeader("X-CSRF-Token", this._CSRFUser);

            xhr.send(JSON.stringify(data));
        }

        getCSRFTokenAPI() {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            //     xhr.open("GET", window.origin + "/sap/fpa/services/rest/epm/session?action=logon",false);
            xhr.open("GET", window.origin + "/api/v1/csrf", false);
            xhr.setRequestHeader("X-CSRF-Token", "Fetch");
            xhr.send();
            return xhr.getResponseHeader("x-csrf-token");
        }

        getCSRFTokenUser() {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.open("GET", window.origin + "/sap/fpa/services/rest/epm/session?action=logon", false);
            //   xhr.open("GET", window.origin + "/api/v1/csrf",false);
            xhr.setRequestHeader("X-CSRF-Token", "Fetch");
            xhr.send();
            return xhr.getResponseHeader("x-csrf-token");
        }

        dispatchSelect(cell, id) {
            cell.addEventListener("click", () => {
                this.setSelected(id);
                this.dispatchEvent(new Event("onSelect"));
                this.dispatchEvent(new Event("onClick"));
            }
            );
        }
    }
    window.customElements.define('com-cbeyondata-candybar', CandyBar);
})();