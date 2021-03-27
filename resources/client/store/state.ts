import {addDays} from 'date-fns'

export interface State {
  debug: boolean
  version: string
  isInitialized: boolean
  count: number
  subdomain: string
  affiliate: object
  authenticated: boolean
  categories: object
  settings: object
  events: string[]
  weekendsVisisble: boolean
}

const versionString = import.meta.env.MODE === 'development' ? _APP_VERSION + '-dev' : _APP_VERSION

export const state: State = {
  debug: import.meta.env.MODE === 'development',
  version: versionString,
  isInitialized: false,
  count: 0,
  subdomain: 'ga-sps',
  affiliate: {
    id: 1,
    name: 'ga-sps',
    subdomain: '',
    theme: {
      nav: {
        class: 'bg-white text-gray-800',
      },
      logo_path: '',
      colors: {
        primary: 'paprika',
        secondary: '',
        tertiary: '',
        danger: '',
        warning: '',
        success: '',
        info: '',
      },
    },
  },
  authenticated: false,
  categories: {},
  settings: {
    title: 'Documentation',
    url: '',
    defaultDir: 'docs',
    defaultBranch: '',
    filled: false,
  },
  events: [
    {
      id: 10,
      title: 'All day event',
      date: new Date(),
      allDay: true,
    },
    {
      id: 20,
      title: 'Timed event',
      start: addDays(new Date(), 1),
    },
    {
      id: 30,
      title: 'Timed event',
      start: addDays(new Date(), 2),
    },
  ],
  weekendsVisible: true,
}
