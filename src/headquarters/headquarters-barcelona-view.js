import { html, css } from 'lit-element';

import { PageViewElement } from '../views/page-view-element';


class HeadquartersBarcelonaView  extends PageViewElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <h2>Barcelona</h2>
      <p>Esta es la bonita sede de Barcelona</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium, mollitia nam repudiandae reiciendis omnis nihil ea sapiente suscipit provident voluptas deleniti blanditiis, obcaecati corporis optio fuga minus neque vel.</p>
    `;
  }
}

customElements.define('headquarters-barcelona-view', HeadquartersBarcelonaView);