import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/polymer-legacy.js';

Polymer({
  _template: html`
    <style>
    :host {
      display: block;
      color: currentColor;
      @apply(--app-menu-icon-item-style);
    }
    
    iron-icon {
      margin-right: 15px;
    }
    </style>


    <iron-icon icon="[[icon]]"></iron-icon>
    <slot></slot>
`,

  is: 'app-menu-icon-item',

  properties: {
    icon: {
      type: String,
      reflectToAttribute: true
    }
  }
});
