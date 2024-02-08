# Podcast

```ts
export interface Podcast {
  title: string
  hosts: Host[]
  description: string
  coverImageURL?: string
  episodes: Episode[]
  language: string
  website?: string
}
```
