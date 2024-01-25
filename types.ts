export interface Article { }

export interface Attendee {
  id: string
  name: string
}
export interface Author {}

export interface Book {
  title: string
  edition: string
  subtitle: string
  author: string
  asn: string
  weight: number
  dimensions: string
  isbn: string
  publication_date: Date
  customer_reviews: number
}

export interface CalendarEvent {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
  attendees: Attendee[]
}

export interface Case {
  id: number
  projectNumber: number
  claimNumber: string
  account: string
  flaggedBy: string
  inspectionDate: Date
  inspectionStart: Date
  inspectionFinish: Date
  insAdj: string
  serviceType: string
  city: string
  state: string
  postalCode: string
  serviceTech: string
  territory: string
  area: string
  status: string
  actions: string
}

export interface Company {
  id: number
  name: string
  // address: string
  // city: string
  // state: string
  // zip: string
  // phone: string
  // website: string
  // created_at: string
  // updated_at: string
}

export interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface Contact {
  name: string
  title: string
  company: string
  email: string
  phone: string
  message: string
}

export interface Course {

}

export interface Episode {

}

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

export interface Joke {
  id: number
  type: string
  setup: string
  punchline: string
}

export interface JsonPlaceholderComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
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

export type Option = {
  id: string
  label: string
}

export interface Plant {

}

export interface Podcast {

}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface Pokemon {
  id: string
  name: string
}

export interface Program {
  event_name: string
  fun_run: string
  microsite: {
    school_image_name: string
  }
}

export interface Project {
  name: string
  url: string
  description: string
  thumbnail: string
  status: string
  opensource: boolean
}

export interface Use {
  name: string
  description: string
  url: string
  category: string
  thumbnail: string
}
