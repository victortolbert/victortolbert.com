<script setup>
import DateUtils from '~/utils/date-utils'
import DateLanguages from '~/utils/date-languages'

const props = defineProps({
  value: {
    validator(val) {
      return val === null || val instanceof Date
    },
  },
  name: {
    value: String,
  },
  format: {
    value: String,
    default: 'MM/dd/yyyy',
  },
  language: {
    value: String,
    default: 'en',
  },
  disabled: {
    type: Object,
  },
  highlighted: {
    type: Object,
  },
  placeholder: {
    type: String,
  },
  inline: {
    type: Boolean,
  },
  inputClass: {
    type: String,
  },
  wrapperClass: {
    type: String,
  },
  mondayFirst: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['input', 'selected', 'opened'])

const datepicker = ref(null)
/*
 * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
 * This represents the first day of the current viewing month
 * {Number}
 */
const currDate = ref(new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime())

/*
 * Selected Date
 * {Date}
 */
const selectedDate = ref(null)

/*
 * Flags to show calendar views
 * {Boolean}
 */
const showDayView = ref(false)
const showMonthView = ref(false)
const showYearView = ref(false)

/*
 * Helper arrays for names
 */

/*
 * Positioning
 */
ccalendarHeight.value = ref(0)

const translation = computed(() => {
  return DateLanguages.translations[props.language]
})

const formattedValue = computed(() => {
  if (!selectedDate.value)
    return null

  return DateUtils.formatDate(new Date(selectedDate.value), props.format, translation.value)
})

const currMonthName = computed(() => {
  const d = new Date(currDate.value)
  return DateUtils.getMonthNameAbbr(d.getMonth(), translation.value.months.abbr)
})

const currYear = computed(() => {
  const d = new Date(currDate.value)
  return d.getFullYear()
})

/**
 * Returns the day number of the week less one for the first of the current month
 * Used to show amount of empty cells before the first in the day calendar layout
 * @return {number}
 */
const blankDays = computed(() => {
  const d = new Date(currDate.value)
  const dObj = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes())
  if (props.mondayFirst)
    return dObj.getDay() > 0 ? dObj.getDay() - 1 : 6

  return dObj.getDay()
})

const daysOfWeek = computed(() => {
  if (props.mondayFirst) {
    const tempDays = translation.value.days.slice()
    tempDays.push(tempDays.shift())
    return tempDays
  }
  return translation.value.days
})

const days = computed(() => {
  const d = new Date(currDate.value)
  const days = []
  // set up a new date object to the beginning of the current 'page'
  const dObj = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes())
  const daysInMonth = DateUtils.daysInMonth(dObj.getFullYear(), dObj.getMonth())
  for (let i = 0; i < daysInMonth; i++) {
    days.push({
      date: dObj.getDate(),
      timestamp: dObj.getTime(),
      isSelected: isSelectedDate(dObj),
      isDisabled: isDisabledDate(dObj),
      isHighlighted: isHighlightedDate(dObj),
    })
    dObj.setDate(dObj.getDate() + 1)
  }
  return days
})

const months = computed(() => {
  const d = new Date(currDate.value)
  const months = []
  // set up a new date object to the beginning of the current 'page'
  const dObj = new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes())
  for (let i = 0; i < 12; i++) {
    months.push({
      month: DateUtils.getMonthName(i, translation.value.months.original),
      timestamp: dObj.getTime(),
      isSelected: isSelectedMonth(dObj),
      isDisabled: isDisabledMonth(dObj),
    })
    dObj.setMonth(dObj.getMonth() + 1)
  }
  return months
})

const years = computed(() => {
  const d = new Date(currDate.value)
  const years = []

  // set up a new date object to the beginning of the current 'page'
  const dObj = new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes())
  for (let i = 0; i < 10; i++) {
    years.push({
      year: dObj.getFullYear(),
      timestamp: dObj.getTime(),
      isSelected: isSelectedYear(dObj),
      isDisabled: isDisabledYear(dObj),
    })
    dObj.setFullYear(dObj.getFullYear() + 1)
  }
  return years
})

