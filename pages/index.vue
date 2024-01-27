<script setup>
// import { camelCase, flatCase, kebabCase, lowerFirst, pascalCase, snakeCase, splitByCase, trainCase, upperFirst } from 'scule'

definePageMeta({
  title: 'Resume',
  breadcrumb: 'Resume',
})

defineOgImageComponent('NuxtSeo')

// defineOgImageComponent('NuxtSeo', {
//   title: 'Hello OG Image 👋',
//   description: 'Look what at me in dark mode',
//   theme: '#ff0000',
//   colorMode: 'dark',
// })

const { data: resume } = await useAsyncData('home', () => queryContent('/').findOne())
const formatter = ref('YYYY')

const showFooter = ref(true)
const showWorkLocation = ref(false)

const icons = {
  LinkedIn: 'i-ph-linkedin-logo-duotone',
  GitHub: 'i-ph-github-logo-duotone',
  Twitter: 'i-ph-twitter-logo-duotone',
  Instagram: 'i-ph-instagram-logo-duotone',
  CodePen: 'i-ph-codepen-logo-duotone',
}

function formatDate(date) {
  return useDateFormat(date, formatter).value
}
</script>

<template>
  <div class="w-full relative mx-auto print:p-12 font-mono">
    <main class="w-full space-y-8 print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl">
            {{ resume?.basics.name }}
          </h1>
          <div class="text-pretty text-muted-foreground max-w-md text-lg">
            {{ resume?.basics.label }}
            <div
              class="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden"
            >
              <ul
                class="block text-left leading-tight [&_li]:block animate-text-slide"
              >
                <li class="text-neutral-500">
                  Frontend
                </li>
                <li class="text-neutral-500">
                  Fullstack
                </li>
                <li class="text-[#42b883]">
                  Vue.js
                </li>
                <li class="text-[#7cbb00]">
                  C# / .NET
                </li>
                <li class="text-[#f7df1e]">
                  JavaScript
                </li>
                <li class="text-[#00a1f1]">
                  DevOps
                </li>
              </ul>
            </div>
          </div>
          <p class="text-pretty text-muted-foreground max-w-md items-center text-xs">
            <span class="inline-flex gap-x-1.5 align-baseline leading-none">
              <UIcon name="i-ph-globe-simple-duotone" />
              {{ resume?.basics.location.city }},
              {{ resume?.basics.location.region }}
            </span>
          </p>
          <div class="text-muted-foreground flex gap-x-1 pt-1 text-sm print:hidden">
            <UButton
              color="gray"
              variant="outline"
              :to="`mailto:${resume?.basics.email}`"
              icon="i-ph-envelope-duotone"
            />
            <UButton
              color="gray"
              variant="outline"
              :to="`tel:${resume?.basics.phone}`"
              icon="i-ph-phone-duotone"
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
          <img class="aspect-square h-full w-full grayscale" :src="resume?.basics.image" alt="Victor Tolbert">
        </span>
      </div>

      <section class="min-h-0 flex flex-col gap-y-4">
        <h2 class="text-xl">
          About
        </h2>
        <p class="text-pretty text-muted-foreground text-sm">
          {{ resume?.basics.summary }}
        </p>
      </section>

      <section class="flex min-h-0 flex-col gap-y-4">
        <h2 class="text-xl">
          Key Skills
        </h2>

        <div class="flex flex-wrap gap-1">
          <template v-for="skill in resume?.skills" :key="`skill-${skill}`">
            <UBadge color="black" variant="solid">
              {{ skill.name }}
            </UBadge>
            <UBadge v-for="keyword in skill.keywords" :key="`keyword-${keyword}`" color="gray" variant="solid">
              {{ keyword }}
            </UBadge>
          </template>
        </div>
      </section>

      <section class="min-h-0 flex flex-col gap-y-4">
        <h2 class="text-xl">
          Work Experience
        </h2>
        <div v-for="work in resume?.work" :key="work.startDate" class="bg-card text-card-foreground rounded-lg">
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 leading-none">
                <NuxtLink target="_blank" :to="work.url" class="hover:underline">
                  {{ work.name }}
                </NuxtLink>
                <span v-if="showWorkLocation" class="inline-flex gap-x-1">{{ work.location }} </span>
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {{ formatDate(work.startDate) }}&ndash;{{ formatDate(work.endDate) }}
              </div>
            </div>
            <h4 class="text-sm leading-none">
              {{ work.position }}
            </h4>
          </div>
          <div class="text-pretty text-muted-foreground mt-3 text-xs">
            {{ work.summary }}
            <ul class="ml-3 mt-2 list-disc list-outside">
              <li v-for="(highlight, i) in work.highlights" :key="i">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="min-h-0 flex flex-col gap-y-4">
        <h2 class="text-xl">
          Education
        </h2>
        <div v-for="study in resume?.education" :key="study.area" class="rounded-lg bg-card text-card-foreground">
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 leading-none">
                <NuxtLink target="_blank" :to="study.url" class="hover:underline">
                  {{ study.institution }}
                </NuxtLink>
              </h3>

              <div class="text-sm tabular-nums text-gray-500">
                {{ formatDate(study.endDate) }}
              </div>
            </div>
          </div>
          <div class="text-pretty text-sm text-muted-foreground mt-3">
            <div>{{ study.studyType }}, {{ study.area }}</div>
          </div>
        </div>
      </section>

      <section class="flex min-h-0 flex-col gap-y-4">
        <h2 class="text-xl">
          Interests
        </h2>
        <div class="flex flex-wrap gap-1">
          <template v-for="interest in resume?.interests" :key="`interest-${interest}`">
            <UBadge color="black" variant="solid">
              {{ interest.name }}
            </UBadge>
            <UBadge v-for="keyword in interest.keywords" :key="`keyword-${keyword}`" color="gray" variant="solid">
              {{ keyword }}
            </UBadge>
          </template>
        </div>
      </section>

      <section class="flex min-h-0 flex-col gap-y-4">
        <h2 class="text-xl">
          References
        </h2>
        <div v-for="reference in resume?.references" :key="reference.name" class="rounded-lg bg-card text-card-foreground">
          <div class="flex flex-col space-y-1.5">
            <h3 class="leading-none">
              {{ reference.name }}
            </h3>
          </div>
          <div class="text-pretty text-muted-foreground mt-3 text-xs">
            {{ reference.reference }}
          </div>
        </div>
      </section>
    </main>

    <!-- {{ trainCase(kebabCase(snakeCase('CustomerProfile'))) }}
    {{ trainCase(kebabCase(pascalCase('customer_profile'))) }}
    {{ trainCase(kebabCase(camelCase('OnPaste'))) }} -->

    <!-- <img src="http://example.com/image.jpg" alt="Example of a broken image"> -->

    <UIcon name="i-ph-student-duotone" />

    <!-- https://www.instagram.com/reel/C0ZHPsitNWr/?igshid=ZDE1MWVjZGVmZQ%3D%3D -->

    <Youtube id="ZrZv3JpOr2g" class="w-full" />
    <!-- <Youtube id="I5mGNB-4f0o" class="w-full" /> -->
    <!-- <Youtube id="-BYZAO99UVA" class="w-full" /> -->
    <!-- <Youtube id="Mqu-yZWce8c" class="w-full" /> -->
    <!-- <Youtube id="mv0WcBABcIk" class="w-full" /> -->

    <!-- <Tweet id="1390115482657726468" /> -->
    <Tweet id="1720482508419088594" />

    <section class="flex items-center gap-1.5">
      <UIcon name="i-logos-css-3" class="grayscale hover:grayscale-0" />
      <UIcon name="i-logos-bootstrap" class="grayscale hover:grayscale-0" />
      <UIcon name="i-logos-bulma" class="grayscale hover:grayscale-0" />
      <UIcon name="i-logos-tailwindcss-icon" class="grayscale hover:grayscale-0" />
    </section>

    <p v-if="showFooter" class="fixed bottom-0 left-0 right-0 border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden">
      Press <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100"><span class="text-xs">⌘</span>K</kbd> to open the command menu
    </p>
  </div>
</template>
