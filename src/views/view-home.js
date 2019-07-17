import { LitElement, html, css } from 'lit-element';

class ViewHome  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  /**
    * Object describing property-related metadata used by Polymer features
    */
  static get properties() {
    return {
      texto: { type: String }
    };
  }

  render() {
    return html`
      <div>
        <h2>Home</h2>
      </div>
      <p>Esto es el home!!!</p>
      <input type="text" value="${this.texto}">
    `;
  }
}

customElements.define('view-home', ViewHome);