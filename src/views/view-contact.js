import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewContact  extends PageViewElement {

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
        <h2>Contacto ${this.persona}</h2>
      </div>
      <p>Esto es el home!!!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci fuga, dolorem, deserunt nemo laborum exercitationem obcaecati eius beatae velit nam aut magni maxime perferendis voluptatum magnam repellendus sunt quam?</p>
    `;
  }
}

customElements.define('view-contact', ViewContact);