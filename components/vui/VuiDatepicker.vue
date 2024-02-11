<script>
import DateUtils from '~/utils/date-utils'
import DateLanguages from '~/utils/date-languages'

export default {
  props: {
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
  },
  data() {
    return {
      /*
         * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
         * This represents the first day of the current viewing month
         * {Number}
         */
      currDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime(),
      /*
         * Selected Date
         * {Date}
         */
      selectedDate: null,
      /*
         * Flags to show calendar views
         * {Boolean}
         */
      showDayView: false,
      showMonthView: false,
      showYearView: false,
      /*
         * Helper arrays for names
         */
      /*
         * Positioning
         */
      calendarHeight: 0,
    }
  },
  computed: {

    formattedValue() {
      if (!this.selectedDate)
        return null

      return DateUtils.formatDate(new Date(this.selectedDate), this.format, this.translation)
    },
    translation() {
      return DateLanguages.translations[this.language]
    },
    currMonthName() {
      const d = new Date(this.currDate)
      return DateUtils.getMonthNameAbbr(d.getMonth(), this.translation.months.abbr)
    },
    currYear() {
      const d = new Date(this.currDate)
      return d.getFullYear()
    },
    /**
     * Returns the day number of the week less one for the first of the current month
     * Used to show amount of empty cells before the first in the day calendar layout
     * @return {number}
     */
    blankDays() {
      const d = new Date(this.currDate)
      const dObj = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes())
      if (this.mondayFirst)
        return dObj.getDay() > 0 ? dObj.getDay() - 1 : 6

      return dObj.getDay()
    },
    daysOfWeek() {
      if (this.mondayFirst) {
        const tempDays = this.translation.days.slice()
        tempDays.push(tempDays.shift())
        return tempDays
      }
      return this.translation.days
    },
    days() {
      const d = new Date(this.currDate)
      const days = []
      // set up a new date object to the beginning of the current 'page'
      const dObj = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes())
      const daysInMonth = DateUtils.daysInMonth(dObj.getFullYear(), dObj.getMonth())
      for (let i = 0; i < daysInMonth; i++) {
        days.push({
          date: dObj.getDate(),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedDate(dObj),
          isDisabled: this.isDisabledDate(dObj),
          isHighlighted: this.isHighlightedDate(dObj),
        })
        dObj.setDate(dObj.getDate() + 1)
      }
      return days
    },
    months() {
      const d = new Date(this.currDate)
      const months = []
      // set up a new date object to the beginning of the current 'page'
      const dObj = new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes())
      for (let i = 0; i < 12; i++) {
        months.push({
          month: DateUtils.getMonthName(i, this.translation.months.original),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedMonth(dObj),
          isDisabled: this.isDisabledMonth(dObj),
        })
        dObj.setMonth(dObj.getMonth() + 1)
      }
      return months
    },
    years() {
      const d = new Date(this.currDate)
      const years = []
      // set up a new date object to the beginning of the current 'page'
      const dObj = new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes())
      for (let i = 0; i < 10; i++) {
        years.push({
          year: dObj.getFullYear(),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedYear(dObj),
          isDisabled: this.isDisabledYear(dObj),
        })
        dObj.setFullYear(dObj.getFullYear() + 1)
      }
      return years
    },
    calendarStyle() {
      let elSize = {
        top: 0,
        height: 0,
      }
      if (this.$el)
        elSize = this.$el.getBoundingClientRect()

      // let heightNeeded = elSize.top + elSize.height + this.calendarHeight || 0
      const styles = {}
      // if the calendar doesn't fit on the window without scrolling position it above the input
      // if (heightNeeded > window.innerHeight) {
      //   styles = {
      //     'bottom': elSize.height + 'px'
      //   }
      // }
      if (this.isInline())
        styles.position = 'static'

      return styles
    },
    calendarStyleSecondary() {
      return (this.isInline()) ? { position: 'static' } : {}
    },
  },
  watch: {
    value(value) {
      this.setValue(value)
    },
  },
  /**
   * Vue 2.x
   */
  mounted() {
    this.init()
  },
  methods: {
    close() {
      this.showDayView = this.showMonthView = this.showYearView = false
    },
    isOpen() {
      return this.showDayView || this.showMonthView || this.showYearView
    },
    isInline() {
      return typeof this.inline !== 'undefined' && this.inline
    },
    showCalendar() {
      if (this.isInline())
        return false

      if (this.isOpen())
        return this.close()

      this.showDayCalendar()
    },
    showDayCalendar() {
      this.close()
      this.showDayView = true
      this.$emit('opened')
    },
    showMonthCalendar() {
      this.close()
      this.showMonthView = true
    },
    showYearCalendar() {
      this.close()
      this.showYearView = true
    },

    setDate(timestamp) {
      this.selectedDate = new Date(timestamp)
      this.currDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1).getTime()
      this.$emit('selected', new Date(timestamp))
      this.$emit('input', new Date(timestamp))
    },

    /**
     * @param {object} day
     */
    selectDate(day) {
      if (day.isDisabled)
        return false

      this.setDate(day.timestamp)
      if (this.isInline())
        return this.showDayCalendar()

      this.close()
    },

    /**
     * @param {object} month
     */
    selectMonth(month) {
      if (month.isDisabled)
        return false

      this.currDate = month.timestamp
      this.showDayCalendar()
    },

    /**
     * @param {object} year
     */
    selectYear(year) {
      if (year.isDisabled)
        return false

      this.currDate = year.timestamp
      this.showMonthCalendar()
    },

    /**
     * @return {number}
     */
    getMonth() {
      const d = new Date(this.currDate)
      return d.getMonth()
    },

    /**
     * @return {number}
     */
    getYear() {
      const d = new Date(this.currDate)
      return d.getFullYear()
    },

    /**
     * @return {string}
     */
    getDecade() {
      const d = new Date(this.currDate)
      const sD = Math.floor(d.getFullYear() / 10) * 10
      return `${sD}'s`
    },

    previousMonth() {
      if (this.previousMonthDisabled())
        return false

      const d = new Date(this.currDate)
      d.setMonth(d.getMonth() - 1)
      this.currDate = d.getTime()
    },

    previousMonthDisabled() {
      if (typeof this.disabled === 'undefined' || typeof this.disabled.to === 'undefined' || !this.disabled.to)
        return false

      const d = new Date(this.currDate)
      if (
        this.disabled.to.getMonth() >= d.getMonth()
        && this.disabled.to.getFullYear() >= d.getFullYear()
      )
        return true

      return false
    },

    nextMonth() {
      if (this.nextMonthDisabled())
        return false

      const d = new Date(this.currDate)
      const daysInMonth = DateUtils.daysInMonth(d.getFullYear(), d.getMonth())
      d.setDate(d.getDate() + daysInMonth)
      this.currDate = d.getTime()
    },

    nextMonthDisabled() {
      if (typeof this.disabled === 'undefined' || typeof this.disabled.from === 'undefined' || !this.disabled.from)
        return false

      const d = new Date(this.currDate)
      if (
        this.disabled.from.getMonth() <= d.getMonth()
        && this.disabled.from.getFullYear() <= d.getFullYear()
      )
        return true

      return false
    },

    previousYear() {
      if (this.previousYearDisabled())
        return false

      const d = new Date(this.currDate)
      d.setYear(d.getFullYear() - 1)
      this.currDate = d.getTime()
    },

    previousYearDisabled() {
      if (typeof this.disabled === 'undefined' || typeof this.disabled.to === 'undefined' || !this.disabled.to)
        return false

      const d = new Date(this.currDate)
      if (this.disabled.to.getFullYear() >= d.getFullYear())
        return true

      return false
    },

    nextYear() {
      if (this.nextYearDisabled())
        return false

      const d = new Date(this.currDate)
      d.setYear(d.getFullYear() + 1)
      this.currDate = d.getTime()
    },

    nextYearDisabled() {
      if (typeof this.disabled === 'undefined' || typeof this.disabled.from === 'undefined' || !this.disabled.from)
        return false

      const d = new Date(this.currDate)
      if (this.disabled.from.getFullYear() <= d.getFullYear())
        return true

      return false
    },

    previousDecade() {
      if (this.previousDecadeDisabled())
        return false

      const d = new Date(this.currDate)
      d.setYear(d.getFullYear() - 10)
      this.currDate = d.getTime()
    },

    previousDecadeDisabled() {
      if (typeof this.disabled === 'undefined' || typeof this.disabled.to === 'undefined' || !this.disabled.to)
        return false

      const d = new Date(this.currDate)
      if (Math.floor(this.disabled.to.getFullYear() / 10) * 10 >= Math.floor(d.getFullYear() / 10) * 10)
        return true

      return false
    },

    nextDecade() {
      if (this.nextDecadeDisabled())
        return false

      const d = new Date(this.currDate)
      d.setYear(d.getFullYear() + 10)
      this.currDate = d.getTime()
    },

    nextDecadeDisabled() {
      if (typeof this.disabled === 'undefined' || typeof this.disabled.from === 'undefined' || !this.disabled.from)
        return false

      const d = new Date(this.currDate)
      if (Math.ceil(this.disabled.from.getFullYear() / 10) * 10 <= Math.ceil(d.getFullYear() / 10) * 10)
        return true

      return false
    },

    /**
     * Whether a day is selected
     * @param {Date}
     * @return {boolean}
     */
    isSelectedDate(dObj) {
      return this.selectedDate && this.selectedDate.toDateString() === dObj.toDateString()
    },

    /**
     * Whether a day is disabled
     * @param {Date}
     * @return {boolean}
     */
    isDisabledDate(date) {
      let disabled = false

      if (typeof this.disabled === 'undefined')
        return false

      if (typeof this.disabled.dates !== 'undefined') {
        this.disabled.dates.forEach((d) => {
          if (date.toDateString() === d.toDateString()) {
            disabled = true
            return true
          }
        })
      }
      if (typeof this.disabled.to !== 'undefined' && this.disabled.to && date < this.disabled.to)
        disabled = true

      if (typeof this.disabled.from !== 'undefined' && this.disabled.from && date > this.disabled.from)
        disabled = true

      if (typeof this.disabled.days !== 'undefined' && this.disabled.days.includes(date.getDay()))
        disabled = true

      return disabled
    },

    /**
     * Whether a day is highlighted (only if it is not disabled already)
     * @param {Date}
     * @return {boolean}
     */
    isHighlightedDate(date) {
      if (this.isDisabledDate(date))
        return false

      let highlighted = false

      if (typeof this.highlighted === 'undefined')
        return false

      if (typeof this.highlighted.dates !== 'undefined') {
        this.highlighted.dates.forEach((d) => {
          if (date.toDateString() === d.toDateString()) {
            highlighted = true
            return true
          }
        })
      }

      if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to))
        highlighted = date >= this.highlighted.from && date <= this.highlighted.to

      if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.includes(date.getDay()))
        highlighted = true

      return highlighted
    },

    /**
     * Helper
     * @param  {mixed}  prop
     * @return {boolean}
     */
    isDefined(prop) {
      return typeof prop !== 'undefined' && prop
    },

    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {boolean}
     */
    isSelectedMonth(date) {
      return (this.selectedDate
        && this.selectedDate.getFullYear() === date.getFullYear()
        && this.selectedDate.getMonth() === date.getMonth())
    },

    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {boolean}
     */
    isDisabledMonth(date) {
      let disabled = false

      if (typeof this.disabled === 'undefined')
        return false

      if (typeof this.disabled.to !== 'undefined' && this.disabled.to) {
        if (
          (date.getMonth() < this.disabled.to.getMonth() && date.getFullYear() <= this.disabled.to.getFullYear())
          || date.getFullYear() < this.disabled.to.getFullYear()
        )
          disabled = true
      }
      if (typeof this.disabled.from !== 'undefined' && this.disabled.from) {
        if (
          this.disabled.from
          && (date.getMonth() > this.disabled.from.getMonth() && date.getFullYear() >= this.disabled.from.getFullYear())
          || date.getFullYear() > this.disabled.from.getFullYear()
        )
          disabled = true
      }
      return disabled
    },

    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {boolean}
     */
    isSelectedYear(date) {
      return this.selectedDate && this.selectedDate.getFullYear() === date.getFullYear()
    },

    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {boolean}
     */
    isDisabledYear(date) {
      let disabled = false
      if (typeof this.disabled === 'undefined' || !this.disabled)
        return false

      if (typeof this.disabled.to !== 'undefined' && this.disabled.to) {
        if (date.getFullYear() < this.disabled.to.getFullYear())
          disabled = true
      }
      if (typeof this.disabled.from !== 'undefined' && this.disabled.from) {
        if (date.getFullYear() > this.disabled.from.getFullYear())
          disabled = true
      }

      return disabled
    },

    /**
     * Set the datepicker value
     * @param {Date|null} date
     */
    setValue(date) {
      if (!date) {
        const d = new Date()
        this.currDate = new Date(d.getFullYear(), d.getMonth(), 1).getTime()
        this.selectedDate = null
        return
      }
      this.selectedDate = date
      this.currDate = new Date(date.getFullYear(), date.getMonth(), 1).getTime()
    },

    init() {
      if (this.value)
        this.setValue(this.value)

      if (this.isInline())
        this.showDayCalendar()

      this.$nextTick(() => {
        this.calendarHeight = this.$el.querySelector('.calendar').getBoundingClientRect().height
      })

      document.addEventListener('click', (e) => {
        if (this.$el && !this.$el.contains(e.target)) {
          if (this.isInline())
            return this.showDayCalendar()

          this.close()
        }
      }, false)
    },
  },
  /**
   * Vue 1.x
   */
  ready() {
    this.init()
  },
}
</script>

<template>
  <div class="datepicker" :class="wrapperClass">
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
             disabled: previousMonthDisabled(currDate)
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
            disabled: nextMonthDisabled(currDate)
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
          highlighted: day.isHighlighted
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
            disabled: previousYearDisabled(currDate)
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
            disabled: nextYearDisabled(currDate)
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
          disabled: month.isDisabled
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
            disabled: previousDecadeDisabled(currDate)
          }"
          @click="previousDecade"
        />
        <span>{{ getDecade() }}</span>
        <span
          class="next"
          :class="{
            disabled: nextMonthDisabled(currDate)
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
          disabled: year.isDisabled
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
