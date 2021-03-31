<script lang="ts">
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import EventService from '~/service/EventService'

export default {
  data() {
    return {

      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialDate: '2021-03-30',
        initialView: 'dayGridMonth',
        editable: true,
        events: [
          { id: 1, title: "All Day Event", start: "2021-03-03" },
          { id: 2, title: "Long Event", start: "2021-03-07", end: "2021-03-10" },
          { id: 3, title: "Repeating Event", start: "2021-03-09T16:00:00" },
          { id: 4, title: "Repeating Event", start: "2021-03-16T16:00:00" },
          { id: 5, title: "Conference", start: "2021-03-11", end: "2021-03-13" },
          { id: 6, title: "Meeting", start: "2021-03-12T10:30:00", end: "2021-03-12T12:30:00" }
        ],
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        dateClick: event => console.log(event)
      }
    }
  },
  // eventService: null,
  // created() {
  //   this.eventService = new EventService()
  // },
  // mounted() {
  //   this.eventService.getEvents().then(data => this.events = data);
  // }
}
</script>
<template>
  <vti-Calendar :options="calendarOptions" />
</template>
