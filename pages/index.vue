<script setup>
import { kebabCase } from 'lodash-es'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

definePageMeta({
  title: 'Resume',
  breadcrumb: 'Resume',
})

const isOpen = ref(false)

defineShortcuts({
  o: () => isOpen.value = !isOpen.value,
})

defineOgImageComponent('NuxtSeo')

// defineOgImageComponent('NuxtSeo', {
// résumé
//   title: 'Hello OG Image 👋',
//   description: 'Look what at me in dark mode',
//   theme: '#ff0000',
//   colorMode: 'dark',
// })

const { metaSymbol } = useShortcuts()

// curl -v \
//   -H 'Authorization: Bearer ae5f1927db0665defb0acbcf9540122f' \
//   https://api.coverr.co/videos

// curl -v \
//   -H 'Authorization: Bearer ae5f1927db0665defb0acbcf9540122f' \
//   https://api.coverr.co/videos\?query\=dog

const { data: resume } = await useAsyncData('home', () => queryContent('/').findOne())
const formatter = ref('YYYY')

const showFooter = ref(false)
const showStudyDates = ref(false)
const showWorkLocation = ref(false)

const icons = {
  LinkedIn: 'i-ph-linkedin-logo-duotone',
  GitHub: 'i-ph-github-logo-duotone',
  Twitter: 'i-ph-twitter-logo-duotone',
  Instagram: 'i-ph-instagram-logo-duotone',
  CodePen: 'i-ph-codepen-logo-duotone',
  Trailhead: 'i-mdi-salesforce',
}

function formatDate(date) {
  return useDateFormat(date, formatter).value
}

const exceptions = [
  { name: '.NET', url: '/dotnet' },
  { name: 'AngularJS', url: '/angularjs' },
  { name: 'Amazon Web Services', url: '/aws' },
  { name: 'ASP.NET Core', url: '/aspnetcore' },
  { name: 'C#', url: '/csharp' },
  { name: 'Express.js', url: '/express' },
  { name: 'JavaScript', url: '/javascript' },
  { name: 'jQuery', url: '/jquery' },
  { name: 'MySQL', url: '/mysql' },
  { name: 'Next.js', url: '/nextjs' },
  { name: 'Node.js', url: '/nodejs' },
  { name: 'PostgreSQL', url: '/postgres' },
  { name: 'Responsive Design', url: '/rwd' },
  { name: 'Progressive Web Apps', url: '/pwa' },
  { name: 'Tailwind CSS', url: '/tailwind' },
  { name: 'TypeScript', url: '/typescript' },
  { name: 'Vue.js', url: '/vue' },
  { name: 'WordPress', url: '/wordpress' },
  { name: 'Microsoft Azure', url: '/azure' },
  { name: 'Google Cloud', url: '/gcp' },
  { name: 'Google Cloud Platform', url: '/gcp' },
]

const urlMapping = {}
exceptions.forEach((exception) => {
  urlMapping[exception.name] = exception.url
})

const people = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
  { id: 7, label: 'Caroline Schultz' },
  { id: 8, label: 'Mason Heaney' },
  { id: 9, label: 'Claudie Smitham' },
  { id: 10, label: 'Emil Schaefer' },
]

const selected = ref([people[3]])

const slidesPerView = ref(1)
const loop = ref(true)
const autoplay = ref({ delay: 3000, disableOnInteraction: true })
const creativeEffect = ref({ prev: { shadow: false, translate: ['-20%', 0, -1] }, next: { translate: ['100%', 0, 0] } })
const effect = ref('creative')

const now = new Date()
const newYear = new Date(now.getFullYear() + 1, 0, 1)

// const time = ref(newYear.getTime() - now.getTime())
const time = ref(newYear - now)

console.log('2025-01-01 12:00:00'.split(' ')[0])
</script>