const calendarStyle = computed(() => {
  let elSize = {
    top: 0,
    height: 0,
  }
  if (datepicker.value)
    elSize = datepicker.value.getBoundingClientRect()

  // let heightNeeded = elSize.top + elSize.height + calendarHeight.value || 0
  const styles = {}
  // if the calendar doesn't fit on the window without scrolling position it above the input
  // if (heightNeeded > window.innerHeight) {
  //   styles = {
  //     'bottom': elSize.height + 'px'
  //   }
  // }
  if (isInline())
    styles.position = 'static'

  return styles
})

const calendarStyleSecondary = computed(() => {
  return (isInline()) ? { position: 'static' } : {}
})

// watch: {
//   value(value) {
//     this.setValue(value)
//   },
// },

onMounted(() => {
  init()
})

function close() {
  showDayView.value = showMonthView.value = showYearView.value = false
}

function isOpen() {
  return showDayView.value || showMonthView.value || showYearView.value
}

function isInline() {
  return typeof props.inline !== 'undefined' && props.inline
}

function showCalendar() {
  if (isInline())
    return false

  if (isOpen())
    return close()

  showDayCalendar()
}
function showDayCalendar() {
  close()
  showDayView.value = true
  emit('opened')
}

function showMonthCalendar() {
  close()
  showMonthView.value = true
}

function showYearCalendar() {
  close()
  showYearView.value = true
}

function setDate(timestamp) {
  selectedDate.value = new Date(timestamp)
  currDate.value = new Date(selectedDate.value.getFullYear(), selectedDate.value.getMonth(), 1).getTime()
  emit('selected', new Date(timestamp))
  emit('input', new Date(timestamp))
}

/**
 * @param {object} day
 */
function selectDate(day) {
  if (day.isDisabled)
    return false

  setDate(day.timestamp)
  if (isInline())
    return showDayCalendar()

  close()
}

/**
 * @param {object} month
 */
function selectMonth(month) {
  if (month.isDisabled)
    return false

  currDate.value = month.timestamp
  showDayCalendar()
}

/**
 * @param {object} year
 */
function selectYear(year) {
  if (year.isDisabled)
    return false

  currDate.value = year.timestamp
  showMonthCalendar()
}

/**
 * @return {number}
 */
function getMonth() {
  const d = new Date(currDate.value)
  return d.getMonth()
}

/**
 * @return {number}
 */
function getYear() {
  const d = new Date(currDate.value)
  return d.getFullYear()
}

/**
 * @return {string}
 */
function getDecade() {
  const d = new Date(currDate.value)
  const sD = Math.floor(d.getFullYear() / 10) * 10
  return `${sD}'s`
}

function previousMonth() {
  if (previousMonthDisabled())
    return false

  const d = new Date(currDate.value)
  d.setMonth(d.getMonth() - 1)
  currDate.value = d.getTime()
}

function previousMonthDisabled() {
  if (typeof props.disabled === 'undefined' || typeof props.disabled.to === 'undefined' || !props.disabled.to)
    return false

  const d = new Date(currDate.value)
  if (
    props.disabled.to.getMonth() >= d.getMonth()
    && props.disabled.to.getFullYear() >= d.getFullYear()
  )
    return true

  return false
}

function nextMonth() {
  if (nextMonthDisabled())
    return false

  const d = new Date(currDate.value)
  const daysInMonth = DateUtils.daysInMonth(d.getFullYear(), d.getMonth())
  d.setDate(d.getDate() + daysInMonth)
  currDate.value = d.getTime()
}

function nextMonthDisabled() {
  if (typeof props.disabled === 'undefined' || typeof props.disabled.from === 'undefined' || !props.disabled.from)
    return false

  const d = new Date(currDate.value)
  if (
    props.disabled.from.getMonth() <= d.getMonth()
    && props.disabled.from.getFullYear() <= d.getFullYear()
  )
    return true

  return false
}

