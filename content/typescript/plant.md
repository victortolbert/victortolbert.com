# Plant

```ts
export interface Plant {
  id: number
  image: string
  names: {
    common: string
    scientific: string
  }
  details: string
  toxicity: {
    property: string
    symptoms: string
  }
  care: {
    light: string
    water: string
  }
}
```
