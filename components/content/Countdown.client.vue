<script setup>
const props = defineProps(['date', 'units'])

// props: {
//   date: {
//     type: Number,
//     coerce: str => Math.trunc(Date.parse(str) / 1000)
//   }
// },

const now = ref(Math.trunc((new Date()).getTime() / 1000))

const usableDate = computed(() => {
  return Math.trunc(Date.parse(props.date) / 1000)
})

const seconds = computed(() => {
  return (usableDate.value - now.value) % 60
})

const minutes = computed(() => {
  return Math.trunc((usableDate.value - now.value) / 60) % 60
})

const hours = computed(() => {
  return Math.trunc((usableDate.value - now.value) / 60 / 60) % 24
})

const days = computed(() => {
  return Math.trunc((usableDate.value - now.value) / 60 / 60 / 24)
})

onMounted(() => {
  window.setInterval(() => {
    now.value = Math.trunc((new Date()).getTime() / 1000)
  }, 1000)
})

function twoDigits(number) {
  return (number < 10)
    ? `0${number}`
    : number
}
</script>

<template>
  <div>
    <div class="countdown__header aside__header">
      Countdown
    </div>
    <div class="countdown">
      <div class="countdown__days">
        <div class="countdown__number">
          <!-- {{ days | twoDigits }} -->
          {{ days }}
        </div>
        <div class="countdown__label">
          Days
        </div>
      </div>
      <div class="countdown__hours">
        <div class="countdown__number">
          <!-- {{ hours | twoDigits }} -->
          {{ hours }}
        </div>
        <div class="countdown__label">
          Hours
        </div>
      </div>
      <div class="countdown__minutes">
        <div class="countdown__number">
          <!-- {{ minutes | twoDigits }} -->
          {{ minutes }}
        </div>
        <div class="countdown__label">
          Mins
        </div>
      </div>
      <div class="countdown__seconds">
        <div class="countdown__number">
          <!-- {{ seconds | twoDigits }} -->
          {{ seconds }}
        </div>
        <div class="countdown__label">
          Secs
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
  .countdown
    display flex
    justify-content space-between
    width 100%

    > *
      // align-items center
      display flex
      flex-direction column
      justify-content center

  .countdown__number
    align-items center
    background-color color-claret
    color color-white
    display flex
    font-family Roboto-Regular
    font-size 36px
    height 80px
    justify-content center
    text-align center
    width 80px
    // line-height 3 // 48px

  .countdown__label
    color color-claret
    font-family Roboto-Regular
    font-size 20px
    // line-height 1.625 // 26px
    text-transform uppercase
</style>
