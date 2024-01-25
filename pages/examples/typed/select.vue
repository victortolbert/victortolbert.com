<script setup lang="ts">
import { reactive } from 'vue'

import speakers from '~/data/speakers.json'
import tags from '~/data/tags.json'
import countries from '~/data/countries.json'

const form = reactive({
  speaker: undefined,
  category: undefined,
  country: undefined,
})
</script>

<template>
  <div class="grid grid-cols-3">
    <ExampleInputSelect
      v-model="form.speaker"
      label="Speaker"
      placeholder="Select a speaker"
      :options="speakers"
      :option-label="(s) => s.name"
    />

    <ExampleInputSelect
      v-model="form.category"
      label="Category"
      placeholder="Select a technology"
      :options="tags"
    />

    <ExampleInputSelect
      v-model="form.country"
      label="Country"
      placeholder="Select a country"
      :options="countries"
    >
      <template #option="{ option }">
        {{ option.flag }} {{ option.country }}
      </template>
    </ExampleInputSelect>

    <div class="mt-10 col-span-3 bg-gray-100 rounded p-4 overflow-x-auto">
      <pre>{{ form }}</pre>
    </div>
  </div>
</template>
