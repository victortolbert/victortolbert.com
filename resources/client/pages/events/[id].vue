<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inject: ['GStore']
})
</script>

<template>
  <div v-if="GStore.event">
    <h1>{{ GStore.event.title }}</h1>

    <div id="nav">
      <router-link :to="{ name: 'events-id' }">Details</router-link>
      <router-link :to="{ name: 'events-id-register' }">Register</router-link>
      <router-link :to="{ name: 'events-id-edit' }">Edit</router-link>
    </div>

    <router-view :event="GStore.event" />
  </div>
</template>
