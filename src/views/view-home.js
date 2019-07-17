import { LitElement, html, css } from 'lit-element';

class ViewHome  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h2>Home</h2>
      </div>
      <p>Esto es el home!!!</p>
    `;
  }
}

customElements.define('view-home', ViewHome);