import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from '../views/page-view-element';

import { getPeliId, resetPeliId, peliNotFound, peliEdit } from '../redux/actions/pelis-actions';

import { store } from '../redux/store';
import { connect } from 'pwa-helpers';

import './peli-form';
import 'dile-rounded-button';

/**
 * Conectado al store
 * - app.pageParameter EditID (routin: es el identificador de la peli que se quiere editar)
 * - peliId (los datos de la peli que se tiene que editar)
 * - pelis.peliIdNotFound (Cuando no ha encontrado una peli de un identificador)
 * Responsable de
 * - Cuando gana el foco o cambian la película, iniciar proceso para recuperar sus datos
 * - Advertir si una película no se encuentra
 * - Mostrar el formulario de edición para la película encontrada
 * - Lanzar la acción de edición al enviar el formulario de la película
 */

class PelisEditView  extends connect(store)(PageViewElement) {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      h2 {
        margin-bottom: 5px;
        font-weight: 300;
      }
    `;
  }

  static get properties() {
    return {
      peli: { type: Object },
      peliIdNotFound: { type: Boolean }, 
      editId: {type: String },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h2>Editando</h2>
      ${this.peli
        ? this.peliFormTemplate
        : html`<p>Loading...</p>`
      }
    `;
  }

  get peliFormTemplate() {
    return html`
      <peli-form .peli="${this.peli}" @changed="${this.peliFormEdited}"></peli-form>
      <dile-rounded-button @click="${this.doEdit}">Editar</dile-rounded-button>
      <a href="/pelis/list"><dile-rounded-button>Cancelar</dile-rounded-button></a>
    `
  }

  stateChanged(state) {
    this.editId = state.app.pageParameter;
    this.peli = state.pelis.peliId;
    this.peliIdNotFound = state.pelis.peliIdNotFound;
  }

  updated(changedProperties) {
    if(changedProperties.has('editId') || changedProperties.has('active')) {
      store.dispatch(resetPeliId());
      if(!this.editId) {
        store.dispatch(peliNotFound(true));
      } else {
        store.dispatch(getPeliId(this.editId));
      }
    }
  }

  doEdit() {
    store.dispatch(peliEdit(this.peli));
  }
}

customElements.define('pelis-edit-view', PelisEditView);