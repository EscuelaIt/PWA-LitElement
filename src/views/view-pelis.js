import { LitElement, html, css } from 'lit-element';
//import '../pelis/pelis-list-view';

import { store } from '../redux/store';
import { pelis } from '../redux/reducers/pelis-reducer';

store.addReducers({
  pelis 
});

class ViewPelis  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      section: { type: String },
    };
  }

  render() {
    return html`
      <nav>
        <a href="/pelis/list">Listado</a>
        <a href="/pelis/insert">Inserción</a>
      </nav>
      <dile-pages selected="${this.section}" attrForSelected="name">
        <pelis-list-view name="list" ?active="${this.section == 'list' }"></pelis-list-view>
        <pelis-edit-view name="edit" ?active="${this.section == 'edit' }"></pelis-edit-view>
        <pelis-insert-view name="insert" ?active="${this.section == 'insert' }"></pelis-insert-view>
      </dile-pages>   
    `;
  }
}

customElements.define('view-pelis', ViewPelis);