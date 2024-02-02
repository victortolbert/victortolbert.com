<script setup>
import usePlants from '~/composables/usePlants'

defineProps({
  plantId: {
    type: Number,
    default: null,
  },
})

const store = useStore()

const { fetch, fetchState, isLoading, query, visibility, plants, filteredPlants } = usePlants()

const isFavorite = false

function updateFavorite(id) {
  isFavorite.value = !isFavorite.value
  const upDatedPlant = plants.value.find(plant => plant.id === id)

  upDatedPlant.isFavorite = this.isFavorite
  store.commit('plants/SET_FAVORITE', upDatedPlant)
}
</script>

<template>
  <button
    type="button"
    class="favorite-button"
    @click.prevent="updateFavorite(plantId)"
  >
    <svg
      class="text-gray-400 hover:text-gray-700 group-hover:text-gray-700"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.3339 7.07821L13.3335 7.07868L12.7179 7.71305L12.0002 8.45254L11.2826 7.71305L10.667 7.07868L10.6658 7.0775C9.42059 5.79008 7.46709 5.64069 6.20243 6.7181C4.68551 8.01304 4.60181 10.3512 5.96245 11.7583C5.9625 11.7584 5.96255 11.7584 5.96259 11.7585C5.96269 11.7586 5.96278 11.7587 5.96287 11.7588L11.9987 17.9911L18.0349 11.7583L18.0351 11.7581C19.3986 10.3511 19.315 8.01297 17.7979 6.718L13.3339 7.07821ZM13.3339 7.07821C14.5828 5.78958 16.5335 5.64104 17.7978 6.71789L13.3339 7.07821Z"
        :fill="isFavorite && '#EB5757'"
        :stroke="isFavorite ? '#EB5757' : 'currentColor'"
        stroke-width="2"
      />
    </svg>

    <span v-if="!!$slots.default" class="mx-1">
      <slot />
    </span>
  </button>
</template>

<style>
.favorite-button {
  /* group */
  display: inline-flex;
  align-items: center;
  border-radius: var(--ds-border-rounded-full);
}

.icon {
  @apply text-gray-400 hover:text-gray-700 group-hover:text-gray-700;
}
.icon.is-favorite {
  color: var(--ds-color-red);
}
</style>
