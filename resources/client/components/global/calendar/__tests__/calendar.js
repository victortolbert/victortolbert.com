import { mount as _mount } from '@vue/test-utils'
import FullCalendar from '../.'
import dayGridPlugin from '@fullcalendar/daygrid'
import Vue from 'vue'

const DEFAULT_OPTIONS = {
  initialDate: '2019-05-15',
  initialView: 'dayGridMonth',
  timeZone: 'UTC',
  plugins: [ dayGridPlugin ]
}

let currentWrapper

function mount(component, options = {}) {
  if (options.attachTo === undefined) {
    let rootEl = document.body.appendChild(document.createElement('div')) // will be *replaced*
    options = {...options, attachTo: rootEl}
  }
  currentWrapper = _mount(component, options)
  return currentWrapper
}

afterEach(function() {
  if (currentWrapper) {
    currentWrapper.destroy()
    currentWrapper = null
  }
})


it('renders', async () => {
  let wrapper = mount(FullCalendar, { propsData: { options: DEFAULT_OPTIONS } })
  expect(isSkeletonRendered(wrapper)).toBe(true)
})

it('unmounts and calls destroy', async () => {
  let unmounted = false
  let options = {
    ...DEFAULT_OPTIONS,
    viewWillUnmount() {
      unmounted = true
    }
  }

  let wrapper = mount(FullCalendar, { propsData: { options } })
  wrapper.destroy()
  expect(unmounted).toBeTruthy()
})

it('handles a single prop change', (done) => {
  let options = {
    ...DEFAULT_OPTIONS,
    weekends: true
  }

  let wrapper = mount(FullCalendar, {
    propsData: { options }
  })
  expect(isWeekendsRendered(wrapper)).toBe(true)

  // it's easy for the component to detect this change because the whole options object changes.
  // a more difficult scenario is when a component updates its own nested prop.
  // there's a test for that below (COMPONENT_FOR_OPTION_MANIP).
  wrapper.setProps({
    options: {
      ...options,
      weekends: false // good idea to test a falsy prop
    }
  })

  Vue.nextTick().then(() => {
    expect(isWeekendsRendered(wrapper)).toBe(false)
    done()
  })
})

it('renders events with Date objects', async () => { // necessary to test copy util
  let wrapper = mount(FullCalendar, {
    propsData: {
      options: {
        ...DEFAULT_OPTIONS,
        events: [
          { title: 'event', start: new Date(DEFAULT_OPTIONS.initialDate) },
          { title: 'event', start: new Date(DEFAULT_OPTIONS.initialDate) }
        ]
      }
    }
  })

  expect(getRenderedEventCount(wrapper)).toBe(2)
})

it('handles multiple prop changes, include event reset', (done) => {
  let viewMountCnt = 0
  let eventRenderCnt = 0
  let options = {
    ...DEFAULT_OPTIONS,
    events: buildEvents(1),
    viewDidMount() {
      viewMountCnt++
    },
    eventContent() {
      eventRenderCnt++
    }
  }

  let wrapper = mount(FullCalendar, {
    propsData: { options }
  })

  expect(getRenderedEventCount(wrapper)).toBe(1)
  expect(isWeekendsRendered(wrapper)).toBe(true)
  expect(viewMountCnt).toBe(1)
  expect(eventRenderCnt).toBe(1)

  viewMountCnt = 0
  eventRenderCnt = 0

  wrapper.setProps({
    options: {
      ...options,
      direction: 'rtl',
      weekends: false,
      events: buildEvents(2)
    }
  })

  Vue.nextTick().then(() => {
    expect(getRenderedEventCount(wrapper)).toBe(2)
    expect(isWeekendsRendered(wrapper)).toBe(false)
    expect(viewMountCnt).toBe(0)
    expect(eventRenderCnt).toBe(2) // TODO: get this down to 1 (only 1 new event rendered)
    done()
  })
})

it('should expose an API', async () => {
  let wrapper = mount(FullCalendar, { propsData: { options: DEFAULT_OPTIONS } })
  let calendarApi = wrapper.vm.getApi()
  expect(calendarApi).toBeTruthy()

  let newDate = new Date(Date.UTC(2000, 0, 1))
  calendarApi.gotoDate(newDate)
  expect(calendarApi.getDate().valueOf()).toBe(newDate.valueOf())
})


const COMPONENT_FOR_API = {
  components: {
    FullCalendar
  },
  template: `
    <div>
      <FullCalendar :options='calendarOptions' ref='fullCalendar' />
    </div>
  `,
  data() {
    return {
      calendarOptions: DEFAULT_OPTIONS
    }
  },
  methods: {
    gotoDate(newDate) {
      let calendarApi = this.$refs.fullCalendar.getApi()
      calendarApi.gotoDate(newDate)
    },
    getDate() {
      let calendarApi = this.$refs.fullCalendar.getApi()
      return calendarApi.getDate()
    }
  }
}

