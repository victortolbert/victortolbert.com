# Event

```ts
export interface Event {
  id: number
  title: string
  date: Date
  time: string
  location: string
  description: string
  organizer: string
  category: string
  attendees?: Attendee[]
}
```
