<script lang="ts">
export default {
  name: 'BlankState',
}
</script>

<template>
  <section class="h-64 min-h-full section">
    <div
      class="flex items-center justify-center min-h-full text-center text-gray-500"
    >
      <div class="flex flex-col items-center flex-1 text-xl">
        <OIcon icon="emoticon-sad" size="large" />
        <slot />
      </div>
    </div>
  </section>
</template>
