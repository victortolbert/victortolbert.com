export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface Pokemon {
  id: string
  name: string
}

export interface Movie {
  poster_path?: string
  adult: boolean
  overview: string
  release_date: Date
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path?: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}
