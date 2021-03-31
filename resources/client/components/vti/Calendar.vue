<script lang="ts">
// With that setup, it's easy to even pass back the Calendar Api to the parent with a simple event:
// emit("onLoaded", calendar.value)

// needed to make sure the `vdom` loads before everything else - fix for vite
import '@fullcalendar/core/vdom'
import { Calendar, CalendarOptions } from '@fullcalendar/core'
import { defineComponent, h, onMounted, onUnmounted, ref, watchEffect, } from 'vue'

export default defineComponent({
  props: {
    options: Object as () => CalendarOptions,
  },

  setup(props) {
    const el = ref<HTMLElement>()

    const calendar = ref<Calendar>()

    onMounted(() => {
      calendar.value = new Calendar(el.value!, props.options)
      calendar.value.render()
    })

    watchEffect(() => {
      if (calendar.value) {
        calendar.value.pauseRendering()
        calendar.value.resetOptions(props.options)
        calendar.value.resumeRendering()
      }
    })

    onUnmounted(() => {
      calendar.value?.destroy()
    })

    return () => h('div', { ref: el })
  },
})
</script>
