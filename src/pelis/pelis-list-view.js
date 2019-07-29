import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from '../views/page-view-element';
import 'dile-rounded-button/dile-rounded-button';
import './peli-item';

import { connect } from 'pwa-helpers';
import { store } from '../redux/store';

import { getPelis } from '../redux/actions/pelis-actions';

/**
 * Conectado al store: 
 * - pelis (array de películas) 
 * Responsable de:
 * - Al iniciarse recupera la lista de películas
 * - Muestra la lista de las películas
 */

class PelisListView  extends connect(store)(PageViewElement) {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  firstUpdated() {
    store.dispatch(getPelis());
  }

  static get properties() {
    return {
      pelis: { type: Array },
    };
  }

  constructor() {
    super();
    this.pelis = [];
  }

  render() {
    return html`
      <h2>Pelis</h2>
      <a href="/pelis/insert"><dile-rounded-button>Insertar</dile-rounded-button></a>
      ${ this.pelis.map( item => html`<peli-item .peli=${item}></peli-item>`)}
    `;
  }

  stateChanged(state) {
    this.pelis = state.pelis.pelis;
  }
}

customElements.define('pelis-list-view', PelisListView);