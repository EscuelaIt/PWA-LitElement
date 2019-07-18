import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js';

import './views/view-about';
import './views/view-home';
import './views/view-contact';
import './views/view-map';
import 'dile-tabs/dile-tabs';
import 'dile-pages/dile-pages';

class PwaLive extends LitElement {
	static get styles() {
		return css`
			:host {
				display: block;
				padding: 15px;
				--dile-tab-background-color: transparent;
				--dile-tab-selected-background-color: transparent;
				--dile-tab-selected-text-color: #1020c0;
				background-color: #f9f9f9;
			}
			h1 {
				font-weight: 300;
			}
			.page {
				display: none;
			}
			.page[active] {
				display: block;
			}
			dile-tabs {
				border-bottom: 1px solid #ddd;
				margin-bottom: 15px;
			}
			dile-pages {
				padding: 0 10px 10px;
			}
		`;
	}

	static get properties() {
		return {
			page: { type: String },
		};
	}

	constructor() {
		super();
		this.page = 'home';
		installRouter((location) => this.handleNavigation(location.pathname));

		this.addEventListener('navigate', (e) => this.navigate(e.detail));
	}

	render() {
		return html`
			<h1>My App</h1>

			<!-- <a href="/home">Home</a> |
			<a href="/about">About</a> |
			<a href="/contact">Contact</a> |
			<a href="/map">Mapa</a> -->

			<dile-tabs selected="${this.page}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">
				<dile-tab name="home">Home</dile-tab>
				<dile-tab name="about">About</dile-tab>
				<dile-tab name="contact">Contact me</dile-tab>
				<dile-tab name="map">Mapa</dile-tab>
			</dile-tabs>			
			
			<dile-pages selected="${this.page}" attrForSelected="name">
				<view-home name="home" ?active=${this.page == 'home'}></view-home>
				<view-about name="about" ?active=${this.page == 'about'}></view-about>
				<view-contact name="contact" ?active=${this.page == 'contact'}></view-contact>
				<view-map name="map" ?active=${this.page == 'map'}></view-map>
			</dile-pages>

			<button @click="${this.navegar}" data-navigation-path="map">Ir al mapa</button>
			<button @click="${this.navegar}" data-navigation-path="about">Ir al Sobre nosotros</button>
			<a href="/home"><button>ir a Home</button></a>
		`;
	}

	navegar(e) {
		let page = e.target.getAttribute('data-navigation-path');
		this.navigate(page);
	}

	selectedChanged(e) {
		let page = e.detail;
		this.navigate(page);
	}

	handleNavigation(path) {
		console.log(path);
		if(path == '/') {
			this.page = 'home';
		} else {
			this.page = path.slice(1);
		}
	}

	navigate(page) {
		window.history.pushState({}, '', '/' + page);
		this.handleNavigation(window.location.pathname);
	}
}

customElements.define('pwa-live', PwaLive);
