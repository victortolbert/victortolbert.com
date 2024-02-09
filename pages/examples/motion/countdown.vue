<script setup>
import { useCountdown } from '~/composables/useCountdown'
import Timer from '~/components/timer/Timer.vue'
import Button from '~/components/timer/TimerButton.vue'

const props = defineProps({
  expiryTimestamp: {
    type: Number,
    required: true,
  },
})

const timer = useCountdown(props.expiryTimestamp)

function reload() {
  // Restarts to 10 minutes timer
  const time = new Date()
  time.setSeconds(time.getSeconds() + 600)
  timer.restart(time)
}
</script>

<template>
  <div>
    <h2>UseTimer Demo</h2>
    <Timer :seconds="timer.seconds" :minutes="timer.minutes" :hours="timer.hours" :days="timer.days" />
    <Button type="button" @click="timer.start()">
      Start
    </Button>
    <Button type="button" @click="timer.pause()">
      Pause
    </Button>
    <Button type="button" @click="timer.resume()">
      Resume
    </Button>
    <Button
      type="button"
      @click="reload()"
    >
      Restart
    </Button>
  </div>
</template>
