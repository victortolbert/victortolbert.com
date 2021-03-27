
<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useStore, Mutation } from '~/store/index'
const store = useStore()
const appVersion = store.state.version // not reactive!
const count = computed(() => store.state.count)
const props = defineProps<{
  msg: string
}>()
function increment() {
  store.commit(Mutation.INCREMENT, 1)
}
</script>

<template>
  <div class="prose">
    <h2>{{ msg }}</h2>
    <button
      class="px-3 py-2 border border-gray-300 rounded-md shadow"
      @click="increment"
    >
      count is: {{ count }}
    </button>
    <p class="text-sm text-gray-700">
      v{{ appVersion }}
    </p>
  </div>
</template>
