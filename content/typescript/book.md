# Book

```ts
export interface Book {
  title: string
  authors: Author[]
  ISBN: string
  publicationDate: Date
  pageCount: number
  genres: Genre[] // Using an array of Genre for multiple genres
  publisher: Publisher
  language: string
  coverImageURL?: string
  isAvailable: boolean
}

```
