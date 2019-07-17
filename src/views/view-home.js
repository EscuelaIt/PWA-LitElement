import { LitElement, html, css } from 'lit-element';
import { miCSS } from '../css.js';

class ViewHome  extends LitElement {

  static get styles() {
    return [miCSS, css`
      :host {
        display: block;
      }
    `];
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