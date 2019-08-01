import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';
import { store } from '../redux/store';
import { navigateDelay, updateMetadata } from '../redux/actions/app-actions';
import { FeedbackEmmiterMixin } from '../mixins/feedbak-emmiter-mixin';

class ViewHome  extends FeedbackEmmiterMixin(PageViewElement) {

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
        <h2>Home</h2>
      </div>
      <p>Esto es el home!!! y puedes <a href="/contact">contactar con nosotros</a> </p>
      
      <p>
        <a href="/blog/Bienvenidos">Ir la nota de bienvenida </a>
      </p>

      <button @click="${this.delayPageChange}">Ir al mapa dentro de 3 segundos</button>

      <button @click="${this.enviarFeedbackPositivo}">Enviar feedback positivo</button>
      <button @click="${this.enviarFeedbackNegativo}">Enviar feedback negativo</button>
      <hr>
      <a href="/headquarters/madrid">Sede de Madrid</a>
			<a href="/headquarters/barcelona">Sede de Barcelona</a>
    `;
  }

  delayPageChange() {
    store.dispatch(navigateDelay('/map'));
  }

  enviarFeedbackPositivo() {
    this.positiveFeedback('hola que tal!!!!!');
  }
  
  enviarFeedbackNegativo() {
    this.negativeFeedback('Que pena no ha funcionado :(');
  }
}

customElements.define('view-home', ViewHome);