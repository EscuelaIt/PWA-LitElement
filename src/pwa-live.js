import { LitElement, html, css } from 'lit-element';
import './views/view-about';
import './views/view-home';
import './views/view-contact';
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
	}

	render() {
		return html`
			<h1>My App</h1>

			<dile-tabs selected="${this.page}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">
				<dile-tab name="home">Home</dile-tab>
				<dile-tab name="about">About</dile-tab>
				<dile-tab name="contact">Contact me</dile-tab>
			</dile-tabs>			
			
			<dile-pages selected="${this.page}" attrForSelected="name">
				<view-home name="home" ?active=${this.page == 'home'}></view-home>
				<view-about name="about" ?active=${this.page == 'about'}></view-about>
				<view-contact name="contact" ?active=${this.page == 'contact'}></view-contact>
			</dile-pages>

		`;
	}

	selectedChanged(e) {
		this.page = e.detail;
	}

}

customElements.define('pwa-live', PwaLive);
