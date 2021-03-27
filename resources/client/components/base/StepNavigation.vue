<!-- @vue-ignore -->
<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import {kebabCase} from 'lodash'

export default defineComponent({
  props: {
    paths: {
      type: Array,
      default() {
        return ['dashboard']
      },
    },
    person: {
        type: Object,
        default: () => ({
            name: 'Victor Tolbert',
            profilePhotoUrl: '',
        })
    },
    options: {
      type: Array,
      default() {
        return []
      },
    },
  },
  setup: () => {
    const { t } = useI18n()
    return { t }
  },
})
</script>

<template>
  <nav aria-label="Progress">
    <ol class="overflow-hidden">
      <li class="relative pb-10">
        <!-- Complete Step -->
        <div
          class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-primary-600"
          aria-hidden="true"
        />
        <a href="#" class="relative flex items-start group">
          <span class="flex items-center h-9">
            <span
              class="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 group-hover:bg-primary-800"
            >
              <BaseIconSolid name="check" class="text-white" />
            </span>
          </span>
          <span class="flex flex-col min-w-0 ml-4">
            <span class="text-xs font-semibold tracking-wide uppercase">
              {{ t('create_account') }}
            </span>
            <span class="text-sm text-gray-500">
              Vitae sed mi luctus laoreet.
            </span>
          </span>
        </a>
      </li>

      <li class="relative pb-10">
        <!-- Current Step -->
        <div
          class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
          aria-hidden="true"
        />
        <a href="#" class="relative flex items-start group" aria-current="step">
          <span class="flex items-center h-9" aria-hidden="true">
            <span
              class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full border-primary-600"
            >
              <span class="h-2.5 w-2.5 bg-primary-600 rounded-full" />
            </span>
          </span>

          <span class="flex flex-col min-w-0 ml-4">
            <span
              class="text-xs font-semibold tracking-wide uppercase text-primary-600"
            >
              {{ t('profile_information') }}
            </span>
            <span class="text-sm text-gray-500">
              Cursus semper viverra facilisis et et some more.
            </span>
          </span>
        </a>
      </li>

      <li class="relative pb-10">
        <div
          class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
          aria-hidden="true"
        />
        <a href="#" class="relative flex items-start group">
          <span class="flex items-center h-9" aria-hidden="true">
            <span
              class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
              />
            </span>
          </span>
          <span class="flex flex-col min-w-0 ml-4">
            <span
              class="text-xs font-semibold tracking-wide text-gray-500 uppercase"
            >
              {{ t('business_information') }}</span
            >
            <span class="text-sm text-gray-500">Penatibus eu quis ante.</span>
          </span>
        </a>
      </li>

      <li class="relative pb-10">
        <div
          class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
          aria-hidden="true"
        />
        <a href="#" class="relative flex items-start group">
          <span class="flex items-center h-9" aria-hidden="true">
            <span
              class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
              />
            </span>
          </span>
          <span class="flex flex-col min-w-0 ml-4">
            <span
              class="text-xs font-semibold tracking-wide text-gray-500 uppercase"
            >
              {{ t('theme') }}</span
            >
            <span class="text-sm text-gray-500">Faucibus nec enim leo et.</span>
          </span>
        </a>
      </li>

      <li class="relative">
        <a href="#" class="relative flex items-start group">
          <span class="flex items-center h-9" aria-hidden="true">
            <span
              class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
              />
            </span>
          </span>
          <span class="flex flex-col min-w-0 ml-4">
            <span
              class="text-xs font-semibold tracking-wide text-gray-500 uppercase"
            >
              {{ t('preview') }}
            </span>
            <span class="text-sm text-gray-500">
              Iusto et officia maiores porro ad non quas.
            </span>
          </span>
        </a>
      </li>
    </ol>
  </nav>
</template>
