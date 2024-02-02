export function state() {
  return {
    overlayIsOpen: false,
    activeView: 'list',
    category: 'toxic',
  }
}

export const mutations = {
  CLOSE_OVERLAY(state) {
    state.overlayIsOpen = false
  },

  OPEN_OVERLAY(state) {
    state.overlayIsOpen = true
  },

  SET_ACTIVE_VIEW(state, payload) {
    state.activeView = payload
  },

  UPDATE_CATEGORY(state, category) {
    state.category = category
  },
}
