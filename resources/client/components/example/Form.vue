<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      name: ''
    }
  },
  emits: [
    'formSubmitted'
  ],
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: this.name })
    }
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>
