/**
  Using the Vuex plugin pattern: https://vuex.vuejs.org/en/plugins.html,
  this plugin will fire off a gtm.trackEvent for each mutation that occurs within your app.
  It will also do a lookup on a literal object methods named after your mutation types. From those methods,
  return a object with looks up on the store.
*/

import Vue from 'vue'
// import mutation-types, see example:
/**
  import {
    USER_LOGIN,
    USER_LOGOUT
  } from '../mutation-types'
*/

const mutationLookup = {
  // put methods here named after mutation names
  // see example below
}

/**
const mutationLookup = {
  USER_LOGIN(store) {
    return { email: store.user.email }
  },
  USER_LOGOUT(store) {
    return { email: store.user.email }
  }
}
*/

export default function gtmPlugin(store) {
  store.subscribe((m, s) => {
    try {
      let mutation = m.type.split('/')[0]
      let payload = mutationLookup[mutation] && mutationLookup[mutation](s)

      if (payload) {
        Vue.gtm.trackEvent({
          event: 'mutation',
          noninteraction: mutation,
          ...payload
        })
      }
    } catch(e) {
      throw new Error(`Error with gtm.trackEvent: ${e}`)
    }
  })
}
