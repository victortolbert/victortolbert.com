<script lang="ts">
import { defineComponent } from 'vue'
import EventService from '~/services/EventService'
import { EventItem } from '~/types'

export default defineComponent({
  name: 'EventList',
  props: ['page'],
  data() {
    return {
      events: [] as EventItem[],
      totalEvents: 0
    }
  },
  // created() {
  //   EventService.getEvents()
  //     .then(response => {
  //       this.events = response.data
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then(response => {
        next(comp => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch((error) => {
        console.log(error)
        next({ name: 'network-error' })
      })
  },
  beforeRouteUpdate(routeTo) {
    return EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then(response => {
        this.events = response.data
        this.totalEvents = response.headers['x-total-count']
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)
      return this.page < totalPages
    }
  }
})
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'events', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >&#60; Previous</router-link>

      <router-link
        id="page-next"
        :to="{ name: 'events', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >Next &#62;</router-link>
    </div>
  </div>
</template>



<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
