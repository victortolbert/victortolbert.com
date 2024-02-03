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

function getPlantIndexById(plants, plantId) {
  return plants.findIndex(plant => plant.id.toString() === plantId.toString())
}

export default function usePlants() {
  const plants = ref([])
  const isLoading = ref(true)
  const visibility = ref('all')
  const query = ref('')

  // const { fetch, fetchState } = useFetch(async () => {
  //   plants.value = await $axios.$get(`plants?q=${query.value}`)
  // })

  const filteredPlants = computed(() => {
    return filters[visibility.value](plants.value)
  })

  const setIsFavorite = (updatedPlant) => {
    const index = getPlantIndexById(updatedPlant.id)

    if (index === -1)

      return console.warn(`Unable to update event (id ${updatedPlant.id})`)

    return plants.value.splice(index, 1, {
      ...plants.value[index],
      isFavorite: updatedPlant.isFavorite,
    })
  }

  provide('visibility', visibility)

  return {
    fetch,
    setIsFavorite,
    fetchState,
    plants,
    visibility,
    query,
    isLoading,
    filteredPlants,
  }
}