it('should expose an API in $refs', async () => {
  let wrapper = mount(COMPONENT_FOR_API)
  let newDate = new Date(Date.UTC(2000, 0, 1))

  wrapper.vm.gotoDate(newDate)
  expect(wrapper.vm.getDate().valueOf()).toBe(newDate.valueOf())
})


// toolbar/event non-reactivity

const COMPONENT_FOR_OPTION_MANIP = {
  props: [ 'calendarViewDidMount', 'calendarEventContent' ],
  components: {
    FullCalendar
  },
  template: `
    <div>
      <div>calendarHeight: {{ calendarOptions.height }}</div>
      <FullCalendar :options='calendarOptions' />
    </div>
  `,
  data() {
    return {
      something: 0,
      calendarOptions: {
        ...DEFAULT_OPTIONS,
        viewDidMount: this.calendarViewDidMount, // pass the prop
        eventContent: this.calendarEventContent, // pass the prop
        headerToolbar: buildToolbar(),
        events: buildEvents(1),
        weekends: true // needs to be initially present if we plan on changing it (a Vue concept)
      }
    }
  },
  methods: {
    changeSomething() {
      this.something++
    },
    disableWeekends() {
      this.calendarOptions.weekends = false
    }
  }
}

it('handles an object change when prop is reassigned', (done) => {
  let wrapper = mount(COMPONENT_FOR_OPTION_MANIP)
  expect(isWeekendsRendered(wrapper)).toBe(true)

  wrapper.vm.disableWeekends()

  Vue.nextTick().then(() => {
    expect(isWeekendsRendered(wrapper)).toBe(false)
    done()
  })
})

it('avoids rerendering unchanged toolbar/events', async () => {
  let viewMountCnt = 0
  let eventRenderCnt = 0

  let wrapper = mount(COMPONENT_FOR_OPTION_MANIP, {
    propsData: {
      calendarViewDidMount() {
        viewMountCnt++
      },
      calendarEventContent() {
        eventRenderCnt++
      }
    }
  })

  expect(viewMountCnt).toBe(1)
  expect(eventRenderCnt).toBe(1)

  viewMountCnt = 0
  eventRenderCnt = 0

  wrapper.vm.changeSomething()
  expect(viewMountCnt).toBe(0)
  expect(eventRenderCnt).toBe(0)
})


// event reactivity

const COMPONENT_FOR_EVENT_MANIP = {
  components: {
    FullCalendar
  },
  template: `
    <FullCalendar :options='calendarOptions' />
  `,
  data() {
    return {
      calendarOptions: {
        ...DEFAULT_OPTIONS,
        events: buildEvents(1)
      }
    }
  },
  methods: {
    addEvent() {
      this.calendarOptions.events.push(buildEvent(1))
    },
    updateTitle(title) {
      this.calendarOptions.events[0].title = title
    }
  }
}

it('reacts to event adding', (done) => {
  let wrapper = mount(COMPONENT_FOR_EVENT_MANIP)
  expect(getRenderedEventCount(wrapper)).toBe(1)

  wrapper.vm.addEvent()
  Vue.nextTick().then(() => {
    expect(getRenderedEventCount(wrapper)).toBe(2)
    done()
  })
})

it('reacts to event property changes', (done) => {
  let wrapper = mount(COMPONENT_FOR_EVENT_MANIP)
  expect(getFirstEventTitle(wrapper)).toBe('event0')
  wrapper.vm.updateTitle('another title')
  Vue.nextTick().then(() => {
    expect(getFirstEventTitle(wrapper)).toBe('another title')
    done()
  })
})


// event reactivity with fetch function

const EVENT_FUNC_COMPONENT = {
  components: {
    FullCalendar
  },
  template: `
    <FullCalendar :options='calendarOptions' />
  `,
  data() {
    return {
      calendarOptions: {
        ...DEFAULT_OPTIONS,
        events: this.fetchEvents
      }
    }
  },
  methods: {
    fetchEvents(fetchInfo, successCallback) {
      setTimeout(() => {
        successCallback(buildEvents(2))
      }, 0)
    }
  }
}

it('can receive an async event function', function(done) {
  let wrapper = mount(EVENT_FUNC_COMPONENT)
  setTimeout(() => {
    expect(getRenderedEventCount(wrapper)).toBe(2)
    done()
  }, 100)
})


// event reactivity with computed prop

const EVENT_COMP_PROP_COMPONENT = {
  components: {
    FullCalendar
  },
  template: `
    <FullCalendar :options='calendarOptions' />
  `,
  data() {
    return {
      first: true
    }
  },
  computed: {
    calendarOptions() {
      return {
        ...DEFAULT_OPTIONS,
        events: this.first ? [] : buildEvents(2)
      }
    }
  },
  methods: {
    markNotFirst() {
      this.first = false
    }
  }
}

it('reacts to computed events prop', (done) => {
  let wrapper = mount(EVENT_COMP_PROP_COMPONENT)
  expect(getRenderedEventCount(wrapper)).toBe(0)

  wrapper.vm.markNotFirst()
  Vue.nextTick().then(() => {
    expect(getRenderedEventCount(wrapper)).toBe(2)
    done()
  })
})


