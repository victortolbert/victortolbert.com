import process from 'node:process'

import { createLogger } from 'vuex'
import { STORAGE_KEY } from './mutations'

function localStoragePlugin(store) {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