<template>
  <div class="w-full relative mx-auto max-w-3xl print:p-12">
    <main class="w-full space-y-8 print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-3xl">
            {{ resume?.basics.name }}
          </h1>
          <div class="text-pretty text-muted-foreground max-w-md text-xl">
            <span>{{ resume?.basics.label }}</span>
            <div
              class="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden"
            >
              <ul
                class="block text-left leading-tight [&_li]:block animate-text-slide"
              >
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>Nuxt</li>
                <li>ASP.NET Core</li>
                <li>Salesforce</li>
                <li>Laravel</li>
              </ul>
            </div>
          </div>
          <p class="text-pretty text-muted-foreground max-w-md items-center text-sm">
            <span class="inline-flex gap-x-1.5 align-baseline leading-none">
              <UIcon name="i-ph-globe-simple-duotone" />
              {{ resume?.basics.location.city }},
              {{ resume?.basics.location.region }}
            </span>
          </p>
          <div class="text-muted-foreground flex gap-x-1 pt-1 text-base print:hidden">
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
            >
              <span class="sr-only">{{ social.network }}</span>
            </UButton>
          </div>
        </div>
        <NuxtLink to="/about" class="relative h-28 w-28 flex shrink-0 overflow-hidden rounded-xl">
          <img class="aspect-square h-full w-full object-cover grayscale hover:grayscale-0" :src="resume?.basics.image" alt="Victor Tolbert">
        </NuxtLink>
      </div>

      <section class="min-h-0 flex flex-col gap-y-4">
        <h2 class="text-2xl">
          About
        </h2>
        <p class="text-pretty text-muted-foreground text-base">
          {{ resume?.basics.summary }}
        </p>
      </section>

      <section class="flex min-h-0 flex-col gap-y-4">
        <h2 class="text-2xl">
          Key Skills
        </h2>

        <div class="flex flex-wrap gap-1">
          <template v-for="skill in resume?.skills" :key="`skill-${skill}`">
            <NuxtLink :to="`/${kebabCase(skill.name.toLowerCase())}`">
              <UBadge color="primary" variant="solid">
                {{ skill.name }}
              </UBadge>
            </NuxtLink>
            <!-- skill.keywords.map((k) => urlMapping[k] || kebabCase(k)) -->
            <NuxtLink
              v-for="keyword in skill.keywords.map((k) => ({ url: urlMapping[k] || kebabCase(k), label: k }))"
              :key="`keyword-${keyword.keyword}`"
              :to="keyword.url"
            >
              <UBadge color="gray" variant="solid">
                {{ keyword.label }}
              </UBadge>
            </NuxtLink>
          </template>
        </div>
      </section>

      <section class="min-h-0 flex flex-col gap-y-4">
        <h2 class="text-2xl">
          Work Experience
        </h2>
        <div v-for="(work, index) in resume?.work" :key="work.startDate">
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 leading-none">
                <NuxtLink :to="work.url" class="hover:underline">
                  {{ work.name }}
                </NuxtLink>
                <span v-if="showWorkLocation" class="inline-flex gap-x-1">{{ work.location }} </span>
              </h3>
              <div class="text-base tabular-nums text-gray-500">
                {{ formatDate(work.startDate) }}&ndash;{{ index === resume?.work.length - 1 ? 'Present' : formatDate(work.endDate) }}
              </div>
            </div>
            <h4 class="text-base leading-none">
              {{ work.position }}
            </h4>
          </div>
          <div class="text-pretty text-muted-foreground mt-3 text-sm">
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
        <h2 class="text-2xl">
          Education
        </h2>
        <div v-for="study in resume?.education" :key="study.area">
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 leading-none">
                <NuxtLink target="_blank" :to="study.url" class="hover:underline">
                  {{ study.institution }}
                </NuxtLink>
              </h3>

              <div v-if="showStudyDates" class="text-base tabular-nums text-gray-500">
                {{ formatDate(study.endDate) }}
              </div>
            </div>
          </div>
          <div class="text-pretty text-base text-muted-foreground mt-3">
            <div>{{ study.studyType }}, {{ study.area }}</div>
          </div>
        </div>
      </section>

      <section class="flex min-h-0 flex-col gap-y-4">
        <h2 class="text-2xl">
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
        <h2 class="text-2xl">
          References
        </h2>
        <div v-for="reference in resume?.references" :key="reference.name">
          <div class="flex flex-col space-y-1.5">
            <h3 class="leading-none">
              {{ reference.name }}
            </h3>
          </div>
          <div class="text-pretty text-muted-foreground mt-3 text-sm">
            {{ reference.reference }}
          </div>
        </div>
      </section>
    </main>

    <div v-if="false" class="grid gap-16">
      <section>
        <div>
          <UButton label="Open" @click="isOpen = true" />
          <UModal v-model="isOpen">
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              <template #header>
                <Placeholder class="h-8" />
              </template>
              <Placeholder class="h-32" />
              <template #footer>
                <Placeholder class="h-8" />
              </template>
            </UCard>
          </UModal>
        </div>
      </section>

      <section v-if="false">
        <UTooltip text="Tooltip example" :shortcuts="['⌘', 'O']">
          <UButton color="gray" label="Hover me" />
        </UTooltip>
      </section>

      <section v-if="false">
        <UCard>
          <template #header>
            <Placeholder class="h-8" />
          </template>
          <Placeholder class="h-32" />
          <template #footer>
            <Placeholder class="h-8" />
          </template>
        </UCard>
      </section>

      <section v-if="false">
        <div class="flex items-center space-x-4">
          <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
          <div class="space-y-2">
            <USkeleton class="h-4 w-[250px]" />
            <USkeleton class="h-4 w-[200px]" />
          </div>
        </div>
      </section>

      <section v-if="false">
        <UButton label="Open" @click="isOpen = true" />

        <UModal v-model="isOpen">
          <div class="p-4">
            <Placeholder class="h-48" />
          </div>
        </UModal>
      </section>

      <section v-if="isOpen">
        <UCommandPalette
          v-model="selected"
          multiple
          nullable
          :autoselect="false"
          :groups="[{ key: 'people', commands: people }]"
          :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
        />
      </section>

      <section v-if="false">
        <div>
          <UButton label="Open" @click="isOpen = true" />

          <UModal v-model="isOpen">
            <UCommandPalette
              v-model="selected"
              multiple
              nullable
              :groups="[{ key: 'people', commands: people }]"
            />
          </UModal>
        </div>
      </section>
    </div>

    <section v-if="false">
      <div>
        <USlideover v-model="isOpen">
          <div class="p-4 flex-1">
            <p>Slideover</p>
            <ul>
              <li class="text-status-00">
                Info, alert, notice, neutral
              </li>
              <li class="text-status-01">
                Success, positive, ontrack
              </li>
              <li class="text-status-02">
                Warning, caution, attention
              </li>
              <li class="text-status-03">
                Discussion
              </li>
              <li class="text-status-04">
                Danger
              </li>
              <li class="text-status-05">
                Critical
              </li>
            </ul>
            <Placeholder class="h-full" />
          </div>
        </USlideover>
      </div>
    </section>

    <section v-if="false">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="slidesPerView"
        :loop="loop"
        :effect="effect"
        :autoplay="autoplay"
        :creative-effect="creativeEffect"
      >
        <SwiperSlide v-for="slide in 10" :key="slide">
          <strong>{{ slide }}</strong>
        </SwiperSlide>
      </Swiper>
    </section>

    <section v-if="false" class="grid gap-16">
      <!--
        https://www.instagram.com/reel/C0ZHPsitNWr/?igshid=ZDE1MWVjZGVmZQ%3D%3D

        https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3
      -->
      <figure>
        <Youtube
          id="ZrZv3JpOr2g"
          class="aspect-video rounded-xl w-full bg-gray-50 object-cover"
        />
        <figcaption class="mt-4 flex gap-x-2 text-base leading-6 text-gray-500">
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

        <figcaption class="mt-4 flex gap-x-2 text-base leading-6 text-gray-500">
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

        <figcaption class="mt-4 flex gap-x-2 text-base leading-6 text-gray-500">
          <UIcon
            name="i-ph-info-duotone"
            class="mt-0.5 h-5 w-5 flex-none"
            aria-hidden="true"
          />
          What We Can Learn About Testing From The Wheel - Kent C. Dodds
        </figcaption>
      </figure>
    </section>

    <div v-if="false" class="not-prose mt-6">
      <ul class="grid grid-cols-2 gap-x-8 gap-y-6">
        <li><strong class="font-semibold text-slate-900">Tailwind CSS</strong> v3.4</li><li><strong class="font-semibold text-slate-900">React</strong> v18</li><li><strong class="font-semibold text-slate-900">Headless UI</strong> v2.0.0-alpha</li><li><strong class="font-semibold text-slate-900">TypeScript</strong> v5.3</li>
      </ul>
    </div>

    <section v-if="false" class="grid grid-cols-1 gap-x-6 gap-y-10 pt-10 lg:grid-cols-3">
      <h2 class="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
        Screenshots
      </h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
        <img src="https://tailwindui.com/img/templates/catalyst/detail-01.png" alt="This is a detail image" class="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10">
        <img src="https://tailwindui.com/img/templates/catalyst/detail-02.png" alt="This is a detail image" class="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10">
        <img src="https://tailwindui.com/img/templates/catalyst/detail-03.png" alt="This is a detail image" class="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10">
        <img src="https://tailwindui.com/img/templates/catalyst/detail-04.png" alt="This is a detail image" class="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10">
      </div>
    </section>

    <section v-if="false" class="mt-16">
      <!-- {{ trainCase(kebabCase(snakeCase('CustomerProfile'))) }}
      {{ trainCase(kebabCase(pascalCase('customer_profile'))) }}
      {{ trainCase(kebabCase(camelCase('OnPaste'))) }} -->
      <!-- <img src="http://example.com/image.jpg" alt="Example of a broken image"> -->
      <UIcon name="i-ph-student-duotone" />
    </section>

    <section v-if="false" class="mt-16">
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

    <section v-if="false" class="mt-16">
      <div>
        <a href="#" class="inline-block">
          <span class="inline-flex items-center rounded-full px-3 py-0.5 text-base font-medium bg-pink-100 text-pink-800">Video</span>
        </a>
      </div>
      <a href="#" class="mt-4 block">
        <p class="text-2xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>
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
          <p class="text-base font-medium text-gray-900">
            <a href="#">Dessie Ryan</a>
          </p>
          <div class="flex space-x-1 text-base text-gray-500">
            <time datetime="2020-03-10">Mar 10, 2020</time>
            <span aria-hidden="true">·</span>
            <span>4 min read</span>
          </div>
        </div>
      </div>
    </section>

    <section v-if="false" class="mt-16">
      <ul>
        <li>English (US)</li>
        <li>Español</li>
        <li>Português (Brasil)</li>
        <li>Deutsch</li>
        <li>ಕನ್ನಡ</li>
      </ul>
    </section>

    <section v-if="false" class="mt-16">
      <FlipCountdown />
    </section>

    <section v-if="false">
      <ImageCompare
        before="//placehold.it/600x200/E8117F/FFFFFF"
        after="//placehold.it/600x200/CCCCCC/FFFFFF"
      />
    </section>

    <p v-if="showFooter" class="fixed bottom-0 left-0 right-0 border-t border-t-muted bg-white p-1 text-center text-base text-muted-foreground print:hidden">
      Press <span class="pointer-events-none inline-flex h-5 select-none items-center gap-1"><UKbd>{{ metaSymbol }}</UKbd><UKbd>K</UKbd></span> to open the command menu
    </p>
  </div>
