<script setup lang="ts">
const location = useBrowserLocation()
</script>

<template>
  <header
    class="h-32 border-b border-red-700 bg-gray-900 bg-fixed p-8"
    style="
      background-image: url('/assets/images/backgrounds/grid-dot-16.svg');
      background-position: 0 -2px;
    "
  >
    <div class="">
      <!-- page title and page actions container -->
      <div class="mt-2 md:flex md:items-center md:justify-between">
        <!-- page title container -->
        <div class="min-w-0 flex-1">
          <!-- Page Title -->
          <h2
            class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl"
          >
            <!-- Gradient Text Effect -->
            <!--
                <span
                  class="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-primary-500"
                >
            -->
            <span class="bg-opacity-50 bg-clip-text text-white">
              <pre class="text-xs font-bold tracking-widest uppercase">
                {{ location.host }}
              </pre>
              <slot />
            </span>
          </h2>
        </div>

        <!-- page actions container -->
        <div class="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0" />
      </div>
    </div>
  </header>
</template>
