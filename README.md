[![Build Status](https://travis-ci.org/oyeharry/app-menu.svg?branch=master)](https://travis-ci.org/oyeharry/app-menu)

# \<app-menu\>

A simple side menu for App

##&lt;app-menu&gt;

## Usage

### Installation

```
npm install --save app-menu
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@oyeharry/app-menu/app-menu.js';
    </script>
  </head>
  <app-menu selected="0">
    <a href="#" class="app-menu-item">Item 1</a>
    <a href="#" class="app-menu-item">Item 2</a>
    <a href="#" class="app-menu-item">Item 3</a>
  </app-menu>
</html>
```

### In a Polymer 3 element

```js
import { PolymerElement, html } from '@polymer/polymer';
import '@oyeharry/app-menu/app-menu.js';

class SampleMenuElement extends PolymerElement {
  static get template() {
    return html`
      <style is="custom-style">
        app-menu {
          --app-menu-color: #616161;
          --primary-color: #f62a5a;
          --app-menu-selected-bg-color: rgba(0, 0, 0, 0.05);
        }
      </style>

      <app-menu selected="0">
        <a href="#" class="app-menu-item">Item 1</a>
        <a href="#" class="app-menu-item">Item 2</a>
        <a href="#" class="app-menu-item">Item 3</a>
      </app-menu>
    `;
  }
}
customElements.define('sample-element', SampleMenuElement);
```

### Installation

```sh
git clone https://github.com/app-menu
cd app-menu
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests

```sh
polymer test --npm
```
