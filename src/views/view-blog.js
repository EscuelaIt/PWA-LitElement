import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewBlog  extends PageViewElement {
  static get properties() {
    return {
      segments: { type: Array }
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
        <h2>Blog ${this.showSegment(this.segments)}</h2>
      </div>
      <p>Esto es el blog!!! ${this.showSegment(this.segments)}</p>

      <p>Ver la entrada del blog <a href="/blog/otras cosas">Otras cosas</a></p>
      <p>Ver la entrada del blog <a href="/blog/tercera entrada">Tercera entrada</a></p>
    `;
  }

  showSegment(segments) {
    return segments[1];
  }

  firstUpdated() {
    console.log('firstUpdated', this.segments);
  }
}

customElements.define('view-blog', ViewBlog);