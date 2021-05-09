<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const search = () => console.log('perform search')
</script>
<template>
  <form @submit.prevent="search">
    <label for="search" class="sr-only">{{ t('search') }}</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <vti-IconSolid name="search" class="text-gray-400" />
      </div>
      <input
        id="search"
        name="search"
        autocomplete="off"
        class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        :placeholder="t('search')"
        type="search"
      />
    </div>
  </form>
</template>
