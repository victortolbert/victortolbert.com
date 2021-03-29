import { createStore } from 'vuex'
import { UserModule } from '~/types'

const store = createStore({
  state: {
    isMenuOpen: false,
  },
  mutations: {},
  actions: {},
  modules: {},
})

export const install: UserModule = ({ app }) => {
  app.use(store)
}
