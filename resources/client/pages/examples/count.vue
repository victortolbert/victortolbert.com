<!-- @vue-ignore -->
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  name: 'Count',
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })
    const increment = () => state.count++

    return {
      state,
      increment
    }
  }
})
</script>

<template>
  <div class="count">
    <button @click="increment">Count is: {{state.count}}, double is: {{state.double}}</button>
  </div>
</template>
