<script setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="text-primary-800 hover:scale-105 hover:text-primary-900 dark:text-primary-100 dark:hover:text-primary-50"
    title="Toggle Dark"
    @click="toggleDark"
  >
    <UIcon v-if="isDark" name="i-heroicons-outline-moon" />
    <UIcon v-else name="i-heroicons-outline-sun" />
  </button>
</template>
