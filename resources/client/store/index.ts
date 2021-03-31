import { createStore } from 'vuex'
import EventService from '~/services/EventService'
import { addDays } from 'date-fns'

import upload from './upload'

export default createStore({
  modules: {
    upload
  },
  state: {
    user: 'Adam Jahr',
    // events: [],
    // event: {},
    events: [
      { id: 10, title: 'All day event', date: new Date(), allDay: true },
      { id: 20, title: 'Timed event', start: addDays(new Date(), 1) },
      { id: 30, title: 'Timed event', start: addDays(new Date(), 2) }
    ],
    weekendsVisible: true
  },
  getters: {
    events: state => state.events,
    weekendsVisible: state => state.weekendsVisible
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENT(state, event) {
      state.event = event
    },
    SET_EVENTS(state, events) {
      state.events = events
    }
  },
  actions: {
    addEvent({ commit }, event) {
      return EventService.postEvent(event)
       .then(() => {
         commit('ADD_EVENT', event)
      })
      .catch(error => {
         throw(error)
      })
    },
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then(response => {
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          throw(error)
        })
    },
    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find(event => event.id === id)
        if (existingEvent) {
          commit('SET_EVENT', existingEvent)
        } else {
        return EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          throw(error)
        })
      }
    },
    createEvent ({ commit }, event) {
      return commit('CREATE_EVENT', event)
    },
    updateEvent ({ commit }, updatedEvent) {
      return commit('UPDATE_EVENT', updatedEvent)
    },
    deleteEvent ({ commit }, eventId) {
      return commit('DELETE_EVENT', eventId)
    },
    setweekendsVisible ({ commit }, enabled) {
      return commit('SET_WEEKENDS_ENABLED', enabled)
    }
  },

})
