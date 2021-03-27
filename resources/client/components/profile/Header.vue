<script lang="ts">
import {defineComponent} from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  props: {
    colors: {
      type: Array,
      default: () => [
        '#ff0',
        '#ff0',
        '#ff0',
        '#ff0',
        '#ff0',
        '#ff0',
        '#ff0',
        '#ff0',
        '#ff0',
        '#ff0',
      ]
    },
    person: {
      type: Object,
      default: () => ({
        name: 'Victor Tolbert',
        profilePhotoUrl: 'https://cominex.net/assets/img/people/victor.jpeg',
      }),
    },
  },
  setup() {
    const {t} = useI18n()
    return {t}
  }
})
</script>

<template>
  <PageWrapper>
    <SvgLiquidCheese :colors="colors" class="object-cover h-32 bg-cover lg:h-48" />

    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <img
            class="w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
            :src="person.profilePhotoUrl"
            alt=""
            style="filter: grayscale(1)"
          />
        </div>
        <div
          class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
        >
          <div class="flex-1 min-w-0 mt-6 sm:hidden md:block">
            <h1 class="text-2xl font-bold text-gray-900 truncate">
              {{ person.name }}
            </h1>
          </div>
          <div
            v-if="false"
            class="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <button
              type="button"
              class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <BaseIconSolid name="mail" class="mr-2 -ml-1 text-gray-400" />
              <span>{{ t('message') }}</span>
            </button>
            <button
              type="button"
              class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <BaseIconSolid name="phone" class="mr-2 -ml-1 text-gray-400" />
              <span>{{ t('call') }}</span>
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 hidden min-w-0 mt-6 sm:block md:hidden">
        <h1 class="text-2xl font-bold text-gray-900 truncate">
          {{ person.name }}
        </h1>
      </div>
    </div>
  </PageWrapper>
</template>
