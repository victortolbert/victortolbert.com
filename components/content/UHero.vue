<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smallerThanSm = breakpoints.smaller('sm')
</script>

<template>
  <div class="min-h-screen bg-black bg-[url('/assets/images/backgrounds/zen.jpeg')] bg-contain bg-right-bottom bg-no-repeat">
    <div class="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white lg:text-6xl md:text-5xl">
        <!-- Full Claims Lifecycle Support -->
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:px-48 sm:px-16 lg:text-xl">
        <!-- Helping insurers get their policyholders
        back to what matters. -->
      </p>
      <div class="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-x-4 sm:space-y-0">
        <UButton to="/dashboard" trailing-icon="i-carbon-arrow-right" color="primary" size="lg" :block="smallerThanSm">
          Get started
        </UButton>

        <NuxtLink to="/guide" class="inline-flex items-center justify-center border border-white rounded-md px-3.5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400">
          Learn more
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
