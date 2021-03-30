<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { ternary } from 'vue-chemistry'
import { useIntersectionObserver } from '@vueuse/core'

// const msg = ref('I will change')

const root = ref(null)
const target = ref(null)
const isVisible = ref(false)
useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting
  },
  { root },
)
const text = ternary(isVisible, 'inside', 'outside')

const name = ref('')
const quote = ref('')
const quoteType = ref('')

const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
}

// const handleEnter = () => console.log('enter')
// const handleLeave = () => console.log('leave')

const getQuote = async () => {
  // get the type of quote from one fetch call, everything else waits for this to finish
  let quoteTypeResponse = await fetch(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/quotes.json`)
  quoteType.value = await quoteTypeResponse.json()

    // use what we got from the first call in the second call to an API, everything else waits for this to finish
  let quoteResponse = await fetch("https://programming-quotes-api.herokuapp.com/quotes/" + quoteType.value.type)
  quote.value = await quoteResponse.json()

  // finish up
  console.log('done')
}


const { t } = useI18n()
</script>

<template>
  <PageWrapper>
      <PageHeading>Home Page</PageHeading>

      <SectionWrapper>
        <HelloWorld msg="Hello Vue 3, Vite, Tailwind CSS, and Laravel" />
        <RandomProgrammingQuote />

        <a href="#" class="group flex items-center text-sm text-gray-500 hover:text-gray-900 space-x-2.5">
          <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/question-mark-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
          </svg>
          <span>
            Learn more about sharing
          </span>
        </a>

        <!-- <FileMetadata /> -->
        <!-- <vti-DefinitionList /> -->
        <!-- <vti-FormField /> -->
        <!-- <vti-FormTextarea /> -->
        <!-- <vti-SelectMenu /> -->
        <!-- <PrivacyFieldset /> -->
        <!-- <OButton>Testing</OButton> -->
        <!-- <OField label="Auto sizing textarea">
          <TextareaAutosize v-model="text"></TextareaAutosize>
        </OField> -->

        <OField label="Name">
          <OInput
            id="input"
            v-model="name"
            :placeholder="t('intro.whats-your-name')"
            :aria-label="t('intro.whats-your-name')"
            type="text"
            autocomplete="false"
            class="px-4 py-2 text-sm bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700"
            style="width: 250px"
            @keydown.enter="go"
          />
        </OField>

        <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

        {{ quote}}
        <button @click="getQuote">Get Quote</button>

        <div>
          <OButton
            class="m-3 text-sm btn"
            :disabled="!name"
            @click="go"
          >{{ t('button.go') }}</OButton>
        </div>

          <div ref="root" class="root">
            <p class="notice">
              Scroll me down!
            </p>
            <div ref="target" class="target">
              <p>Hello world!</p>
            </div>
          </div>
          <div class="text-center">
            Element <b>{{ text }}</b> the viewport
          </div>

        <vti-DefinitionList />

      </SectionWrapper>
  </PageWrapper>
</template>

<route lang="yaml">
meta:
  layout: home
</route>


<style scoped>
.root {
  border: 2px dashed #ccc;
  height: 200px;
  margin: 0 2rem 1rem;
  overflow-y: scroll;
}
.notice {
  text-align: center;
  padding: 2em 0;
  margin-bottom: 300px;
  font-style: italic;
  font-size: 1.2rem;
  opacity: 0.8;
}
.target {
  border: 2px dashed black;
  padding: 10px;
  max-height: 150px;
  margin: 0 2rem 1rem;
  margin-bottom: 400px;
}
</style>
