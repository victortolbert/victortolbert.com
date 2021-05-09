<script setup lang="ts">
import { ref } from 'vue'
const on = ref(false)
</script>
<template>
  <!-- Privacy section -->
  <div class="pt-6 divide-y divide-gray-200">
    <div class="px-4 sm:px-6">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">Privacy</h2>
        <p
          class="mt-1 text-sm text-gray-500"
        >Ornare eu a volutpat eget vulputate. Fringilla commodo amet.</p>
      </div>

      <ul class="mt-2 divide-y divide-gray-200">
        <UserPrivacySettingsItem />
      </ul>
    </div>

    <div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
      <button
        type="button"
        class="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >Cancel</button>
      <button
        type="submit"
        class="ml-5 bg-primary-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >Save</button>
    </div>
  </div>
</template>
