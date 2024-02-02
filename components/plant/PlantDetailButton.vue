<script setup>
defineProps({
  plantId: {
    type: Number,
    default: null,
  },
})

const isLoading = ref(false)
const hasError = ref(false)
const isSuccess = ref(false)
const modalOpen = ref(false)
</script>

<template>
  <button
    type="button"
    class="hover:underline"
    @click.prevent="modalOpen = true"
  >
    <slot>Plant Detail</slot>
    <PlantDetailModal
      :show="modalOpen"
      :plant-id="plantId"
      @close="modalOpen = false"
    />
  </button>
</template>
