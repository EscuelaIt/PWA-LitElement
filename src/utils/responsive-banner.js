import { LitElement, html, css } from 'lit-element';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';

class ResponsiveBanner  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
      }
      img {
        margin-top: 10px;
        max-width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      displayBanner: { type: Boolean },
      typeBanner: { type: String }
    };
  }

  constructor() {
    super();
    this.displayBanner = false;
    installMediaQueryWatcher(`(min-width: 400px) and (max-width: 799px)`, (matches) => {
      if(matches) {
        this.typeBanner = 'medium';
      } else {
        this.typeBanner = '';
      }

    });
    installMediaQueryWatcher(`(min-width: 800px)`, (matches) => {
      if(matches) {
        this.typeBanner = 'large';
      }
    });
  }

  render() {
    return html`
      ${this.typeBanner == 'medium'
        ? html`<img src="/images/escuelait.png">`
        : ''
      }
      ${this.typeBanner == 'large'
        ? html`<img src="/images/banner-728x90.jpg">`
        : ''
      }
    `;
  }
}

customElements.define('responsive-banner', ResponsiveBanner);