// component with vue slots

const COMPONENT_WITH_SLOTS = {
  components: {
    FullCalendar
  },
  template: `
    <FullCalendar :options='calendarOptions'>
      <template v-slot:eventContent="arg">
        <b>{{ arg.timeText }}</b>
        <i>{{ arg.event.title }}</i>
      </template>
    </FullCalendar>
  `,
  data() {
    return {
      calendarOptions: {
        ...DEFAULT_OPTIONS,
        events: buildEvents(1)
      }
    }
  },
  methods: {
    resetEvents() {
      this.calendarOptions.events = buildEvents(1)
    }
  }
}

it('renders and rerenders a custom slot', (done) => {
  let wrapper = mount(COMPONENT_WITH_SLOTS)
  let eventEl = getRenderedEventEls(wrapper).at(0)
  expect(eventEl.findAll('b').length).toBe(1)

  wrapper.vm.resetEvents()
  Vue.nextTick().then(() => {
    eventEl = getRenderedEventEls(wrapper).at(0)
    expect(eventEl.findAll('b').length).toBe(1)
    done()
  })
})

it('calls nested vue lifecycle methods when in custom content', (done) => {
  let mountCalled = false
  let beforeDestroyCalled = false
  let destroyCalled = false
  let wrapper = mount({
    components: {
      FullCalendar,
      EventContent: {
        props: {
          event: { type: Object, required: true }
        },
        template: `
          <div>{{ event.title }}</div>
        `,
        mounted() {
          mountCalled = true
        },
        beforeDestroy() {
          beforeDestroyCalled = true
        },
        destroyed() {
          destroyCalled = true
        },
      }
    },
    template: `
      <FullCalendar :options='calendarOptions'>
        <template v-slot:eventContent="arg">
          <EventContent :event="arg.event" />
        </template>
      </FullCalendar>
    `,
    data() {
      return {
        calendarOptions: {
          ...DEFAULT_OPTIONS,
          events: buildEvents(1)
        }
      }
    }
  })
  Vue.nextTick().then(() => {
    expect(mountCalled).toBe(true)
    wrapper.destroy()

    Vue.nextTick().then(() => {
      expect(beforeDestroyCalled).toBe(true)
      expect(destroyCalled).toBe(true)
      done()
    })
  })
})

const COMPONENT_USING_ROOT_OPTIONS_IN_SLOT = {
  components: {
    FullCalendar
  },
  template: `
    <FullCalendar :options='calendarOptions'>
      <template v-slot:eventContent="arg">this is an event</template>
    </FullCalendar>
  `,
  data() {
    return {
      calendarOptions: {
        ...DEFAULT_OPTIONS,
        events: buildEvents(1)
      }
    }
  },
}

/**
 * Ensures we can use plugins and emit events from within the slots just
 * like any other place.
 */
it('adds slots as child components', async () => {
  let wrapper = mount(COMPONENT_USING_ROOT_OPTIONS_IN_SLOT)
  let component = wrapper.findComponent(FullCalendar)

  expect(component.vm.$children.length).toBe(1);
});


// dynamic events

const DynamicEvent = () => import('./DynamicEvent.vue')

const COMPONENT_WITH_DYNAMIC_SLOTS = {
  components: {
    FullCalendar,
    DynamicEvent
  },
  template: `
    <FullCalendar :options='calendarOptions'>
      <template v-slot:eventContent="arg">
        <dynamic-event :event="arg.event" />
      </template>
    </FullCalendar>
  `,
  data() {
    return {
      calendarOptions: {
        ...DEFAULT_OPTIONS,
        events: buildEvents(1)
      }
    }
  }
}

// https://github.com/fullcalendar/fullcalendar-vue/issues/122
xit('renders dynamically imported event', async () => {
  let wrapper = mount(COMPONENT_WITH_DYNAMIC_SLOTS)
  let eventEl = getRenderedEventEls(wrapper).at(0)
  expect(eventEl.findAll('.dynamic-event').length).toBe(1)
})



// FullCalendar options utils

function buildEvents(length) {
  let events = []

  for (let i = 0; i < length; i++) {
    events.push(buildEvent(i))
  }

  return events
}

function buildEvent(i) {
  return { title: 'event' + i, start: DEFAULT_OPTIONS.initialDate }
}

function buildToolbar() {
  return {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  }
}


// DOM querying utils

function isSkeletonRendered(wrapper) {
  return wrapper.find('.fc').exists()
}

function isWeekendsRendered(wrapper) {
  return wrapper.find('.fc-day-sat').exists()
}

function getRenderedEventEls(wrapper) {
  return wrapper.findAll('.fc-event')
}

function getRenderedEventCount(wrapper) {
  return getRenderedEventEls(wrapper).length
}

function getFirstEventTitle(wrapper) {
  return wrapper.find('.fc-event-title').text()
}
