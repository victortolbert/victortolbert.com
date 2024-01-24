<script setup>
// const tokens = '/_nuxt/public/assets/images/tokens.svg'
// const elements = '/_nuxt/public/assets/images/elements.svg'
// const patterns = '/_nuxt/public/assets/images/patterns.svg'
// const styleguide = '/_nuxt/public/assets/images/styleguide.svg'
// const templates = '/_nuxt/public/assets/images/templates.svg'
const vueds = '/_nuxt/public/assets/images/vueds.svg'

definePageMeta({
  title: 'Resume',
  breadcrumb: 'Resume',
})
const { data: resume } = await useAsyncData('home', () => queryContent('/').findOne())
const formatter = ref('YYYY')

const showFooter = ref(false)
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
  <div class="w-full relative mx-auto print:p-12">
    <main class="w-full space-y-8 print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">
            {{ resume?.basics.name }}
          </h1>
          <div class="text-pretty text-muted-foreground max-w-md text-lg font-mono">
            {{ resume?.basics.label }}
            <div
              class="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden"
            >
              <ul
                class="block text-left leading-tight [&_li]:block animate-text-slide"
              >
                <li class="text-indigo-500">
                  Frontend
                </li>
                <li class="text-rose-500">
                  Fullstack
                </li>
                <li class="text-yellow-500">
                  DevOps
                </li>
                <li class="text-teal-500">
                  Vue.js
                </li>
                <li class="text-pink-500">
                  React
                </li>
                <li class="text-sky-500">
                  Laravel
                </li>
              </ul>
            </div>
          </div>
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
          <img class="aspect-square h-full w-full" :src="resume?.basics.image" alt="Victor Tolbert">
        </span>
      </div>

      <section class="min-h-0 flex flex-col gap-y-4">
        <h2 class="text-xl font-bold">
          About
        </h2>
        <p class="text-pretty text-muted-foreground text-sm font-mono">
          {{ resume?.basics.summary }}
        </p>
      </section>

      <section class="flex min-h-0 flex-col gap-y-4">
        <h2 class="text-xl font-bold">
          Key Skills
        </h2>

        <div class="flex flex-wrap gap-1">
          <template v-for="skill in resume?.skills" :key="`skill-${skill}`">
            <UBadge color="gray" variant="solid">
              {{ skill.name }}
            </UBadge>
            <UBadge v-for="keyword in skill.keywords" :key="`keyword-${keyword}`" color="gray" variant="subtle">
              {{ keyword }}
            </UBadge>
          </template>
        </div>
      </section>

      <section class="min-h-0 flex flex-col gap-y-4">
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
          <div class="text-pretty text-muted-foreground mt-3 text-xs font-mono">
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
          <div class="text-pretty font-mono text-sm text-muted-foreground mt-3">
            <div>{{ study.studyType }}, {{ study.area }}</div>
          </div>
        </div>
      </section>

      <section class="flex min-h-0 flex-col gap-y-4">
        <h2 class="text-xl font-bold">
          Interests
        </h2>
        <div class="flex flex-wrap gap-1">
          <template v-for="interest in resume?.interests" :key="`interest-${interest}`">
            <UBadge color="gray" variant="solid">
              {{ interest.name }}
            </UBadge>
            <UBadge v-for="keyword in interest.keywords" :key="`keyword-${keyword}`" color="gray" variant="subtle">
              {{ keyword }}
            </UBadge>
          </template>
        </div>
      </section>

      <section class="flex min-h-0 flex-col gap-y-4">
        <h2 class="text-xl font-bold">
          References
        </h2>
        <div v-for="reference in resume?.references" :key="reference.name" class="rounded-lg bg-card text-card-foreground">
          <div class="flex flex-col space-y-1.5">
            <h3 class="font-semibold leading-none">
              {{ reference.name }}
            </h3>
          </div>
          <div class="text-pretty font-mono text-muted-foreground mt-3 text-xs">
            {{ reference.reference }}
          </div>
        </div>
      </section>
    </main>

    <section class="mt-16">
      <img :src="`${vueds}`" class="logo" alt="Vue Design Systems">

      <!--
      <img :src="`${tokens}`" class="logo" alt="Tokens">
      <img :src="`${elements}`" class="logo" alt="Elements">
      <img :src="`${patterns}`" class="logo" alt="Patterns">
      <img :src="`${templates}`" class="logo" alt="Templates">
      -->

      <div class="flex gap-1.5 p-4 text-4xl">
        <UIcon name="i-logos-dotnet" />
        <UIcon name="i-logos-laravel" />
        <UIcon name="i-logos-codeigniter-icon" />

        <UIcon name="i-logos-nodejs" />

        <UIcon name="i-logos-vue" />
        <UIcon name="i-logos-svelte-icon" />
        <UIcon name="i-logos-react" />
        <UIcon name="i-logos-angular-icon" />

        <UIcon name="i-logos-nuxt-icon" />
        <UIcon name="i-logos-pinia" />
        <UIcon name="i-logos-vueuse" />
        <UIcon name="i-logos-nextjs-icon" />

        <UIcon name="i-logos-nginx" />
        <UIcon name="i-logos-docker-icon" />
        <UIcon name="i-logos-aws" />
        <UIcon name="i-logos-microsoft-azure" />
        <UIcon name="i-logos-google-cloud" />
        <UIcon name="i-logos-netlify-icon" />
        <UIcon name="i-logos-heroku-icon" />

        <UIcon name="i-logos-html-5" />
        <UIcon name="i-logos-webcomponents" />
        <UIcon name="i-logos-css-3" />
        <UIcon name="i-logos-sass" />
        <UIcon name="i-logos-tailwindcss-icon" />
        <UIcon name="i-logos-progress" />
        <UIcon name="i-logos-bootstrap" />
        <UIcon name="i-logos-bulma" />
        <UIcon name="i-logos-salesforce" />

        <UIcon name="i-logos-javascript" />
        <UIcon name="i-logos-typescript-icon" />
        <UIcon name="i-logos-c-sharp" />
        <UIcon name="i-logos-ruby" />
        <UIcon name="i-logos-python" />
        <UIcon name="i-logos-java" />
        <UIcon name="i-logos-php-alt" />

        <UIcon name="i-logos-postgresql" />
        <UIcon name="i-logos-mysql" />
        <UIcon name="i-logos-mongodb" />
        <UIcon name="i-logos-graphql" />

        <UIcon name="i-logos-circleci" />
        <UIcon name="i-logos-jenkins" />

        <UIcon name="i-logos-drupal-icon" />
        <UIcon name="i-logos-wordpress-icon" />

        <UIcon name="i-logos-jira" />
        <UIcon name="i-logos-confluence" />
        <UIcon name="i-logos-bitbucket" />

        <UIcon name="i-logos-visual-studio" />
        <UIcon name="i-logos-visual-studio-code" />

        <UIcon name="i-logos-github-icon" />

        <UIcon name="i-logos-cypress-icon" />
        <UIcon name="i-logos-playwright" />
        <UIcon name="i-logos-testing-library" />
        <UIcon name="i-logos-storybook-icon" />
        <UIcon name="i-logos-vitest" />
        <UIcon name="i-logos-jest" />

        <UIcon name="i-logos-gulp" />
        <UIcon name="i-logos-grunt" />
        <UIcon name="i-logos-vitejs" />
        <UIcon name="i-logos-webpack" />
      </div>
    </section>

    <section>
      <UIcon name="i-ph-question-duotone" />
      <UIcon name="i-ph-number-zero-duotone" />
      <UIcon name="i-ph-number-one-duotone" />
      <UIcon name="i-ph-number-two-duotone" />
      <UIcon name="i-ph-number-three-duotone" />
      <UIcon name="i-ph-number-four-duotone" />
      <UIcon name="i-ph-number-five-duotone" />
      <UIcon name="i-ph-number-six-duotone" />
      <UIcon name="i-ph-number-seven-duotone" />
      <UIcon name="i-ph-number-eight-duotone" />
      <UIcon name="i-ph-number-nine-duotone" />
      <UIcon name="i-ph-number-circle-zero-duotone" />
      <UIcon name="i-ph-number-circle-one-duotone" />
      <UIcon name="i-ph-number-circle-two-duotone" />
      <UIcon name="i-ph-number-circle-three-duotone" />
      <UIcon name="i-ph-number-circle-four-duotone" />
      <UIcon name="i-ph-number-circle-five-duotone" />
      <UIcon name="i-ph-number-circle-six-duotone" />
      <UIcon name="i-ph-number-circle-seven-duotone" />
      <UIcon name="i-ph-number-circle-eight-duotone" />
      <UIcon name="i-ph-number-circle-nine-duotone" />
      <UIcon name="i-ph-number-square-zero-duotone" />
      <UIcon name="i-ph-number-square-one-duotone" />
      <UIcon name="i-ph-number-square-two-duotone" />
      <UIcon name="i-ph-number-square-three-duotone" />
      <UIcon name="i-ph-number-square-four-duotone" />
      <UIcon name="i-ph-number-square-five-duotone" />
      <UIcon name="i-ph-number-square-six-duotone" />
      <UIcon name="i-ph-number-square-seven-duotone" />
      <UIcon name="i-ph-number-square-eight-duotone" />
      <UIcon name="i-ph-number-square-nine-duotone" />

      <UIcon name="i-ph-dice-one-duotone" />
      <UIcon name="i-ph-dice-one-duotone" />
      <UIcon name="i-ph-dice-one-duotone" />
      <UIcon name="i-ph-dice-four-duotone" />
      <UIcon name="i-ph-dice-five-duotone" />
      <UIcon name="i-ph-dice-six-duotone" />

      <UIcon name="i-ph-spinner-duotone" />
      <UIcon name="i-ph-spinner-gap-duotone" />
      <UIcon name="i-ph-arrow-clockwise-duotone" />
      <UIcon name="i-ph-arrow-counter-clockwise-duotone" />
      <UIcon name="i-ph-arrows-clockwise-duotone" />
      <UIcon name="i-ph-arrows-counter-clockwise-duotone" />
      <UIcon name="i-ph-dot-duotone" />
      <UIcon name="i-ph-dot-outline-duotone" />
      <UIcon name="i-ph-dots-three-duotone" />
      <UIcon name="i-ph-dots-three-vertical-duotone" />
      <UIcon name="i-ph-dots-three-circle-duotone" />
      <UIcon name="i-ph-dots-three-circle-vertical-duotone" />
      <UIcon name="i-ph-dots-three-outline-duotone" />
      <UIcon name="i-ph-dots-three-outline-vertical-duotone" />
      <UIcon name="i-ph-floppy-disk-duotone" />
      <UIcon name="i-ph-floppy-disk-back-duotone" />
      <UIcon name="i-ph-dots-three-outline-vertical-duotone" />

      <UIcon name="i-ph-lightbulb-duotone" />
      <UIcon name="i-ph-lightbulb-filament-duotone" />
      <UIcon name="i-ph-flask-duotone" />

      <UIcon name="i-ph-flag-banner-duotone" />
      <UIcon name="i-ph-push-pin-duotone" />
      <UIcon name="i-ph-push-pin-simple-duotone" />
      <UIcon name="i-ph-user-circle-duotone" />
      <UIcon name="i-ph-detective-duotone" />
      <UIcon name="i-ph-gear-duotone" />
      <UIcon name="i-ph-gear-six-duotone" />
      <UIcon name="i-ph-gear-fine-duotone" />
      <UIcon name="i-ph-sliders-duotone" />

      <UIcon name="i-ph-house-duotone" />
      <UIcon name="i-ph-house-simple-duotone" />
      <UIcon name="i-ph-tent-duotone" />
      <UIcon name="i-ph-ruler-duotone-duotone" />
      <UIcon name="i-ph-road-horizon-duotone" />
      <UIcon name="i-ph-plant-duotone" />
      <UIcon name="i-ph-lightning-duotone" />
      <UIcon name="i-ph-lightning-a-duotone" />
      <UIcon name="i-ph-gauge-duotone" />
      <UIcon name="i-ph-crosshair-duotone" />
      <UIcon name="i-ph-crosshair-simple-duotone" />

      <UIcon name="i-ph-fire-duotone" />
      <UIcon name="i-ph-fire-simple-duotone" />

      <UIcon name="i-ph-shield-duotone" />
      <UIcon name="i-ph-shield-check-duotone" />
      <UIcon name="i-ph-shield-warning-duotone" />

      <UIcon name="i-ph-tent-duotone" />
      <UIcon name="i-ph-warehouse-duotone" />
      <UIcon name="i-ph-garage-duotone" />
      <UIcon name="i-ph-certificate-duotone" />
      <UIcon name="i-ph-cloud-duotone" />
      <UIcon name="i-ph-buildings-duotone" />
      <UIcon name="i-ph-chat-duotone" />
      <UIcon name="i-ph-chat-circle-duotone" />
      <UIcon name="i-ph-binoculars-duotone" />
      <UIcon name="i-ph-eye-closed-duotone" />
      <UIcon name="i-ph-eye-duotone" />
      <UIcon name="i-ph-eye-slash-duotone" />
      <UIcon name="i-ph-paper-plane-right-duotone" />
      <UIcon name="i-ph-paper-plane-tilt-duotone" />
      <UIcon name="i-ph-paperclip-duotone" />
      <UIcon name="i-ph-paperclip-horizontal-duotone" />
      <UIcon name="i-ph-envelope-simple-duotone" />
      <UIcon name="i-ph-envelope-simple-open-duotone" />
      <UIcon name="i-ph-eyeglasses-duotone" />
      <UIcon name="i-ph-envelope-duotone" />
      <UIcon name="i-ph-envelope-open-duotone" />
      <UIcon name="i-ph-share-duotone" />
      <UIcon name="i-ph-share-fat-duotone" />
      <UIcon name="i-ph-share-network-duotone" />
      <UIcon name="i-ph-couch-duotone" />
      <UIcon name="i-ph-film-slate-duotone" />
      <UIcon name="i-ph-film-script-duotone" />
      <UIcon name="i-ph-film-reel-duotone" />
      <UIcon name="i-ph-film-strip-duotone" />
      <UIcon name="i-ph-gif-duotone" />
      <UIcon name="i-ph-cross-duotone" />
      <UIcon name="i-ph-first-aid-duotone" />

      <UIcon name="i-ph-books-duotone" />
      <UIcon name="i-ph-article-duotone" />
      <UIcon name="i-ph-folders-duotone" />
      <UIcon name="i-ph-folder-duotone" />
      <UIcon name="i-ph-folder-notch-open-duotone" />
      <UIcon name="i-ph-files-duotone" />
      <UIcon name="i-ph-file-duotone" />
      <UIcon name="i-ph-file-text-duotone" />
      <UIcon name="i-ph-file-doc-duotone" />
      <UIcon name="i-ph-file-sql-duotone" />
      <UIcon name="i-ph-file-pdf-duotone" />
      <UIcon name="i-ph-file-vue-duotone" />
      <UIcon name="i-ph-file-ts-duotone" />
      <UIcon name="i-ph-file-video-duotone" />
      <UIcon name="i-ph-file-tsx-duotone" />
      <UIcon name="i-ph-file-xls-duotone" />
      <UIcon name="i-ph-file-zip-duotone" />
      <UIcon name="i-ph-file-csv-duotone" />
      <UIcon name="i-ph-notepad-duotone" />

      <UIcon name="i-ph-function-duotone" />
      <UIcon name="i-ph-code-duotone" />
      <UIcon name="i-ph-calendar-blank-duotone" />
      <UIcon name="i-ph-chart-line-up-duotone" />
      <UIcon name="i-ph-map-trifold-duotone" />
      <UIcon name="i-ph-map-pin-duotone" />
      <UIcon name="i-ph-magnifying-glass-duotone" />
      <UIcon name="i-ph-funnel-duotone" />
      <UIcon name="i-ph-funnel-simple-duotone" />
      <UIcon name="i-ph-cake-duotone" />
      <UIcon name="i-ph-call-bell-duotone" />
      <UIcon name="i-ph-compass-duotone" />
      <UIcon name="i-ph-confetti-duotone" />

      <UIcon name="i-ph-target-duotone" />
      <UIcon name="i-ph-tag-duotone" />
      <UIcon name="i-ph-tag-simple-duotone" />
      <UIcon name="i-ph-tag-chevron-duotone" />
      <UIcon name="i-ph-swatches-duotone" />
      <UIcon name="i-ph-tray-duotone" />
      <UIcon name="i-ph-television-duotone" />
      <UIcon name="i-ph-television-simple-duotone" />
      <UIcon name="i-ph-alarm-duotone" />
      <UIcon name="i-ph-timer-duotone" />
      <UIcon name="i-ph-clock-duotone" />
      <UIcon name="i-ph-clock-afternoon-duotone" />
      <UIcon name="i-ph-tabs-duotone" />
      <UIcon name="i-ph-table-duotone" />

      <UIcon name="i-ph-amazon-logo-duotone" />
      <UIcon name="i-ph-google-logo-duotone" />
      <UIcon name="i-ph-angular-logo-duotone" />
      <UIcon name="i-ph-apple-logo-duotone" />
      <UIcon name="i-ph-youtube-logo-duotone" />
      <UIcon name="i-ph-windows-logo-duotone" />
      <UIcon name="i-ph-discord-logo-duotone" />
      <UIcon name="i-ph-goodreads-logo-duotone" />
      <UIcon name="i-ph-tiktok-logo-duotone" />
      <UIcon name="i-ph-twitch-logo-duotone" />

      <UIcon name="i-ph-yin-yang-duotone" />

      <UIcon name="i-ph-camera-duotone" />
      <UIcon name="i-ph-app-window-duotone" />
      <UIcon name="i-ph-terminal-window-duotone" />

      <UIcon name="i-ph-ticket-duotone" />
      <UIcon name="i-ph-broadcast-duotone" />
      <UIcon name="i-ph-fingerprint-duotone" />
      <UIcon name="i-ph-translate-duotone" />
      <UIcon name="i-ph-planet-duotone" />
      <UIcon name="i-ph-globe-hemisphere-west-duotone" />
      <UIcon name="i-ph-globe-stand-duotone" />
      <UIcon name="i-ph-trademark-duotone" />
      <UIcon name="i-ph-trademark-registered-duotone" />

      <UIcon name="i-ph-hand-swipe-left-duotone" />
      <UIcon name="i-ph-hand-swipe-right-duotone" />
      <UIcon name="i-ph-hand-tap-duotone" />
      <UIcon name="i-ph-hand-pointing-duotone" />
      <UIcon name="i-ph-hand-grabbing-duotone" />
      <UIcon name="i-ph-hand-duotone" />
      <UIcon name="i-ph-handshake-duotone" />

      <UIcon name="i-ph-archive-tray-duotone" />
      <UIcon name="i-ph-archive-duotone" />
      <UIcon name="i-ph-bag-duotone" />
      <UIcon name="i-ph-suitcase-duotone" />
      <UIcon name="i-ph-suitcase-simple-duotone" />
      <UIcon name="i-ph-student-duotone" />
      <UIcon name="i-ph-strategy-duotone" />
      <UIcon name="i-ph-stop-duotone" />
      <UIcon name="i-ph-sticker-duotone" />
      <UIcon name="i-ph-shopping-bag-duotone" />
      <UIcon name="i-ph-shopping-bag-open-duotone" />
      <UIcon name="i-ph-shopping-cart-duotone" />
      <UIcon name="i-ph-shopping-cart-duotone" />
      <UIcon name="i-ph-shopping-cart-simple-duotone" />
      <UIcon name="i-ph-briefcase-duotone" />
      <UIcon name="i-ph-briefcase-simple-duotone" />
      <UIcon name="i-ph-bag-duotone" />
      <UIcon name="i-ph-bag-simple-duotone" />
      <UIcon name="i-ph-tote-duotone" />
      <UIcon name="i-ph-tote-simple-duotone" />
      <UIcon name="i-ph-basket-duotone" />
      <UIcon name="i-ph-wallet-duotone" />

      <UIcon name="i-ph-trash-duotone" />
      <UIcon name="i-ph-trash-simple-duotone" />

      <UIcon name="i-ph-user-square-duotone" />
      <UIcon name="i-ph-user-rectangle-duotone" />
      <UIcon name="i-ph-user-circle-duotone" />
      <UIcon name="i-ph-at-duotone" />
      <UIcon name="i-ph-asterisk-duotone" />
      <UIcon name="i-ph-asterisk-simple-duotone" />
      <UIcon name="i-ph-atom-duotone" />
      <UIcon name="i-ph-arrow-square-out-duotone" />

      <UIcon name="i-ph-check-fat-duotone" />
      <UIcon name="i-ph-check-duotone" />
      <UIcon name="i-ph-check-circle-duotone" />
      <UIcon name="i-ph-circle-wavy-check-duotone" />
      <UIcon name="i-ph-check-square-duotone" />

      <UIcon name="i-ph-arrow-fat-left-duotone" />
      <UIcon name="i-ph-arrow-fat-right-duotone" />
      <UIcon name="i-ph-caret-circle-left-duotone" />
      <UIcon name="i-ph-caret-circle-right-duotone" />
      <UIcon name="i-ph-caret-left-duotone" />
      <UIcon name="i-ph-caret-right-duotone" />
      <UIcon name="i-ph-arrow-left-duotone" />
      <UIcon name="i-ph-arrow-right-duotone" />
      <UIcon name="i-ph-arrow-square-left-duotone" />
      <UIcon name="i-ph-arrow-square-right-duotone" />
      <UIcon name="i-ph-arrow-circle-left-duotone" />
      <UIcon name="i-ph-arrow-circle-right-duotone" />

      <UIcon name="i-ph-cooking-pot-duotone" />
      <UIcon name="i-ph-fork-knife-duotone" />
      <UIcon name="i-ph-carrot-duotone" />
      <UIcon name="i-ph-hamburger-duotone" />
      <UIcon name="i-ph-pizza-duotone" />
      <UIcon name="i-ph-wine-duotone" />
      <UIcon name="i-ph-brandy-duotone" />
      <UIcon name="i-ph-martini-duotone" />
      <UIcon name="i-ph-beer-stein-duotone" />

      <UIcon name="i-ph-car-duotone" />
      <UIcon name="i-ph-car-simple-duotone" />
      <UIcon name="i-ph-engine-duotone" />

      <UIcon name="i-ph-bell-duotone" />
      <UIcon name="i-ph-megaphone-duotone" />
      <UIcon name="i-ph-megaphone-simple-duotone" />

      <UIcon name="i-ph-messenger-logo-duotone" />
      <UIcon name="i-ph-wechat-logo-duotone" />
      <UIcon name="i-ph-whatsapp-logo-duotone" />
      <UIcon name="i-ph-x-square-duotone" />
      <UIcon name="i-ph-x-circle-duotone" />
      <UIcon name="i-ph-x-duotone" />

      <UIcon name="i-ph-smiley-sticker-duotone" />
      <UIcon name="i-ph-smiley-duotone" />
      <UIcon name="i-ph-smiley-meh-duotone" />
      <UIcon name="i-ph-smiley-nervous-duotone" />
      <UIcon name="i-ph-smiley-sad-duotone" />
      <UIcon name="i-ph-smiley-angry-duotone" />
      <UIcon name="i-ph-smiley-wink-duotone" />
      <UIcon name="i-ph-smiley-x-eyes-duotone" />
      <UIcon name="i-ph-wrench-duotone" />
      <UIcon name="i-ph-sun-duotone" />
      <UIcon name="i-ph-wind-duotone" />
      <UIcon name="i-ph-snowflake-duotone" />
      <UIcon name="i-ph-lightning-duotone" />
      <UIcon name="i-ph-spade-duotone" />
      <UIcon name="i-ph-heart-duotone" />
      <UIcon name="i-ph-diamond-duotone" />
      <UIcon name="i-ph-club-duotone" />
      <UIcon name="i-ph-warning-duotone" />
      <UIcon name="i-ph-square-duotone" />
      <UIcon name="i-ph-circle-duotone" />
      <UIcon name="i-ph-star-duotone" />
      <UIcon name="i-ph-triangle-duotone" />
      <UIcon name="i-ph-trophy-duotone" />
      <UIcon name="i-ph-toolbox-duotone" />
      <UIcon name="i-ph-warning-circle-duotone" />
      <UIcon name="i-ph-warning-diamond-duotone" />
      <UIcon name="i-ph-warning-octagon-duotone" />
      <UIcon name="i-ph-basketball-duotone" />
      <UIcon name="i-ph-bowl-food-duotone" />
      <UIcon name="i-ph-balloon-duotone" />
      <UIcon name="i-ph-bandaids-duotone" />
      <UIcon name="i-ph-bank-duotone" />

      <UIcon name="i-ph-barbell-duotone" />
    </section>
    <p v-if="showFooter" class="fixed bottom-0 left-0 right-0 border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden">
      Press <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span class="text-xs">⌘</span>J</kbd> to open the command menu. Hosted by <a href="/" class="underline hover:opacity-80">jcv</a>.
    </p>
  </div>
</template>
