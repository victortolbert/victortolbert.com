<!-- @vue-ignore -->
<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// import EventService from '~/service/EventService'

export default defineComponent({
  computed: {
    ...mapGetters(['events', 'weekendsVisible']),
    config () {
      return {
        ... this.configOptions,
        ...this.eventHandlers
      }
    },
    configOptions () {
      return {
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        events: this.events,
        weekends: this.weekendsVisible,
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth'
      }
    },
    eventHandlers () {
      return {
        dateClick: this.onDateClick,
        eventClick: this.onEventClick,
        eventDrop: this.onEventDrop,
        eventResize: this.onEventDrop,
        select: this.onDateSelect
      }
    }
  },
  methods: {
    ...mapActions([ 'createEvent', 'updateEvent', 'deleteEvent', 'setweekendsVisible' ]),
    onDateClick (payload) {
      const title = prompt('Please enter a new title for your event')
      if (!title) return
      const id = (this.events.length + 1) * 10
      const { start, end, date, allDay } = payload
      return this.createEvent({ id, title, date, start, end, allDay })
    },
    onDateSelect (payload) {
      return this.onDateClick(payload)
    },
    onEventClick ({ event }) {
      const confirmed = confirm(`Are you sure you want to delete the event '${event.title}'?`)
      if (!confirmed) return
      return this.deleteEvent(event.id)
    },
    onEventDrop ({ event }) {
      return this.updateEvent(event)
    }
  }
})
</script>

<template>
  <PageWrapper>
    <PageHeading>Calendar</PageHeading>

    <SectionWrapper class="grid grid-cols-12 gap-8">
      <div class="col-span-9">
        <vti-Calendar  :options="config">
          <template #eventContent="{ timeText, event }">
            <b>{{ timeText }}</b>
            <i>{{ event.title }}</i>
          </template>
        </vti-Calendar>
      </div>

      <div class="col-span-3">
        <vti-CalendarSidebar
          :events="events"
          :weekends-visible="weekendsVisible"
          @set-weekends-visible="setweekendsVisible"
        />
      </div>
    </SectionWrapper>
  </PageWrapper>
</template>
