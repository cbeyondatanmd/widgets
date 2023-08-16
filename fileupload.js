const template = document.createElement('template');
template.innerHTML = /*html*/`
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
  </style>
  <article>
    <label part="upload-button" for="fileUpload">Upload</label>
    <section hidden>
      <span></span><button></button>
    </section>
  </article>
  <input hidden id="fileUpload" type="file" />
  <table class="table table-bordered table-striped" id="display_csv_data"></table>
`;
class FileUpload extends HTMLElement {
  constructor() {
    // Inititialize custom component
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

	  
    // Add event listeners
    this.select('input').onchange = (e) => this.handleChange(e);
    this.select('button').onclick = () => this.handleRemove();
    this._props = {};
    var _fileContents = "";    
  }
      fileToTable(file)
      {
            var reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = function(e) {
            var s = e.target.result;
              this._fileContents = s;
            s=s.replaceAll("\r\n","</td><tr><td>");
            s=s.replaceAll(",","</td><td>");
                s= "<tr><td>"+s+"</td></tr>";
                var table=document.getElementsByTagName('com-cbeyondata-fileupload')[0].shadowRoot.getElementById('display_csv_data');
                table.innerHTML=s;
          // console.log(s)

      }
      }
		fileContents() {
      return this._fileContents;
		}  
  handleChange(e) {
      const file = e.target.files[0];
      this.fileToTable(file);
      this.select('section').style.display = "block";
      this.select('span').innerText = file.name;
      //this.dispatch('change', file);
    this.dispatch('onClick');
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
    this.dispatchEvent(new CustomEvent(event, {detail: arg}));
  }
  get select() {
    return this.shadowRoot.querySelector.bind(this.shadowRoot);
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
window.customElements.define('com-cbeyondata-fileupload', FileUpload);
