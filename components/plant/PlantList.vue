<script setup>
defineProps({
  plants: {
    type: Array,
    default: () => [],
  },
})

const router = useRouter()

function showPlantDetails(id) {
  router.push({ path: `/${id}` })
}
</script>

<template>
  <div>
    <div
      v-for="plant in plants"
      :key="plant.id"
      class="flex flex-col py-4 border-t  hover:bg-gray-50 sm:items-center sm:flex-row"
    >
      <PlantMediaObject
        class="w-64"
        :plant="plant"
      />

      <div class="w-32 mt-4 ml-0 sm:ml-4 sm:mt-0">
        <PlantBadge :type="`${plant.toxicity && 'toxic'}`">
          {{ plant.toxicity ? 'Toxic' : 'Non-toxic' }}
        </PlantBadge>
      </div>

      <div class="flex-1 mt-4 ml-0 sm:truncate sm:mt-0 sm:ml-4">
        <PlantDetailButton :plant-id="plant.id" class="text-left">
          {{ plant.details }}
        </PlantDetailButton>
      </div>

      <div
        class="absolute order-first ml-0  sm:mx-4 m right-6 sm:static sm:order-last"
      >
        <PlantFavoriteButton :plant-id="plant.id">
          Favorite
        </PlantFavoriteButton>
      </div>
    </div>
  </div>
</template>
