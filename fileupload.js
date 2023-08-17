let template = document.createElement("template");
template.innerHTML = /*html*/ `
  <style>
      :host {
        font-size: 13px;
        font-family: arial;
      }
      article {
          display: flex;
          align-items: center;
      }
      label {
        background-color: rgb(239, 239, 239);
        border: 1px solid rgb(118, 118, 118);
        padding: 2px 6px 2px 6px;
        border-radius: 2px;
        margin-right: 5px;
      }
      button {
          border:0;
          background: transparent;
          cursor: pointer;
      }
      button::before {
          content: '\\2716';
      }

.table {
    --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: #212529;
    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --bs-table-active-color: #212529;
    --bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --bs-table-hover-color: #212529;
    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-color: #dee2e6
}

.table>:not(caption)>*>* {
    padding: .5rem .5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg)
}

.table>tbody {
    vertical-align: inherit
}

.table>thead {
    vertical-align: bottom
}

.table>:not(:first-child) {
    border-top: 2px solid currentColor
}
.table-bordered>:not(caption)>* {
    border-width: 1px 0
}

.table-bordered>:not(caption)>*>* {
    border-width: 0 1px
}      
  </style>
  <article>
    <label part="upload-button" for="fileUpload">Upload</label>
    <section hidden>
      <span></span><button></button>
    </section>
  </article>
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
        this.select('input').onchange = (e) => this.handleChange(e);
        this.select('button').onclick = () => this.handleRemove();

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
        this.select('section').style.display = "block";
        this.select('span').innerText = file.name;
        this.dispatch('onChange');
    }
    handleRemove() {
        const el = this.select('input');
        const file = el.files[0];
        el.value = "";
        this.select('section').style.display = "none";
        this.dispatch('change', file);
    }
    static get observedAttributes() {
        return ['upload-label'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'upload-label') {
            if (newValue && newValue !== '') {
                this.select('label').innerText = newValue;
            }
        }
    }
    dispatch(event, arg) {
        this.dispatchEvent(new CustomEvent(event, {
            detail: arg
        }));
    }
    get select() {
        return this.shadowRoot.querySelector.bind(this.shadowRoot);
    }
}
window.customElements.define('com-cbeyondata-fileupload', FileUpload);
