<script setup>
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:justify-between lg:px-8">
      <div class="max-w-xl">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Advanced Search
        </h2>
        <p class="mt-5 text-xl text-gray-500">
          Start building for free, then add a site plan to go live. Account plans unlock additional features.
        </p>
      </div>
      <div class="mt-10 w-full max-w-xs">
        <label for="currency" class="block text-base font-medium text-gray-500">Location</label>
        <div class="relative mt-1.5">
          <select id="currency" name="currency" class="block w-full appearance-none rounded-md border border-gray-300 bg-white bg-none py-2 pl-3 pr-10 text-base text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            <option>Argentina (ARS)</option>
            <option>Australia (AUD)</option>
            <option selected="">
              United States (USD)
            </option>
            <option>Canada (CAD)</option>
            <option>France (EUR)</option>
            <option>Japan (JPY)</option>
            <option>Nigeria (NGN)</option>
            <option>Switzerland (CHF)</option>
            <option>United Kingdom (GBP)</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <ChevronDownIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
