<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import iCalendarPlugin from '@fullcalendar/icalendar'

import { INITIAL_EVENTS, createEventId } from '~/utils/EventUtils'

// definePageMeta({
//   layout: false,
// })

const events = ref({
  url: '/assets/feeds/icalendar.ics',
  format: 'ics',
})

const calendarOptions = ref({
  plugins: [
    dayGridPlugin,
    iCalendarPlugin,
    listPlugin,
    timeGridPlugin,
    interactionPlugin, // needed for dateClick
  ],
  headerToolbar: {
    left: 'title',
    center: '',
    right: '',
  },
  initialView: 'listYear',
  initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  select: handleDateSelect,
  eventClick: handleEventClick,
  events: {
    url: '/assets/feeds/icalendar.ics',
    format: 'ics',
  },
  // eventsSet: handleEvents,
  /* you can update a remote database when these fire:
  eventAdd:
  eventChange:
  eventRemove:
  */
})

const currentEvents = ref([])

function handleWeekendsToggle() {
  calendarOptions.value.weekends = !calendarOptions.value.weekends // update a property
}

function handleDateSelect(selectInfo) {
  const title = prompt('Please enter a new title for your event')
  const calendarApi = selectInfo.view.calendar

  calendarApi.unselect() // clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    })
  }
}

function handleEventClick(clickInfo) {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`))
    clickInfo.event.remove()
}

function handleEvents(events) {
  currentEvents.value = events
}
</script>

<template>
  <section>
    <FullCalendar
      class="demo-app-calendars"
      :options="calendarOptions"
    >
      <template #eventContent="{ timeText, event }">
        <b>{{ timeText }}</b>
        <i>{{ event.title }}</i>
      </template>
    </FullCalendar>
  </section>
</template>
