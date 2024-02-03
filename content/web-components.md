# Web Components

:u-icon{name="i-logos-webcomponents" class="h-11 w-auto float-right pl-8 mb-16"}

Web Components are a set of features that provide a standard component model for the web[1] allowing for encapsulation and interoperability of individual HTML elements. Web Components are popular approach to build microfrontends.

```js [search-results.js]
const template = document.createElement('template')

template.innerHTML = `
  <style>
    div {
      margin-top: 20px;
      color: green;
    }
  </style>
  <div>
    <p>The Google search result of your name is <a target="_blank" rel="noopener">here</a></p>
  </div>
`

class SearchResult extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('a').href = ''
  }

  static get observedAttributes() {
    return ['name-attribute']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'name-attribute') {
      this.shadowRoot.querySelector(
        'a'
      ).href = `https://www.google.com/search?q=${newValue}`
    }
  }
}

window.customElements.define('search-result', SearchResult)
```
