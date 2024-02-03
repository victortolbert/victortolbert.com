<script setup>
const route = useRoute()
const plant = ref({})

// const { data } = await this.$axios.get(`plants/${route.params.id}`)
// plant.value = data
</script>

<template>
  <pre>{{ plant }}</pre>
</template>
