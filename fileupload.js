let template = document.createElement("template");
template.innerHTML = /*html*/ `
  <input hidden id="fileUpload" type="file" />
`;
class FileUpload extends HTMLElement {
    constructor() {
        // Inititialize custom component
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Add event listeners
        this.shadowRoot.getElementById("fileUpload").onchange = (e) => this.handleChange(e);
        this.shadowRoot.getElementById("fileUpload").onclick = () => this.handleClick();

        this._fileContents = "";
    }
    fileContents() {
        return this._fileContents;
    }
    browseFiles() {
        this.shadowRoot.getElementById("fileUpload").click();
    }
    handleChange(e) {
        const file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (e) => {
            this._fileContents = e.target.result;
        }
        this.dispatch('onChange');
    }
    handleClick() {
        this.shadowRoot.getElementById("fileUpload").value = "";
        this.dispatch('onClick');
    }    
    dispatch(event, arg) {
        this.dispatchEvent(new CustomEvent(event, {
            detail: arg
        }));
    }
}
window.customElements.define('com-cbeyondata-fileupload', FileUpload);