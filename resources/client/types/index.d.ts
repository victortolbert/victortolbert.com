import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { ViteSSGContext } from 'vite-ssg'

declare module "vue/types/vue" {
  interface Vue {
    $axios: NuxtAxiosInstance;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance;
  }

  interface Context {
    $axios: NuxtAxiosInstance;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $axios: NuxtAxiosInstance;
  }
}

export type UserModule = (ctx: ViteSSGContext) => void

export type SchemaValue = 'auto' | 'dark' | 'light'

export interface Advocate {}

export interface AgencyItem {
  id: number
  agency_name: string
  agency_address_city: string
  agency_address_state: string
  state: number
}




export interface AffiliateItem {
  id: number
  id_affiliate: number
  affiliate_name: string
  affiliate_desc: string
  affiliate_contact_name: string
  affiliate_contact_email: string
  afflliate_contact_phone: string
  affiliate_address_street: string
  affiliate_address_city: string
  affiliate_address_state: string
  affiliate_address_zip: '30017'
  affiliate_address_country: 'US'
  url_avatar: null
  state: 40
}

export interface Assessment {}

export interface BookItem {
  title: string
  year?: number
}

export const ButtonSizes = ['default', 'small', 'big'] as const

export type ButtonSize = typeof ButtonSizes[number]

export interface CaseItem {
  id: number
  name: string
  progress: number
  active: boolean
  last_activity: Date
}

export interface ChurchItem {
  id: number
  church_name: string
  church_nick: string
  campus_name: string
  phone: string
  church_contact_name: string
  church_contact_email: string
  state: number
}

export interface Client {}

export interface ClientCaseManager {}

export interface ClientProfile {}

export interface CommunityItem {
  id: number
  community_name: string
  community_desc: string
  state: number
  agency: string
  case_worker_name: string
}

export interface ColorItem {
  id: number
  community_name: string
  community_desc: string
  state: number
  agency: string
  case_worker_name: string
}

export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}

export interface FamilyItem {
  id: number
  family_name: string
  family_type: string
  family_structure: string
  id_salesforce: string
  state: number
}

export interface MessageItem {
  id: number
  subject: string
  sender: string
  body: string
  tags: array
}

export interface NotificationItem {
  id: number
  subject: string
  sender: string
  body: string
  tags: array
}

export interface PersonItem {
  id: number
  first_name: string
  last_name: string
  email: string
  home_church: string
  avatar_url: string
  last_activity: Date
}

export interface ProductItem {
  id: number
  name: string
  sold: number
  available: number
}

export interface Program {}


export interface RegionItem {
  id: number
  region_name: string
  region_address_state: string
  region_zips: array
  id_region_manager: number
  state: number
  id_affiliate: number
  id_org_internal: number
}

export interface RestfulResource {
  resource: string
}

export interface ResourceItem {
  id: number
  resource_name: string
  resource_address_state: string
  resource_zips: array
  id_region_manager: number
  state: number
  id_affiliate: number
  id_org_internal: number
}

export type TaskItem {
  id: number
  title: string
  description: string
  createdBy: string
  assignedTo: string
  completed: boolean
  editing: boolean
}

export interface Todo {
  kind: 'Todo'
  id: number
  title: string
  assignee: string
  completed?: boolean
}

export interface Schedule {}

export interface SectionItem {
  name: string
  title: string
  description: string
  icon: string
  completed?: boolean
}

export interface Staff {}

export interface Status {
  valid: boolean
  message?: string
}

type TaskType = 'personal' | 'work' | 'miscellaneous'

export interface TodoItem {
  label: string
  type: TaskType
  isComplete: boolean
}


export type TodoInput = Pick<Todo, 'title' | 'assignee'>
