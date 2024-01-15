<script setup lang="ts">
// import { useDateFormat, useNow } from '@vueuse/core'
const formatter = ref('YYYY')
const showWorkLocation = ref(false)
// https://github.com/buk0vec/jcv
definePageMeta({
  title: 'Resume',
  breadcrumb: 'Resume',
  // layout: false,
})

interface Resume {
  basics: {
    name: string
    label: string
    url: string
    location: {
      address: string
      city: string
      region: string
      postalCode: string
      countryCode: string
    }
    summary: string
  }
  work: {
    name: string
    location: string
    position: string
    startDate: string
    endDate: string
    description: string
    summary: string
    highlights: string[]
  }[]
  education: {
    institution: string
    studyType: string
    endDate: string
    area: string
  }[]
  skills: {
    name: string
    level: string
    keywords: string[]
  }[]
  languages: {
    language: string
    fluency: string
  }[]
  interests: {
    name: string
    keywords: string[]
  }[]
  references: {
    name: string
    reference: string
  }[]
}

function formatDate(date: string) {
  return useDateFormat(date, formatter).value
}

const { data: resume } = await useAsyncData(
  'home',
  () => queryContent('/resume').findOne(),
)
</script>

<template>
  <div class="relative mx-auto scroll-my-12 overflow-auto p-4 container md:p-16 print:p-12">
    <main class="mx-auto max-w-2xl w-full space-y-8 print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">
            {{ resume?.basics.name }}
          </h1>
          <p class="text-pretty text-muted-foreground max-w-md text-sm font-mono">
            {{ resume?.basics.label }}
          </p>
          <p class="text-pretty text-muted-foreground max-w-md items-center text-xs font-mono">
            <span class="inline-flex gap-x-1.5 align-baseline leading-none">
              <div class="i-ph-globe-simple-duotone text-xs" />
              {{ resume?.basics.location.city }},
              {{ resume?.basics.location.region }}
            </span>
          </p>
        </div>
        <span class="relative h-28 w-28 flex shrink-0 overflow-hidden rounded-xl">
          <img class="aspect-square h-full w-full" :src="resume?.basics.image" alt="Victor Tolbert">
        </span>
      </div>

      <section class="min-h-0 flex flex-col gap-y-3">
        <h2 class="text-xl font-bold">
          About
        </h2>
        <p class="text-pretty text-muted-foreground text-sm font-mono">
          {{ resume?.basics.summary }}
        </p>
      </section>

      <section class="min-h-0 flex flex-col gap-y-3">
        <h2 class="text-xl font-bold">
          Work Experience
        </h2>
        <div v-for="work in resume?.work" :key="work.startDate" class="bg-card text-card-foreground rounded-lg">
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a class="hover:underline"> {{ work.name }}</a>
                <span v-if="showWorkLocation" class="inline-flex gap-x-1">{{ work.location }} </span>
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {{ formatDate(work.startDate) }} - {{ formatDate(work.endDate) }}
              </div>
            </div>
            <h4 class="text-sm leading-none font-mono">
              {{ work.position }}
            </h4>
          </div>
          <div class="text-pretty text-muted-foreground mt-2 text-xs font-mono">
            {{ work.summary }}
            <ul class="ml-3 mt-2 list-disc list-outside">
              <li v-for="(highlight, i) in work.highlights" :key="i">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="min-h-0 flex flex-col gap-y-3">
        <h2 class="text-xl font-bold">
          Education
        </h2>
        <ul>
          <li v-for="study in resume?.education" :key="study.area" class="flex justify-between">
            <span>{{ study.institution }} {{ study.studyType }} </span>
            <span>{{ study.endDate }}</span>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>
