import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

import { connect } from 'pwa-helpers';
import { store } from '../redux/store';

import 'dile-pages/dile-pages';
import { DileSmoothScrollMixin } from 'dile-smooth-scroll/DileSmoothScrollMixin';


// import '../headquarters/headquarters-barcelona-view';
// import '../headquarters/headquarters-madrid-view';

class ViewHeadquarters  extends connect(store)(DileSmoothScrollMixin(PageViewElement)) {
  static get properties() {
    return {
      section: { type: Array },

    };
  }

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
        <h2>Sedes</h2>
        <p>
          <a href="/headquarters/madrid" @click="${this.headquartersClick}">Sede de Madrid</a> | 
          <a href="/headquarters/barcelona" @click="${this.headquartersClick}">Sede de Barcelona</a> | 
          <a href="/headquarters/bilbao">Sede de Bilbao (no existe)</a> 
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe exercitationem soluta quia perspiciatis beatae magni eius adipisci ullam nulla ipsa, sed laboriosam facere natus? Dignissimos repudiandae repellat autem voluptatibus a.</p>
        <p>Consequatur molestiae velit laboriosam nesciunt corporis veniam impedit earum quidem quo deserunt aspernatur laudantium optio, atque blanditiis fugit eligendi perspiciatis cum ad, reiciendis dolor labore! Facere ipsa nisi maiores porro.</p>
        <p>Debitis libero tenetur, quibusdam aperiam adipisci impedit voluptatibus nihil vel dicta porro beatae officiis labore repellendus hic consequuntur error quidem deleniti asperiores ipsa exercitationem ut maxime tempora omnis harum. Culpa?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe exercitationem soluta quia perspiciatis beatae magni eius adipisci ullam nulla ipsa, sed laboriosam facere natus? Dignissimos repudiandae repellat autem voluptatibus a.</p>
        <p>Consequatur molestiae velit laboriosam nesciunt corporis veniam impedit earum quidem quo deserunt aspernatur laudantium optio, atque blanditiis fugit eligendi perspiciatis cum ad, reiciendis dolor labore! Facere ipsa nisi maiores porro.</p>
        <p>Debitis libero tenetur, quibusdam aperiam adipisci impedit voluptatibus nihil vel dicta porro beatae officiis labore repellendus hic consequuntur error quidem deleniti asperiores ipsa exercitationem ut maxime tempora omnis harum. Culpa?</p>
        <p>Tenetur incidunt facilis voluptas iusto voluptates omnis praesentium blanditiis, illum, provident impedit, commodi officia minus veritatis quae ad cumque sed repudiandae cupiditate! Aut, delectus tenetur quidem asperiores error perferendis quisquam?</p>
        <p>Natus, numquam, odit, quo dicta eum dolores minima et sunt temporibus dignissimos nisi. Aperiam facilis, minima cum quibusdam rerum aspernatur quia perspiciatis itaque recusandae blanditiis odit aliquid maiores optio sequi.</p>
        <dile-pages selected="${this.section}" attrForSelected="name" id="info">
          <headquarters-madrid-view name="madrid" ?active="${this.section == 'madrid'}"></headquarters-madrid-view>
          <headquarters-barcelona-view name="barcelona" ?active="${this.section == 'barcelona'}"></headquarters-barcelona-view>
        </dile-pages>
      </div>
      
    `;
  }

  headquartersClick() {
    this.smoothScrollElementIntoView(this.shadowRoot.getElementById('info'));
  }

  stateChanged(state) {
    this.section = state.app.pageSection;
  }
}

customElements.define('view-headquarters', ViewHeadquarters);