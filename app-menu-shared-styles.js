import '@polymer/polymer/polymer-legacy.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const template = html`<dom-module id="app-menu-shared-styles">
  <template>
    <style>
    .selectable-content ::slotted(.app-menu-item),
    .app-menu-item {
      cursor: pointer;
      text-decoration: none;
      color: var(--app-menu-color, var(--primary-text-color));
      transition: color 0.4s ease-out;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      min-height: 48px;
      padding: 0 24px;
    }
    
    .selectable-content ::slotted(.app-menu-item.iron-selected),
    .app-menu-item.iron-selected {
      font-weight: 500;
      background-color: var(--app-menu-selected-bg-color, var(--primary-background-color));
      color: var(--primary-color);
      fill: var(--primary-color);
      @apply(--app-menu-selected-item);
    }
    
    .selectable-content ::slotted(.app-menu-item:hover),
    .selectable-content ::slotted(.app-menu-item:focus) {
      background-color: var(--app-menu-selected-bg-color, var(--primary-background-color));
    }
    
    .selectable-content ::slotted(.app-menu-item[disabled]) {
      color: var(--app-menu-disabled-color, var(--disabled-text-color));
      pointer-events: none;
    }
    
    .selectable-content ::slotted(:focus) {
      position: relative;
      outline: 0;
      @apply(--app-menu-focused-item);
    }
    
    .selectable-content ::slotted(.app-menu-item:focus:after) {
      @apply(--layout-fit);
      opacity: var(--dark-divider-opacity);
      content: '';
      pointer-events: none;
      @apply(--app-menu-focused-item-after);
    }
    
    .selectable-content ::slotted(.app-menu-item[colored]:focus:after) {
      opacity: 0.26;
    }
    </style>
  </template>
</dom-module>`;

template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