</template>

<style>
/* overscroll-behavior: contain */

body {
  padding-right: 0px !important;
  margin-right: 0px !important;
}

.modal {
  overflow-y: auto !important;
}

.modal-open {
  overflow: auto !important;
  overflow-x: hidden !important;
  padding-right: 0 !important;
}

body.modal-open {
  height: 100vh;
  overflow-y: hidden;
}

.bg-custom-gradient {
  background-image: linear-gradient(
    55deg,
    hsl(240deg 100% 20%) 0%,
    hsl(289deg 100% 21%) 11%,
    hsl(315deg 100% 27%) 22%,
    hsl(329deg 100% 36%) 34%,
    hsl(337deg 100% 43%) 45%,
    hsl(357deg 91% 59%) 56%,
    hsl(17deg 100% 59%) 67%,
    hsl(34deg 100% 53%) 78%,
    hsl(45deg 100% 50%) 89%,
    hsl(55deg 100% 50%) 100%
  );
}

.bg-custom-gradient-2 {
  background-image: linear-gradient(
    45deg,
    hsl(263deg 59% 25%) 0%,
    hsl(264deg 56% 29%) 9%,
    hsl(265deg 54% 32%) 18%,
    hsl(265deg 52% 36%) 27%,
    hsl(266deg 51% 40%) 36%,
    hsl(267deg 49% 44%) 45%,
    hsl(267deg 48% 48%) 55%,
    hsl(268deg 52% 52%) 64%,
    hsl(268deg 60% 56%) 73%,
    hsl(269deg 71% 61%) 82%,
    hsl(269deg 84% 65%) 91%,
    hsl(270deg 100% 69%) 100%
  );
}
</style>
```