function previousYear() {
  if (previousYearDisabled())
    return false

  const d = new Date(currDate.value)
  d.setYear(d.getFullYear() - 1)
  currDate.value = d.getTime()
}

function previousYearDisabled() {
  if (typeof props.disabled === 'undefined' || typeof props.disabled.to === 'undefined' || !props.disabled.to)
    return false

  const d = new Date(currDate.value)
  if (props.disabled.to.getFullYear() >= d.getFullYear())
    return true

  return false
}

function nextYear() {
  if (nextYearDisabled())
    return false

  const d = new Date(currDate.value)
  d.setYear(d.getFullYear() + 1)
  currDate.value = d.getTime()
}

function nextYearDisabled() {
  if (typeof props.disabled === 'undefined' || typeof props.disabled.from === 'undefined' || !props.disabled.from)
    return false

  const d = new Date(currDate.value)
  if (props.disabled.from.getFullYear() <= d.getFullYear())
    return true

  return false
}

function previousDecade() {
  if (previousDecadeDisabled())
    return false

  const d = new Date(currDate.value)
  d.setYear(d.getFullYear() - 10)
  currDate.value = d.getTime()
}

function previousDecadeDisabled() {
  if (typeof props.disabled === 'undefined' || typeof props.disabled.to === 'undefined' || !props.disabled.to)
    return false

  const d = new Date(currDate.value)
  if (Math.floor(props.disabled.to.getFullYear() / 10) * 10 >= Math.floor(d.getFullYear() / 10) * 10)
    return true

  return false
}

function nextDecade() {
  if (nextDecadeDisabled())
    return false

  const d = new Date(currDate.value)
  d.setYear(d.getFullYear() + 10)
  currDate.value = d.getTime()
}

function nextDecadeDisabled() {
  if (typeof props.disabled === 'undefined' || typeof props.disabled.from === 'undefined' || !props.disabled.from)
    return false

  const d = new Date(currDate.value)
  if (Math.ceil(props.disabled.from.getFullYear() / 10) * 10 <= Math.ceil(d.getFullYear() / 10) * 10)
    return true

  return false
}

/**
 * Whether a day is selected
 * @param {Date}
 * @return {boolean}
 */
function isSelectedDate(dObj) {
  return selectedDate.value && selectedDate.value.toDateString() === dObj.toDateString()
}

/**
 * Whether a day is disabled
 * @param {Date}
 * @return {boolean}
 */
function isDisabledDate(date) {
  let disabled = false

  if (typeof props.disabled === 'undefined')
    return false

  if (typeof props.disabled.dates !== 'undefined') {
    props.disabled.dates.forEach((d) => {
      if (date.toDateString() === d.toDateString()) {
        disabled = true
        return true
      }
    })
  }
  if (typeof props.disabled.to !== 'undefined' && props.disabled.to && date < props.disabled.to)
    disabled = true

  if (typeof props.disabled.from !== 'undefined' && props.disabled.from && date > props.disabled.from)
    disabled = true

  if (typeof props.disabled.days !== 'undefined' && props.disabled.days.includes(date.getDay()))
    disabled = true

  return disabled
}

/**
 * Whether a day is highlighted (only if it is not disabled already)
 * @param {Date}
 * @return {boolean}
 */
function isHighlightedDate(date) {
  if (isDisabledDate(date))
    return false

  let highlighted = false

  if (typeof props.highlighted === 'undefined')
    return false

  if (typeof props.highlighted.dates !== 'undefined') {
    props.highlighted.dates.forEach((d) => {
      if (date.toDateString() === d.toDateString()) {
        highlighted = true
        return true
      }
    })
  }

  if (isDefined(props.highlighted.from) && isDefined(props.highlighted.to))
    highlighted = date >= props.highlighted.from && date <= props.highlighted.to

  if (typeof props.highlighted.days !== 'undefined' && props.highlighted.days.includes(date.getDay()))
    highlighted = true

  return highlighted
}

/**
 * Helper
 * @param  {mixed}  prop
 * @return {boolean}
 */
