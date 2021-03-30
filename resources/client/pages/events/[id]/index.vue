<script lang="ts">
import { defineComponent } from 'vue'
// import { EventItem } from '~/types'

export default defineComponent({
  props: ['event']
})
</script>

<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
