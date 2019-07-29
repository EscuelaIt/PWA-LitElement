import { LitElement, html, css } from 'lit-element';
import { icons } from './icons';

class EitIcon  extends LitElement {

  static get styles() {
    return css`
      :host[hidden] { display: none;}
      :host { display: inline-block; line-height: 0}
      path {
        fill: var(--eit-icon-color, #888);
        transition: all 0.3s ease-in;
      }
      path[fill="none"] {
        fill: transparent;
      }
      svg {
        width: var(--eit-icon-size, 24px);
        height: var(--eit-icon-size, 24px);
        line-height: 24px;
      }
      div { display: flex;}
    `;
  }

  static get properties() {
    return {
      icon: { type: String }
    };
  }

  constructor() {
    super();
    this.icon = 'done';
  }

  render() {
    return icons[this.icon];
  }
}

customElements.define('eit-icon', EitIcon);
