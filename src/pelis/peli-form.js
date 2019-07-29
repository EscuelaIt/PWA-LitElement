import { LitElement, html, css } from 'lit-element';
import 'dile-input';

class PeliForm  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      peli: { type: Object }
    };
  }

  render() {
    return html`
      <div class="form">
        <dile-input name="nombre" value="${this.peli.nombre}" @input="${this.inputChanged}" label="Nombre"></dile-input>
        <dile-input name="director" value="${this.peli.director}" @input="${this.inputChanged}" label="Director"></dile-input>
      </div>
    `;
  }

  inputChanged(e) {
    console.log(e.target.name, e.target.value);
    this.peli[e.target.name] = e.target.value;
    this.dispatchEvent(new CustomEvent('changed', {
      bubbles: true,
      composed: true,
      detail: this.peli
    }));
  }
}

customElements.define('peli-form', PeliForm);