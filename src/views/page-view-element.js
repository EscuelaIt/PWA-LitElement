import { LitElement } from 'lit-element';
import { store } from '../redux/store';
import { updateMetadata } from '../redux/actions/app-actions';

export class PageViewElement extends LitElement {
  // Only render this page if it's actually visible.
  shouldUpdate() {
    return this.active;
  }

  static get properties() {
    return {
      active: { type: Boolean }
    }
  }
  
  updated(changedProperties) {
    if(changedProperties.has('active') && this.active) {
      this.changeMetadata();
    }
  }

  changeMetadata() {
    store.dispatch(updateMetadata({
      title: 'Mi PWA con LitElement',
      description: 'Esta es una descripción genérica de mi app',
      url: window.location.href,
      image: '/images/escuelait.png'
    }));
  }
}