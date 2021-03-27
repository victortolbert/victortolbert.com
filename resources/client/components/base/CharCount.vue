<script lang="ts">
import {defineComponent, PropType} from 'vue'

export interface CharCountParams {
  label: string
  inputText: string
}

export default defineComponent({
  name: 'CharCount',
  props: {
    params: {
      type: Object as PropType<CharCountParams>,
      required: true,
    },
  },
  computed: {
    count(): number {
      return this.params.inputText.length
    },
  },
})
</script>

<template>
  <div id="char-count">
    <p>{{ params.label }}: {{ count }}</p>
  </div>
</template>
