<script setup>
// import { camelCase, flatCase, kebabCase, lowerFirst, pascalCase, snakeCase, splitByCase, trainCase, upperFirst } from 'scule'

definePageMeta({
  title: 'Resume',
  breadcrumb: 'Resume',
})

const open = ref(true)

defineShortcuts({
  o: () => open.value = !open.value,
})

defineOgImageComponent('NuxtSeo')

// defineOgImageComponent('NuxtSeo', {
//   title: 'Hello OG Image 👋',
//   description: 'Look what at me in dark mode',
//   theme: '#ff0000',
//   colorMode: 'dark',
// })

const { metaSymbol } = useShortcuts()

const { data: resume } = await useAsyncData('home', () => queryContent('/').findOne())
const formatter = ref('YYYY')

const showFooter = ref(true)
const showStudyDates = ref(false)
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
    <section class="grid gap-16">
      <!--
        https://www.instagram.com/reel/C0ZHPsitNWr/?igshid=ZDE1MWVjZGVmZQ%3D%3D

        https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3
      -->
      <figure>
        <Youtube
          id="ZrZv3JpOr2g"
          class="aspect-video rounded-xl w-full bg-gray-50 object-cover"
        />
        <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
          <UIcon
            name="i-ph-info-duotone"
            class="mt-0.5 h-5 w-5 flex-none"
            aria-hidden="true"
          />
          Brown Eyed Lover&mdash;Allen Stone
        </figcaption>
      </figure>

      <!-- <Youtube id="I5mGNB-4f0o" class="w-full" /> -->
      <!-- <Youtube id="-BYZAO99UVA" class="w-full" /> -->
      <!-- <Youtube id="Mqu-yZWce8c" class="w-full" /> -->
      <!-- <Youtube id="mv0WcBABcIk" class="w-full" /> -->
      <!-- <Tweet id="1390115482657726468" /> -->

      <!--
      What We Can Learn About Testing From The Wheel - Kent C. Dodds (Ignite Fluent 2016)
      O'Reilly
      May 23, 2018
    -->

      <figure>
        <Youtube
          id="Da9wfQ0frGA"
          class="aspect-video rounded-xl w-full bg-gray-50 object-cover"
        />

        <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
          <UIcon
            name="i-ph-info-duotone"
            class="mt-0.5 h-5 w-5 flex-none"
            aria-hidden="true"
          />

          <UPopover mode="hover">
            <span class="hover:underline">What We Can Learn About Testing From The Wheel - Kent C. Dodds</span>

            <template #panel>
              <div class="p-4">
                This is the panel content
              </div>
            </template>
          </UPopover>
        </figcaption>
      </figure>

      <figure>
        <Tweet id="1720482508419088594" />

        <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
          <UIcon
            name="i-ph-info-duotone"
            class="mt-0.5 h-5 w-5 flex-none"
            aria-hidden="true"
          />
          What We Can Learn About Testing From The Wheel - Kent C. Dodds
        </figcaption>
      </figure>
    </section>

    <main class="w-full space-y-8 print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl">
            {{ resume?.basics.name }} {{ open }}
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
          <img class="aspect-square h-full w-full object-cover grayscale" :src="resume?.basics.image" alt="Victor Tolbert">
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
        <div v-for="(work, index) in resume?.work" :key="work.startDate" class="bg-card text-card-foreground rounded-lg">
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 leading-none">
                <NuxtLink target="_blank" :to="work.url" class="hover:underline">
                  {{ work.name }}
                </NuxtLink>
                <span v-if="showWorkLocation" class="inline-flex gap-x-1">{{ work.location }} </span>
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {{ formatDate(work.startDate) }}&ndash;{{ index === 0 ? 'Present' : formatDate(work.endDate) }}
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

              <div v-if="showStudyDates" class="text-sm tabular-nums text-gray-500">
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

    <section class="mt-16">
      <!-- {{ trainCase(kebabCase(snakeCase('CustomerProfile'))) }}
      {{ trainCase(kebabCase(pascalCase('customer_profile'))) }}
      {{ trainCase(kebabCase(camelCase('OnPaste'))) }} -->
      <!-- <img src="http://example.com/image.jpg" alt="Example of a broken image"> -->
      <UIcon name="i-ph-student-duotone" />
    </section>

    <section class="mt-16">
      <UIcon name="i-ph-control-duotone" />
      <UIcon name="i-ph-option-duotone" />
      <UIcon name="i-ph-command-duotone" />
      <UIcon name="i-ph-windows-logo-duotone" />
      <UKbd size="md">
        ^
      </UKbd>
      <UKbd size="md">
        &and;
      </UKbd>
      <UKbd size="md">
        &Lambda;
      </UKbd>
      <UKbd size="md">
        ⌥
      </UKbd>
      <UKbd size="md">
        ⇧
      </UKbd>
      <UKbd>
        <UIcon name="i-ph-control-duotone" size="md" />
      </UKbd>
      <UKbd>
        <UIcon name="i-ph-option-duotone" size="md" />
      </UKbd>
      <UKbd>
        <UIcon name="i-ph-command-duotone" size="md" />
      </UKbd>
      <UKbd>
        <UIcon name="i-ph-windows-logo-duotone" size="md" />
      </UKbd>
      <div class="flex items-center gap-0.5">
        <UKbd>{{ metaSymbol }}</UKbd>
        <UKbd>K</UKbd>
      </div>
    </section>

    <section class="mt-16">
      <div>
        <a href="#" class="inline-block">
          <span class="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium bg-pink-100 text-pink-800">Video</span>
        </a>
      </div>
      <a href="#" class="mt-4 block">
        <p class="text-xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>
        <p class="mt-3 text-base text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
      </a>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href="#">
            <span class="sr-only">Dessie Ryan</span>
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            <a href="#">Dessie Ryan</a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time datetime="2020-03-10">Mar 10, 2020</time>
            <span aria-hidden="true">·</span>
            <span>4 min read</span>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-16">
      <ul>
        <li>English (US)</li>
        <li>Español</li>
        <li>Português (Brasil)</li>
        <li>Deutsch</li>
        <li>ಕನ್ನಡ</li>
      </ul>
    </section>

    <p v-if="showFooter" class="fixed bottom-0 left-0 right-0 border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden">
      Press <span class="pointer-events-none inline-flex h-5 select-none items-center gap-1"><UKbd>{{ metaSymbol }}</UKbd><UKbd>K</UKbd></span> to open the command menu
    </p>
  </div>
</template>
