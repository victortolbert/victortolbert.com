const filters = {
  all(plants) {
    return plants
  },
  toxic(plants) {
    return plants.filter((plant) => {
      return plant.toxicity
    })
  },
  'non-toxic': function (plants) {
    return plants.filter((plant) => {
      return !plant.toxicity
    })
  },
  favorites(plants) {
    return plants.filter((plant) => {
      return plant.isFavorite
    })
  },
}

export const namespaced = true

export function state() {
  return {
    isLoading: false,
    list: [],
    selectedFilter: null,
    showFavorites: false,
    view: 'grid',
    visibility: 'all',
  }
}

export const getters = {
  favoritePlants: (state) => {
    return state.list.filter(plant => plant.isFavorite)
  },

  filteredPlants: (state) => {
    return filters[state.visibility](state.list)
  },

  toxicPlants: (state) => {
    return state.list.filter(
      plant => typeof plant.toxicity !== 'undefined',
    )
  },
  nonToxicPlants: (state) => {
    return state.list.filter(
      plant => typeof plant.toxicity === 'undefined',
    )
  },
  getPlantById: state => (id) => {
    return state.list.find(plant => plant.id === id)
  },
}

export const mutations = {
  SET_PLANTS: (state, plants) =>
    (state.list = plants.map((plant) => {
      return {
        ...plant,
        isFavorite: false,
      }
    })),

  REMOVE_PLANT(state, plantId) {
    state.list = state.list.filter(plant => plant.id !== plantId)
  },

  SET_VIEW(state, view) {
    state.view = view
  },

  SET_FILTER(state, filter) {
    state.selectedFilter = filter
  },

  SET_VISIBILITY(state, visibility) {
    state.visibility = visibility
  },

  SET_FAVORITE: (state, payload) => {
    state.list = [
      ...state.list.filter(item => item.id !== payload.id),
      payload,
    ]
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    const plants = await $axios.$get('plants')

    commit('SET_PLANTS', plants)
  },

  initPlants({ commit }, plants) {
    console.log('init...', plants)

    commit('SET_PLANTS', plants)
  },
  async fetchPlants({ commit }, search) {
    const { data } = await this.$axios.get(
      `plants/?q=${encodeURIComponent(search)}&_limit=${this.limit}`,
    )
    const plants = data.map((plant) => {
      return {
        ...plant,
        isFavorite: false,
      }
    })
    commit('SET_PLANTS', plants)
  },
}
