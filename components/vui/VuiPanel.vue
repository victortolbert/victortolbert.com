<script setup>
defineProps({
  title: {
    type: String,
    default: 'View Selection',
  },
})

const label = ref('View Selection Panel')
</script>

<template>
  <div class="vui-panel vui-m-bottom--large">
    <div class="vui-panel__heading vui-grid vui-grid--align-spread">
      <h2 class="vui-panel__title vui-align-middle">
        {{ title }}
      </h2>
    </div>
    <div class="vui-panel__body">
      <slot />
    </div>
  </div>
</template>
