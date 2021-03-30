<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import airports from '~/data/airports'

const route = useRoute()
const airport = computed(() => {
  return airports.filter(
    airport => airport.abbreviation === route.params.code.toUpperCase()
  )[0]
})
</script>


<template>
  <div>{{ airport }}</div>
</template>
