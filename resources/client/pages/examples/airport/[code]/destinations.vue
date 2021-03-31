<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import airports from '~/__mocks__/fixtures/airports.json'

  export default defineComponent({
    setup() {
      const route = useRoute()
      const airport = computed(() => {
        return airports.filter(a => a.abbreviation === route.params.code.toUpperCase())[0]
      })

      return { airport }
    }
  })
</script>

<template>
  <div>
    <h1>Destinations for {{ airport.name }} ({{ airport.abbreviation }}</h1>
    <h2>Passenger</h2>
    <ul>
      <li v-for="(destination, i) in airport.destinations.passenger" :key="`passenger-${i}`">
        {{ destination }}
      </li>
    </ul>
    <h2>Cargo</h2>
    <ul>
      <li v-for="(destination, j) in airport.destinations.cargo" :key="`passenger-${j}`">
        {{ destination }}
      </li>
    </ul>
  </div>
</template>
