<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    backgroundColorClass: {
      type: String,
      default: 'bg-gray-300',
    },
    goal: {
      type: [String, Number],
      default: 100,
    },
    firstMeter: {
      type: Number,
      default: 0,
    },
    secondMeter: {
      type: Number,
      default: 0,
    },
    showValue: {
      type: Boolean,
      default: false,
    },
    valueToDisplay: {
      type: String,
      default: '',
    },
  },
  computed: {
    firstMeterPercentage() {
      return this.getPercentage(this.firstMeter, this.goal)
    },
    secondMeterPercentage() {
      return this.getPercentage(this.firstMeter + this.secondMeter, this.goal)
    },
  },
  methods: {
    getPercentage(part, total) {
      if (Number.isNaN(part) || Number.isNaN(total) || total <= 0)
        return 0

      const percent = part / total * 100
      if (percent > 100)
        return 100

      return percent
    },
    getPercentagePosition(percent) {
      if (percent > 15)
        return { right: `${Math.abs((percent - 100))}%` }
      else
        return { left: '0%' }
    },
  },
}
</script>

<template>
  <div class="meter" :class="[backgroundColorClass, (showValue && firstMeterPercentage === 0 ? 'noValueDisplay pb-6' : '')]">
    <span
      :style="{ width: `${firstMeterPercentage}%` }"
      class="meter-1" :class="[color === 'secondary' ? 'has-background-secondary' : 'bg-primary']"
    />
    <span
      v-if="showValue"
      :style="getPercentagePosition(firstMeterPercentage)"
      class="valueDisplay font-semibold"
    >
      {{ valueToDisplay }}
    </span>
    <span
      :style="{ width: `${secondMeterPercentage}%` }"
      class="meter-2"
    />
  </div>
</template>

<style lang="scss">
$secondary: #2e86de;
$tertiary: #faa638;
.meter {
  height: 0.75rem;
  position: relative;
  border-radius: 25px;
}
.meter.is-small {
  height: 10px;
}
.meter.is-small > span {
  background-color: $secondary;
}

.meter > span {
  display: block;
  height: 100%;
  top: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: absolute;
  overflow: hidden;
}
.meter > span.meter-1 {
  z-index: 2;
}
.meter > span.meter-2 {
  background-color: $tertiary;
  z-index: 1;
}
.meter > .valueDisplay {
  position: absolute;
  right: 0;
  top: 100%;
  left: auto;
  right: auto;
  overflow: visible;
}
.meter.noValueDisplay {
  height: auto;
}
.meter.noValueDisplay .valueDisplay {
  top: 0px;
  height: 0px;
}
</style>