function isDefined(prop) {
  return typeof prop !== 'undefined' && prop
}

/**
 * Whether the selected date is in this month
 * @param {Date}
 * @return {boolean}
 */
function isSelectedMonth(date) {
  return (selectedDate.value
    && selectedDate.value.getFullYear() === date.getFullYear()
    && selectedDate.value.getMonth() === date.getMonth())
}

/**
 * Whether a month is disabled
 * @param {Date}
 * @return {boolean}
 */
function isDisabledMonth(date) {
  let disabled = false

  if (typeof props.disabled === 'undefined')
    return false

  if (typeof props.disabled.to !== 'undefined' && props.disabled.to) {
    if (
      (date.getMonth() < props.disabled.to.getMonth() && date.getFullYear() <= props.disabled.to.getFullYear())
      || date.getFullYear() < props.disabled.to.getFullYear()
    )
      disabled = true
  }
  if (typeof props.disabled.from !== 'undefined' && props.disabled.from) {
    if (
      props.disabled.from
      && ((date.getMonth() > props.disabled.from.getMonth() && date.getFullYear() >= props.disabled.from.getFullYear())
      || date.getFullYear() > props.disabled.from.getFullYear())
    )
      disabled = true
  }
  return disabled
}

/**
 * Whether a year is disabled
 * @param {Date}
 * @return {boolean}
 */
function isSelectedYear(date) {
  return selectedDate.value && selectedDate.value.getFullYear() === date.getFullYear()
}

/**
 * Whether a month is disabled
 * @param {Date}
 * @return {boolean}
 */
function isDisabledYear(date) {
  let disabled = false
  if (typeof props.disabled === 'undefined' || !props.disabled)
    return false

  if (typeof props.disabled.to !== 'undefined' && props.disabled.to) {
    if (date.getFullYear() < props.disabled.to.getFullYear())
      disabled = true
  }
  if (typeof props.disabled.from !== 'undefined' && props.disabled.from) {
    if (date.getFullYear() > props.disabled.from.getFullYear())
      disabled = true
  }

  return disabled
}

/**
 * Set the datepicker value
 * @param {Date|null} date
 */
function setValue(date) {
  if (!date) {
    const d = new Date()
    currDate.value = new Date(d.getFullYear(), d.getMonth(), 1).getTime()
    selectedDate.value = null
    return
  }
  selectedDate.value = date
  currDate.value = new Date(date.getFullYear(), date.getMonth(), 1).getTime()
}

function init() {
  if (props.value)
    setValue(props.value)

  if (isInline())
    showDayCalendar()

  nextTick(() => {
    calendarHeight.value = datepicker.value.querySelector('.calendar').getBoundingClientRect().height
  })

  document.addEventListener('click', (e) => {
    if (datepicker.value && !datepicker.value.contains(e.target)) {
      if (isInline())
        return showDayCalendar()

      close()
    }
  }, false)
}

init()
</script>

