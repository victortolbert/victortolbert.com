<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue'
import { useMouseInElement, useVModel, useEventListener } from '@vueuse/core'
const scrubber = ref()
const scrubbing = ref(false)
const pendingValue = ref(0)

useEventListener('mouseup', () => scrubbing.value = false)
const emit = defineEmit(['update:modelValue'])
const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  secondary: { type: Number, default: 0 },
  modelValue: { type: Number, required: true },
})
const value = useVModel(props, 'modelValue', emit)
const { elementX, elementWidth } = useMouseInElement(scrubber)
watch([scrubbing, elementX], () => {
  const progress = Math.max(0, Math.min(1, (elementX.value) / elementWidth.value))
  pendingValue.value = progress * props.max
  if (scrubbing.value)
    value.value = pendingValue.value
})
</script>

<template>
  <div ref="scrubber" class="relative h-2 bg-black rounded cursor-pointer select-none dark:bg-white dark:bg-opacity-10 bg-opacity-20" @mousedown="scrubbing = true">
    <div class="relative w-full h-full overflow-hidden rounded">
      <div class="absolute top-0 left-0 w-full h-full rounded opacity-30 bg-emerald-700" :style="{ 'transform': `translateX(${ secondary / max * 100 - 100 }%)` }" />
      <div class="relative w-full h-full rounded bg-emerald-500" :style="{ 'transform': `translateX(${ value / max * 100 - 100 }%)` }" />
    </div>
    <div class="absolute inset-0 opacity-0 hover:opacity-100" :class="{ '!opacity-100': scrubbing }">
      <slot :pendingValue="pendingValue" :position="`${Math.max(0, Math.min(elementX, elementWidth))}px`" />
    </div>
  </div>
</template>
