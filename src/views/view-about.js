import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewAbout  extends PageViewElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <h2>Sobre</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nemo at, non libero est enim eius deleniti esse, laudantium rem tenetur aperiam architecto. Aliquam dolore quia quo similique, tempora commodi.</p>
              <img src="https://picsum.photos/300/200" alt="imagen">
							<p>Nostrum, praesentium eos. Consequatur, facere? Inventore voluptatum harum quis at et? Dolore, aperiam commodi optio maiores libero id dignissimos exercitationem vitae modi, ipsum ab error officia aliquam minus nostrum ullam!</p>
							<p>Voluptatum dignissimos veniam culpa excepturi nostrum nam et hic possimus deleniti dolore cupiditate velit minus odio perferendis suscipit ut numquam atque accusamus omnis, odit dolor sed consequatur magnam! Quis, vel.</p>
							<p>Aut et numquam odit, quae qui omnis rem consequuntur quisquam voluptatum enim saepe nostrum! In repellendus a officia earum! Facere iure debitis voluptas quaerat optio sunt eum, aliquam et? Culpa!</p>
							<p>Repellendus rerum fuga quia reprehenderit dicta deserunt dolores quod illum. Distinctio dolorem blanditiis quibusdam nobis doloremque, quis eum optio vitae quia animi, assumenda velit! Tenetur alias totam suscipit distinctio fugiat?</p>
    `;
  }
}

customElements.define('view-about', ViewAbout);