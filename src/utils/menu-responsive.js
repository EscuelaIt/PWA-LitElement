import { LitElement, html, css } from 'lit-element';
import 'dile-hamburger/dile-hamburger';
import 'dile-app-drawer/dile-app-drawer';

class MenuResponsive  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: flex;
        align-items: center;
        --dile-hamburger-color: #fff;
        --eit-icon-color: #fff;
        --eit-icon-size: 28px;
        --dile-app-drawer-background-color: #888;
      }
      div.menuDesk {
        display: none;
      }
      dile-hamburger {
        position: relative;
        z-index: 99999;
      }
      @media(min-width: 800px){
        div.menuDesk {
          display: block;
        }
        div.menuMobile {
          display: none;
        }
      }
    `;
  }

  static get properties() {
    return {
      opened: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.opened = false;
  }

  render() {
    return html`
      <div class="menuDesk">
        <slot name="menudesk"></slot>
      </div>
      <div class="menuMobile">
        <dile-hamburger ?active="${this.opened}" @click="${this.toggle}"></dile-hamburger>
      </div>
      <dile-app-drawer ?opened="${this.opened}" @dile-app-drawer-click-outside="${this.onClickOutside}">
        <slot name="menumobile"></slot>
      </dile-app-drawer>
    `;
  }

  toggle() {
    this.opened = !this.opened;
  }

  onClickOutside() {
    console.log('clickoutside');
    this.opened = false;
  }
}

customElements.define('menu-responsive', MenuResponsive);