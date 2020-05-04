import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';
import { store } from '../redux/store';

import { connect } from 'pwa-helpers';

import { 
  userRegister,
  userLogin,
  logout,
} from '../redux/actions/user-actions';

import 'dile-input/dile-input';
import 'dile-password/dile-password';
import '@dile/dile-button/dile-button';


class ViewLogin  extends connect(store)(PageViewElement) {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      loggedIn: { type: Boolean },
    };
  }

  stateChanged(state) {
    this.loggedIn = state.user.loggedIn;
  }

  render() {
    return html`
      ${this.loggedIn
        ? this.logoutTemplate
        : this.loginTemplate
      }
      
    `;
  }

  get loginTemplate() {
    return html`
      <div>
        <h2>Login / Registro</h2>
      </div>
      <form>
        <dile-input label="Email" value="miguel@example.com" id="emailComponent"></dile-input>
        <dile-password label="Clave" value="1234"></dile-password>
        <dile-button @click="${this.register}">Registro</dile-button>
        <dile-button @click="${this.login}">Inicio de sesión</dile-button>
      </form>
    `
  }

  get logoutTemplate() {
    return html`
      <div>
        <h2>Logout</h2>
      </div>
      <dile-button @click="${this.logout}">Cerrar sesión</dile-button>
    `
  }

  get userData() {
    return {
      email: this.shadowRoot.getElementById('emailComponent').value,
      password: this.shadowRoot.querySelector('dile-password').value,
    }
  }

  register() {
    //console.log(userData);
    store.dispatch(userRegister(this.userData));
  }

  login() {
    store.dispatch(userLogin(this.userData));
  }

  logout() {
    store.dispatch(logout())
  }
}

customElements.define('view-login', ViewLogin);