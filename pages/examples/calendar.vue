<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import iCalendarPlugin from '@fullcalendar/icalendar'

import { INITIAL_EVENTS, createEventId } from '~/utils/EventUtils'

// "@fullcalendar/google-calendar": "^6.1.10",
// "@fullcalendar/multimonth": "^6.1.10",
// "@fullcalendar/timeline": "^6.1.10",
// "@fullcalendar/scrollgrid": "^6.1.10",
// "@fullcalendar/adaptive": "^6.1.10",
// "@fullcalendar/core": "^6.1.10",
// "@fullcalendar/luxon": "^6.1.10"

definePageMeta({
  layout: false,
})

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
    left: 'prev,next today',
    center: 'title',
    right: 'listWeek,dayGridMonth,timeGridWeek,timeGridDay',
  },
  initialView: 'listWeek',
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
  <div>
    <div class="demo-app">
      <div class="demo-app-sidebar">
        <!-- <div class="demo-app-sidebar-section">
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div class="demo-app-sidebar-section">
          <label>
            <input
              type="checkbox"
              :checked="calendarOptions.weekends"
              @change="handleWeekendsToggle"
            >
            toggle weekends
          </label>
        </div> -->
        <div class="demo-app-sidebar-section">
          <h2>All Events ({{ currentEvents.length }})</h2>
          <ul>
            <li v-for="event in currentEvents" :key="event.id">
              <b>{{ event.startStr }}</b>
              <i>{{ event.title }}</i>
            </li>
          </ul>
        </div>
      </div>
      <div class="demo-app-main">
        <FullCalendar
          class="demo-app-calendar"
          :options="calendarOptions"
        >
          <template #eventContent="arg">
            <b>{{ arg.timeText }}</b>
            <i>{{ arg.event.title }}</i>
          </template>
        </FullCalendar>
      </div>
    </div>
  </div>
</template>
