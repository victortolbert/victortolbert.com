<script setup>
// https://github.com/buk0vec/jcv

const formatter = ref('YYYY')
const showWorkLocation = ref(false)
const showFooter = ref(false)

definePageMeta({
  title: 'Resume',
  breadcrumb: 'Resume',
  // layout: false,
})

function formatDate(date) {
  return useDateFormat(date, formatter).value
}

const { data: resume } = await useAsyncData(
  'home',
  () => queryContent('/').findOne(),
)
const icons = {
  LinkedIn: 'i-ph-linkedin-logo-duotone',
  GitHub: 'i-ph-github-logo-duotone',
  Twitter: 'i-ph-twitter-logo-duotone',
  Instagram: 'i-ph-instagram-logo-duotone',
}
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
              <UIcon name="i-ph-globe-simple-duotone" />
              {{ resume?.basics.location.city }},
              {{ resume?.basics.location.region }}
            </span>
          </p>
          <div class="text-muted-foreground flex gap-x-1 pt-1 text-sm font-mono print:hidden">
            <UButton
              color="gray"
              variant="outline"
              :to="`mailto:${resume?.basics.email}`"
              icon="i-ph-envelope-duotone"
            />
            <UButton
              v-for="social in resume?.basics.profiles"
              :key="social.network"
              variant="outline"
              color="gray"
              :to="social.url"
              :icon="icons[social.network]"
              target="_blank"
            />
          </div>
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
        <div v-for="study in resume?.education" :key="study.area" class="rounded-lg bg-card text-card-foreground">
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="font-semibold leading-none">
                {{ study.institution }}
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {{ formatDate(study.endDate) }}
              </div>
            </div>
          </div>
          <div class="text-pretty font-mono text-sm text-muted-foreground mt-2">
            <div>{{ study.studyType }}, {{ study.area }}</div>
          </div>
        </div>
      </section>

      <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">
          Skills
        </h2>

        <div class="flex flex-wrap gap-1">
          <template v-for="skill in resume?.skills" :key="`skill-${skill}`">
            <UBadge color="primary" variant="solid">
              {{ skill.name }}
            </UBadge>
            <UBadge v-for="keyword in skill.keywords" :key="`keyword-${keyword}`" color="primary" variant="subtle">
              {{ keyword }}
            </UBadge>
          </template>
        </div>
      </section>

      <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">
          Interests
        </h2>
        <div class="flex flex-wrap gap-1">
          <template v-for="interest in resume?.interests" :key="`interest-${interest}`">
            <UBadge color="primary" variant="solid">
              {{ interest.name }}
            </UBadge>
            <UBadge v-for="keyword in interest.keywords" :key="`keyword-${keyword}`" color="primary" variant="subtle">
              {{ keyword }}
            </UBadge>
          </template>
        </div>
      </section>

      <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">
          References
        </h2>
        <div v-for="reference in resume?.references" :key="reference.name" class="rounded-lg bg-card text-card-foreground">
          <div class="flex flex-col space-y-1.5">
            <h3 class="font-semibold leading-none">
              {{ reference.name }}
            </h3>
          </div>
          <div class="text-pretty font-mono text-muted-foreground mt-2 text-xs">
            {{ reference.reference }}
          </div>
        </div>
      </section>
    </main>
    <p v-if="showFooter" class="fixed bottom-0 left-0 right-0 border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden">
      Press <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span class="text-xs">⌘</span>J</kbd> to open the command menu. Hosted by <a href="/" class="underline hover:opacity-80">jcv</a>.
    </p>
  </div>
</template>