<template>
  <div ref="datepicker" class="datepicker" :class="wrapperClass">
    <input
      class="vui-input"
      :type="inline ? 'hidden' : 'text'"
      :class="inputClass"
      :name="name"
      :value="formattedValue"
      :placeholder="placeholder"
      readonly=""
      @click="showCalendar()"
    >
    <button
      class="btn btn-default calendar-button filter-calendar-button"
      type="button"
      ng-click="$event.preventDefault(); vm.isDateOpened = !vm.isDateOpened;"
    >
      <VuiIcon
        name="calendar"
        style="color: #692565"
      />
    </button>

    <!-- Day View -->
    <div v-show="showDayView" class="calendar" :style="calendarStyle">
      <header>
        <span
          class="prev"
          :class="{
            disabled: previousMonthDisabled(currDate),
          }"
          @click="previousMonth"
        />
        <span
          class="up"
          @click="showMonthCalendar"
        >
          {{ currMonthName }} {{ currYear }}
        </span>
        <span
          class="next"
          :class="{
            disabled: nextMonthDisabled(currDate),
          }"
          @click="nextMonth"
        />
      </header>
      <span
        v-for="dow in daysOfWeek"
        :key="`dow-${dow}`"
        class="cell day-header"
      >{{ d }}</span>
      <span
        v-for="bd in blankDays"
        :key="`blank-${bd}`"
        class="cell day blank"
      />
      <span
        v-for="day in days"
        :key="`day-${day.timestamp}`"
        class="cell day"
        track-by="timestamp"
        :class="{
          selected: day.isSelected,
          disabled: day.isDisabled,
          highlighted: day.isHighlighted,
        }"
        @click="selectDate(day)"
      >{{ day.date }}</span>
    </div>

    <!-- Month View -->
    <div
      v-show="showMonthView"
      class="calendar"
      :style="calendarStyleSecondary"
    >
      <header>
        <span
          class="prev"
          :class="{
            disabled: previousYearDisabled(currDate),
          }"
          @click="previousYear"
        />
        <span
          class="up"
          @click="showYearCalendar"
        >{{ getYear() }}</span>
        <span
          class="next"
          :class="{
            disabled: nextYearDisabled(currDate),
          }"
          @click="nextYear"
        />
      </header>
      <span
        v-for="month in months"
        :key="`month-${month.month}`"
        class="cell month"
        track-by="timestamp"
        :class="{
          selected: month.isSelected,
          disabled: month.isDisabled,
        }"
        @click.stop="selectMonth(month)"
      >{{ month.month }}</span>
    </div>

    <!-- Year View -->
    <div
      v-show="showYearView"
      class="calendar"
      :style="calendarStyleSecondary"
    >
      <header>
        <span
          class="prev"
          :class="{
            disabled: previousDecadeDisabled(currDate),
          }"
          @click="previousDecade"
        />
        <span>{{ getDecade() }}</span>
        <span
          class="next"
          :class="{
            disabled: nextMonthDisabled(currDate),
          }"
          @click="nextDecade"
        />
      </header>
      <span
        v-for="year in years"
        :key="`year-${year.year}`"
        class="cell year"
        track-by="timestamp"
        :class="{
          selected: year.isSelected,
          disabled: year.isDisabled,
        }"
        @click.stop="selectYear(year)"
      >{{ year.year }}</span>
    </div>
  </div>
</template>

<style lang="stylus">
  $width = 300px

  .datepicker
    position relative

  .calendar
      position absolute
      z-index 100
      background white
      width $width
      border 1px solid #ccc
      header
        display block
        line-height 40px
        span
          display inline-block
          text-align center
          width (100 - (100/7)*2)%
          float left

        .prev
        .next
          width (100/7)%
          float left
          text-indent -10000px
          position relative
          &:after
            content ''
            position absolute
            left 50%
            top 50%
            transform translateX(-50%) translateY(-50%)
            border 6px solid transparent

        .prev
          &:after
            border-right 10px solid #000
            margin-left -5px
          &.disabled:after
            border-right 10px solid #ddd
        .next
            &:after
              border-left 10px solid #000
              margin-left 5px
            &.disabled:after
              border-left 10px solid #ddd

        .prev:not(.disabled)
        .next:not(.disabled)
        .up:not(.disabled)
          cursor pointer
          &:hover
            background #eee

      .disabled
        color #ddd
        cursor default

      .cell
        display inline-block
        padding 0 5px
        width (100/7)%
        height 40px
        line-height 40px
        text-align center
        vertical-align middle
        border 1px solid transparent
        &:not(.blank):not(.disabled).day
        &:not(.blank):not(.disabled).month
        &:not(.blank):not(.disabled).year
          cursor pointer
          &:hover
            border 1px solid color-purple
        &.selected
          background color-purple
          color color-white
          &:hover
            background color-purple
          &.highlighted
            background color-purple
        &.highlighted
          background #cae5ed
        &.grey
          color #888

          &:hover
            background inherit

        &.day-header
          font-size 75%
          white-space no-wrap
          cursor inherit
          &:hover
            background inherit

      .month,
      .year
        width 33.333%
</style>
