<template>
  <div
    :class="[
      'meter',
      backgroundColorClass,
      showValue && firstMeterPercentage === 0 ? 'noValueDisplay pb-6' : '',
    ]"
  >
    <span
      :style="{width: firstMeterPercentage + '%'}"
      :class="[
        'meter-1',
        color === 'secondary' ? 'bg-secondary-500' : 'bg-primary-500',
      ]"
    />
    <span
      v-if="showValue"
      :style="getPercentagePosition(firstMeterPercentage)"
      class="font-semibold valueDisplay"
    >
      {{ valueToDisplay }}
    </span>
    <span :style="{width: secondMeterPercentage + '%'}" class="meter-2" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseProgressMeter',
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
      if (isNaN(part) || isNaN(total) || total <= 0) {
        return 0
      }
      const percent = (part / total) * 100
      if (percent > 100) {
        return 100
      }
      return percent
    },
    getPercentagePosition(percent) {
      if (percent > 15) {
        return {right: Math.abs(percent - 100) + '%'}
      } else {
        return {left: '0%'}
      }
    },
  },
}
</script>

<style lang="postcss">
.meter {
  @apply h-3 relative rounded;
}

.meter.is-small {
  @apply h-2;
}

.meter.is-small > span {
  @apply bg-secondary-500;
}

.meter > span {
  @apply block h-full absolute rounded top-0 overflow-hidden;
}
.meter > span.meter-1 {
  @apply z-10;
}

.meter > span.meter-2 {
  @apply bg-tertiary-400;
}

.meter > .valueDisplay {
  @apply absolute  overflow-visible left-auto right-auto top-full;
}

.meter.noValueDisplay {
  @apply h-auto;
}

.meter.noValueDisplay .valueDisplay {
  @apply h-0;
  top: 0;
}
</style>
