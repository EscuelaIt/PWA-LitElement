import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';
import { store } from '../redux/store';
import { navigateDelay } from '../redux/actions/app-actions';

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
      
      <p>
        <a href="/blog/Bienvenidos">Ir la nota de bienvenida </a>
      </p>

      <button @click="${this.delayPageChange}">Ir al mapa dentro de 3 segundos</button>
    `;
  }

  delayPageChange() {
    store.dispatch(navigateDelay('map'));
  }
}

customElements.define('view-home', ViewHome);