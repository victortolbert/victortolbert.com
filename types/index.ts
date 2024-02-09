export * from './BillingContactType'
export * from './CompanyServiceType'
export * from './Editable'
export * from './ExemplarEntityTypes'
export * from './ExternalWebForm'
export * from './MerchantAuthentication'
export * from './NewClaimBase'
export * from './PaymentProfile'
export * from './ProjectDamageTypeInsert'
export * from './ProjectInspection'
export * from './ProjectInspectionTechnician'
export * from './ServiceAreaPostalCode'
export * from './ServiceAreaTechnician'
export * from './ServiceRegionManager'

export interface Article { }

export interface Attendee {
  id: string
  name: string
}

export interface Author {
  firstName: string
  lastName: string
  birthDate?: Date
  nationality?: string
  biography?: string
}

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

export interface Category {
  CategoryID: number
  CategoryName: string
  Description: string
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
  id: number
  title: string
  description: string
  lessons: Lesson[]
  instructor: string
  price: number
  duration: string // Total course duration
}

export interface Episode {
  title: string
  description: string
  releaseDate: Date
  duration: number // Duration in minutes or seconds, depending on your preference
  audioURL: string
}

export interface Email {
  id: string
  subject: string
  sender: string
  body: string
  tags: string[]
  date: string // You can use Date type if you want to parse the date string
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

export interface Genre {
  name: string
  description?: string
}

export interface Host {
  name: string
  bio?: string
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

export interface Lesson {
  id: number
  title: string
  description: string
  duration: string // You can use a string or number to represent duration as needed
  videoURL?: string // Optional property for video lessons
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

export interface Podcast {
  title: string
  hosts: Host[]
  description: string
  coverImageURL?: string
  episodes: Episode[]
  language: string
  website?: string
}

export interface Pokemon {
  id: string
  name: string
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface Product {
  ProductID: number
  ProductName: string
  SupplierID: number
  CategoryID: number
  QuantityPerUnit: string
  UnitPrice: number
  UnitsInStock: number
  UnitsOnOrder: number
  ReorderLevel: number
  Discontinued: boolean
  Category: Category
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

export interface Publisher {
  name: string
  location?: string
  website?: string
}

export interface Use {
  name: string
  description: string
  url: string
  category: string
  thumbnail: string
}

// Videa
export interface PriceGuide {
  id: string
  daypartName: string
  expanded: boolean
  demos: Demo[]
  programs: Program[]
}

export interface Demo {
  name: string
  rating: number
  cpp: number
  premiumCPP: number
  videaRating: number
  videaCPP: number
}

export interface Program {
  name: string
  time: string
  expanded: boolean
  acceptRate: boolean
  station: Station
  videa: Videa
  onTheBooks: OnTheBooks
  months: Month[]
}

export interface Station {
  rate: number
  rating: number
  CPP: number
  impressions: number
  premiumPercentDividedByRate: number
  premium_rate: number
  premium_percent: number
  premium_rating: number
  premium: {
    rate: number
    percent: number
    rating: number
  }
  demos: Demo[]
}

export interface Videa {
  rate: number
  rating: number
  CPP: number
  impressions: number
}

export interface OnTheBooks {
  minRate: number
  maxRate: number
  aur: number
  sellOutPercent: number
  lyAur: number
}

export interface Month {
  month: string
  expanded: boolean
  acceptRate: boolean
  station: Station
  videa: Videa
  onTheBooks: OnTheBooks
  otherSources: OtherSources
  weeks: Week[]
}

export interface Week {
  week: string
  expanded: boolean
  acceptRate: boolean
  station: Station
  videa: Videa
  onTheBooks: OnTheBooks
  otherSources: OtherSources
}

export interface OtherSources {
  shareBuilders: number
  mktCPP: number
}
// End Videa
