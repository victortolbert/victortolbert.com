<!-- @vue-ignore -->
<script lang="ts">
import {defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
// import { useAxios } from '@vueuse/integrations'
// import { useFetch } from '@vueuse/core'
import {launchConfetti} from '~/helpers/confetti'
import {formatRelative} from 'date-fns'

export default defineComponent({
  setup() {
    // const url = ref('https://api.victortolbert.com/resources')

    const state = reactive({
      resources: [],
    });

    onMounted(async () => {
      const response = await fetch('https://api.victortolbert.com/resources')

      state.resources = await response.json()
    })

    return {
      ...toRefs(state),
    };
  },
  methods: {
    handleCelebration() {
      launchConfetti()
    },
    formatDate(date) {
      return formatRelative(new Date(date), new Date())
    },
  },
})
</script>


<template>
  <PageWrapper>
    <!-- <pre class="text-xs">{{ resources }}</pre> -->

    <SectionWrapper>
      <ResourceAutocompleteField />
    </SectionWrapper>

    <SectionWrapper class="max-w-xs mt-8">
      <div class="flex items-center justify-between mt-8 text-sm text-gray-400">
        <p>Design</p>
        <p>3/8</p>
      </div>
      <div class="w-full h-3 mt-1 rounded-full bg-primary-100">
        <div
          class="w-1/3 h-full text-xs text-center text-white rounded-full bg-primary-400"
        />
      </div>
    </SectionWrapper>

    <SectionWrapper
      v-if="resources.length"
      class="w-full max-w-3xl mt-8 space-y-8 lg:max-w-7xl"
    >
      <div class="flex w-full" v-for="resource in resources" :key="resource.id">
        <div
          class="flex flex-col items-center flex-shrink-0 w-16 pt-2 mr-4 space-y-1"
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="['video'].includes(resource.filetype.toLowerCase())"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
            <path
              v-if="['pdf', 'word'].includes(resource.filetype.toLowerCase())"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />

            <path
              v-if="['powerpoint'].includes(resource.filetype.toLowerCase())"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
          <span>{{ resource.filetype }}</span>
        </div>
        <div class="w-full">
          <div class="flex items-center justify-between w-full">
            <h4 class="flex-1 text-lg font-bold">
              <a :href="resource.fileUrl" target="_blank">
                {{ resource.title }}
              </a>
            </h4>
            <OButton
              tag="a"
              target="_blank"
              :href="`http://resources.ga-sps.org/panel/pages/${resource.slug}/edit`"
            >
              Edit
            </OButton>
          </div>
          <div class="w-full mt-1">
            <div>{{ resource.description }}</div>
            <ul class="flex flex-wrap items-center mt-2">
              <li :key="tag" v-for="tag in JSON.parse(resource.tags)">
                <span
                  class="inline-flex mr-3 flex-wrap uppercase whitespace-nowrap tracking-wide items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                >
                  {{ tag }}
                </span>
              </li>
            </ul>
            <div class="flex items-center w-full mt-3 space-x-4 text-xs">
              <div>
                <span class="text-xs font-medium tracking-wide uppercase">
                  Published
                </span>
                {{ formatDate(resource.published_at) }}
              </div>
              <div>
                <span class="text-xs font-medium tracking-wide uppercase">
                  Last Modified
                </span>
                {{ formatDate(resource.modified_at) }}
              </div>
              <div v-if="false">
                <span class="text-xs font-medium tracking-wide uppercase">
                  Author
                </span>
                {{ resource.author }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </PageWrapper>
</template>
