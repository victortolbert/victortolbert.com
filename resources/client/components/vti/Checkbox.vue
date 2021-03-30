<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field"
  />
  <label v-if="label">{{ label }}</label>
</template>
