Polymer({
  _template: `
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
