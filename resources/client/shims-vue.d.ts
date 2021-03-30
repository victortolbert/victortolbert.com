declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare const _APP_VERSION: string

declare type ColorItem = {
  id: number
  community_name: string
  community_desc: string
  state: number
  agency: string
  case_worker_name: string
}
