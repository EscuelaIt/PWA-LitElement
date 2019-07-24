import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class View404  extends PageViewElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      persona: { type: String }
    };
  }

  render() {
    return html`
      <div>
        <h2>Página no encontrada</h2>
      </div>
      <p>Esto es un error 404</p>
    `;
  }
}

customElements.define('view-404', View404);