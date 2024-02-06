<script setup>
import { useMessages } from '~/composables/useMessages'

defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})

const { truncate, filteredMessages } = useMessages()
</script>

<template>
  <div>
    <ul class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
      <li v-for="message in filteredMessages" :key="message.id">
        <NuxtLink
          :to="`/examples/messages/${message.id}`"
          class="flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
        >
          <div class="flex items-center truncate space-x-3">
            <!-- <div class="bg-pink-600"></div> -->

            <p class="truncate text-sm font-medium leading-6">
              <span>{{ message.subject }}</span>
              <span
                v-for="tag in message.tags"
                :key="tag"
                class="mx-1 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full"
                :class="tag"
              />
              <span class="truncate font-normal text-gray-500">{{ truncate(message.body) }}</span>
            </p>
          </div>

          <!-- Heroicon name: chevron-right -->
          <svg
            class="ml-4 h-5 w-5 text-gray-400 transition duration-150 ease-in-out group-focus:text-gray-600 group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
