# Composition API

## Composition API Cheat Sheet

### Why use the Composition API?

- [To organize by feature](#to-organize-by-feature)
- [To extract shared code](#to-extract-shared-code)

#### To organize by feature

```ts
export default {
  setup() {
    const productSearch = useSearch()
    const resultSorting = useSorting()
    return { productSearch, resultSorting }
  }
}

function useSearch(getResults) { }
function useSorting({ input, options }) { }
```

#### To extract shared code

```ts
import useSearch from '@/composables/useSearch'
import useSorting from '@/composables/useSorting'

export default {
  setup() {
    const productSearch = useSearch()
    const resultSorting = useSorting()
    return { productSearch, resultSorting }
  }
}
```

```ts
export default function useSearch(getResults) {}
```

```ts
export default function useSorting({ input, options }) {}
```

### The `setup()` method

Called after `beforeCreate` hook and before `created` hook. Does not have access to `this`

### `props`

The first optional argument of `setup`

```js
export default {
  props: {
    name: String
  },
  setup(props) {
    watch(() => {
      console.log('name is: ' + props.name)
    })
  }
}
```

### `context`

Exposes properties previously accessed using `this`

```js
setup(props, context) {
  context.attrs;
  context.slots;
  context.emit;
}
```

### Life-cycle hooks

Declare them inside setup

```js
setup() {
  onMounted(() => { ... })
  onUpdated(() => { ... })
  onUnMounted(() => { ... })
}
```

> Instead of using `beforeCreate` or `created` hooks, just write code or call functions inside `setup()` instead.
