<!-- @vue-ignore -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
// import { useHead } from '@vueuse/head'

import { ternary } from 'vue-chemistry'
import { useIntersectionObserver, useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { INITIAL_EVENTS, createEventId } from '~/helpers/event-utils'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// import config from '~/appConfig'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
const mdAndLarger = breakpoints.greater('md')
const lgAndLarger = breakpoints.greater('lg')

// const msg = ref('I will change')

const root = ref(null)
const target = ref(null)
const isVisible = ref(false)

// useHead({
//   title: config.title,
//   meta: [
//     {
//       property: 'og:title',
//       content: config.title,
//     },
//   ],
// })

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
const isSwitched = ref(true)
const isAvailable = ref(true)
const message = ref('')
const currentEvents = ref([])

const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const handleDateSelect = (selectInfo) => {
  let title = prompt('Please enter a new title for your event')
  let calendarApi = selectInfo.view.calendar

  calendarApi.unselect() // clear date selection
  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    })
  }
}

const handleEventClick = (clickInfo) => {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}

const handleEvents = (events) => {
  currentEvents.value = events
}

const calendarOptions = ref({
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin // needed for dateClick
  ],
  headerToolbar: false,
  initialView: 'dayGridMonth',
  initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents
  /* you can update a remote database when these fire:
  eventAdd:
  eventChange:
  eventRemove:
  */
})

const handleWeekendsToggle = () => {
  calendarOptions.value.weekends = !calendarOptions.value.weekends // update a property
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
    <!-- <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <OField label="Auto sizing textarea">
        <TextareaAutosize
          class="max-w-lg shadow-sm block w-full focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
          v-model="text"
        />
      </OField>
    </SectionWrapper>-->

    <!-- <BaseHero v-if="false" is-fullheight>
      <Person />
    </BaseHero>-->

    <!-- <SectionWrapper v-if="false" class="text-skin-base">
      > sm: {{ smAndLarger }}
      <br />
      > md: {{ mdAndLarger }}
      <br />
      > lg: {{ lgAndLarger }}
      <br />
      <HeroButton />
    </SectionWrapper>-->

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <FileMetadata />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <vti-DefinitionList />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 space-y-8 rounded-lg shadow-md">
      <vti-FormField />
      <vti-FormTextarea />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md flex justify-end">
      <vti-SelectMenu />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <PrivacyFieldset />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <InboxTopNavbar />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <InboxToolbar />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <AdvocatePageHeading />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <AdvocateCandidates />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <PostEngagementIndicators />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <AppSidebarLinkGroup />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 flex space-x-8 items-center rounded-lg shadow-md">
      <EditItemButton />
      <HelpLink />
      <a
        href="#"
        class="group flex items-center text-sm text-gray-500 hover:text-gray-900 space-x-2.5"
      >
        <vti-IconSolid name="question-mark-circle" />
        <span>Learn more about sharing</span>
      </a>
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <PostCard />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <FeatureNotifyForm />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <ExampleFooter />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <HeroCard />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <FeatureSection />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <HelpSection />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <TestimonialCard />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <TestimonialSection />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <StatsSection />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <BrandPanel />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <vti-Calendar class="demo-app-calendar" :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </vti-Calendar>
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <RandomProgrammingQuote />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <ProjectList />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <BaseListHeader />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <TeamMembers />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <article class="max-w-xl p-4 mx-auto bg-white border rounded shadow">
        <div class="flex items-center justify-between">
          <span id="toggleLabel" class="flex flex-col flex-grow">
            <span class="text-sm font-medium text-gray-900">Available to serve</span>
            <span
              class="text-sm leading-normal text-gray-500"
            >Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</span>
          </span>
          <OSwitch v-model="isAvailable" />
        </div>
      </article>
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <ProjectSettingsForm />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <OField label="Name">
        <OInput
          expanded
          id="input"
          v-model="name"
          :placeholder="t('intro.whats-your-name')"
          :aria-label="t('intro.whats-your-name')"
          type="text"
          autocomplete="false"
          @keydown.enter="go"
        />
      </OField>
      <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>
      <div>
        <OButton class="m-3 text-sm btn" :disabled="!name" @click="go">{{ t('button.go') }}</OButton>
      </div>
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <vti-DefinitionList />
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <div ref="root" class="root">
        <p class="notice">Scroll me down!</p>
        <div ref="target" class="target">
          <p>Hello world!</p>
        </div>
      </div>
      <div class="text-center">
        Element
        <b>{{ text }}</b> the viewport
      </div>
    </SectionWrapper>

    <SectionWrapper class="bg-white m-8 rounded-lg shadow-md">
      <HelloWorld msg="Hello Vue 3, Vite, Tailwind CSS, and Laravel" />
    </SectionWrapper>
  </PageWrapper>
</template>

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
.banner {
  @apply w-full overflow-hidden mb-6 border-b-4 dark:border-white dark:border-opacity-5 bg-white bg-opacity-5;
  height: 80vh;
  max-height: 80vh;
  filter: brightness(0.5) blur(2px);
}
</style>
