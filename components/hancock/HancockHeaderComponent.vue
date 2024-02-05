<script lang="ts" setup>
</script>

<template>
  <header class="app-header">
    <nav class="app-header-menu fixed z-20 h-16 w-full flex items-center justify-between bg-white px-6">
      <slot />

      <div class="actions">
        <slot name="actions" />
      </div>
    </nav>
  </header>
</template>
