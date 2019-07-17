import { LitElement, html, css } from 'lit-element';

class ViewContact  extends LitElement {

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
        <h2>Contacto</h2>
      </div>
      <p>Esto es el home!!!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci fuga, dolorem, deserunt nemo laborum exercitationem obcaecati eius beatae velit nam aut magni maxime perferendis voluptatum magnam repellendus sunt quam?</p>
    `;
  }
}

customElements.define('view-contact', ViewContact);