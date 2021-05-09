<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>
<template>
  <div class="space-y-1">
    <button
      type="button"
      class="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      x-state:on="Current"
      x-state:off="Default"
      aria-controls="sub-menu-1"
      @click="open = !open"
      :aria-expanded="open"
      x-state-description="Current: &quot;bg-gray-100 text-gray-900&quot;, Default: &quot;bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;"
    >
      <vti-IconOutlined name="users" class="text-gray-400 group-hover:text-gray-500 mr-3" />Team
      <vti-IconSolid
        name="triangle-right"
        class="ml-auto transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
        :class="{ 'text-gray-400 rotate-90': open, 'text-gray-300': !open }"
      />
    </button>
    <div
      v-show="open"
      id="sub-menu-1"
      x-description="Expandable link section, show/hide based on state."
      class="space-y-1"
    >
      <a
        href="#"
        class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
      >Overview</a>

      <a
        href="#"
        class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
      >Members</a>

      <a
        href="#"
        class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
      >Calendar</a>

      <a
        href="#"
        class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
      >Settings</a>
    </div>
  </div>
</template>
