import shop from '~/lib/shop'

export const namespaced = true

export function state() {
  return {
    all: [],
    eventsTotal: 0,
    event: {},
  }
}

export const getters = {}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.all = products
  },

  DECREMENT_PRODUCT_INVENTORY(state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  },
}

export const actions = {
  getAllProducts({ commit }) {
    shop.getProducts((products) => {
      commit('SET_PRODUCTS', products)
    })
  },
}
