<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  plantId: {
    type: Number,
    default: null,
  },
})

const emit = defineEmits(['close'])

const plant = ref({})

// async function fetch() {
//     const { data } = await this.$axios.get(`plants/${this.plantId}`)
//     this.plant = data
// }

function cancel() {
  emit('close')
}
function onClickOutside() {
  cancel()
}
</script>

<template>
  <PlantModalDialog v-click-outside="onClickOutside" :show="show"
  @close="cancel"
  >
    <PlantDetails :plant="plant" @close="cancel" />
  </PlantModalDialog>
</template>
