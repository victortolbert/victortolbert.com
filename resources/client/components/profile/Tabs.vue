<template>
  <div class="mt-6 sm:mt-2 2xl:mt-5">
    <div class="border-b border-gray-200">
      <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <nav class="flex -mb-px space-x-8" aria-label="Tabs">
          <!-- Current: "border-primary-500 text-primary-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
          <RouterLink
            :to="{name: 'profile'}"
            class="px-1 py-4 text-sm font-medium text-gray-900 border-b-2 border-primary-500 whitespace-nowrap"
            aria-current="page"
          >
            {{ $t('profile') }}
          </RouterLink>
          <RouterLink
            :to="{name: 'calendar'}"
            class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"
          >
            {{ $t('calendar') }}
          </RouterLink>
          <a
            href="#"
            class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"
          >
            {{ $t('recognition') }}
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
