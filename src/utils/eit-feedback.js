import {LitElement, html, css } from 'lit-element';
import 'dile-toast/dile-toast';
import { negativeFeedback, positiveFeedback } from '../redux/actions/app-actions';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../redux/store.js';

class EitFeedback extends connect(store)(LitElement) {
  static get properties() {
    return {
      time: { type: Number },
      incomingMsg: { type: Object },
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      @media(min-width: 500px) {
        dile-toast {
          --dile-toast-width: 450px;
          --dile-toast-padding: 15px 20px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.time = 5000;
    document.addEventListener('positive-feedback', (e) => {
      store.dispatch(positiveFeedback(e.detail));
    });
    document.addEventListener('negative-feedback', (e) => {
      store.dispatch(negativeFeedback(e.detail));
    });
  }

  render() {
    return html`      
      <dile-toast id="toast" duration=${this.time}></dile-toast>
    `;
  }

  stateChanged(state) {
    this.incomingMsg = state.app.feedback; 
    //feedconsole.log(state);
  }

  changeIncomingMsg(feedbackMsg) {
    if(feedbackMsg && feedbackMsg.msg && feedbackMsg.status) {
      this.toast.open(feedbackMsg.msg, feedbackMsg.status);
    }
  }

  firstUpdated() {
    this.toast = this.shadowRoot.getElementById('toast');
  }

  updated(changedProperties) {
    if(changedProperties.has('incomingMsg')) {
      this.changeIncomingMsg(this.incomingMsg);
    }
  }
}

customElements.define('eit-feedback', EitFeedback);