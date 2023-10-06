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

class BASDB extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._props = {};

    }

    onCustomWidgetBeforeUpdate(changedProperties) {
        this._props = { ...this._props, ...changedProperties };
    }

    onCustomWidgetAfterUpdate(changedProperties) {
    if ("db" in changedProperties) {
        //this._updateData(changedProperties.myDataBinding);
        console.log(this.myDataBinding.data);
    }
    }
}

customElements.define('com-cbeyondata-basdb', BASDB);
})();