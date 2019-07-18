import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewHome  extends PageViewElement {

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
      <p>Esto es el home!!! y puedes <a href="/contact">contactar con nosotros</a> </p>
    `;
  }
}

customElements.define('view-home', ViewHome);