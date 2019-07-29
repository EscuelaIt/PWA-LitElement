import { LitElement, html, css } from 'lit-element';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { store } from '../redux/store';
import { connect } from 'pwa-helpers';

class UpdateMetadata  extends connect(store)(LitElement) {

  static get properties() {
    return {
      metadata: { type: Object }
    };
  }

  stateChanged(state) {
    this.metadata = state.app.metadata;
  }

  updated(changedProperties) {
    if(changedProperties.has('metadata')) {
      if(this.metadata) {
        console.log('voy a llamar al método que cambia la metadata, con', this.metadata)
        updateMetadata(this.metadata)
      }
    }
  }
}

customElements.define('update-metadata', UpdateMetadata);