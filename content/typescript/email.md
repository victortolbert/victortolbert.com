# Email

```ts
export interface Email {
  id: string
  subject: string
  sender: string
  body: string
  tags: string[]
  date: string // You can use Date type if you want to parse the date string
}
```
