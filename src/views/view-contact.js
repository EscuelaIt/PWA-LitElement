import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';
import { viewCSS } from '../styles/stylesView';
import { updateMetadata } from '../redux/actions/app-actions';
import { store } from '../redux/store';

class ViewContact  extends PageViewElement {

  static get styles() {
    return [viewCSS];
  }

  static get properties() {
    return {
      persona: { type: String }
    };
  }

  render() {
    return html`
      <div>
        <h2>Contacto ${this.persona}</h2>
      </div>
      <p>Esto es el home!!!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci fuga, dolorem, deserunt nemo laborum exercitationem obcaecati eius beatae velit nam aut magni maxime perferendis voluptatum magnam repellendus sunt quam?</p>
    `;
  }

  changeMetadata() {
    store.dispatch(updateMetadata({
      title: 'Contacta con nosotros',
      description: 'Esto es info de contacto...',
      url: window.location.href,
      image: '/images/escuelait.png'
    }));
  }
}

customElements.define('view-contact', ViewContact);