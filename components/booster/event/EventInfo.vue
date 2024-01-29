<script setup lang="ts">
const props = defineProps<{
  funRun: string
  displayDaysRemaining?: boolean
}>()

const { t } = useI18n()

const funRunIgnoreTimeZone = computed(() => {
  return new Date(props.funRun.replace(/-/g, '/').replace(/T.+/, ''))
})

const eventDate = computed(() => {
  const month = funRunIgnoreTimeZone.value.getMonth() + 1
  const day = funRunIgnoreTimeZone.value.getDate()
  let monthString = ''
  let dayString = ''

  if (month < 10)
    monthString = `0${month}`

  if (day < 10)
    dayString = `0${day}`

  return `${monthString}/${dayString}/${funRunIgnoreTimeZone.value.getFullYear()}`
})

const daysRemaining = computed(() => {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  // const days = Math.ceil((funRunIgnoreTimeZone.value - today.getTime()) / (1000 * 60 * 60 * 24))
  // if (days < 0)
  //   return 0

  // return days
  return today.getTime() - funRunIgnoreTimeZone.value.getTime()
})
</script>

<template>
  <div class="max-w-4xl mx-auto w-full">
    <div class="pr-8">
      <span>{{ t('event_date') }}</span> <b>{{ eventDate }}</b>
    </div>
    <div v-if="daysRemaining && displayDaysRemaining">
      <b>{{ daysRemaining }}</b> {{ t('event_info.days_remaining') }}
    </div>
  </div>
</template>
