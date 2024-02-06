<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<template>
  <svg
    viewBox="0 0 36 36"
    class="circular-chart md:my-2 mx-auto"
  >
    <path
      class="circle-bg"
      d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <path
      :stroke-dasharray="`${value}, 100`"
      class="circle"
      d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <text
      x="18"
      y="20.35"
      class="percentage"
    >{{ value }}%</text>
  </svg>
</template>

<style lang="scss" scoped>
// @import '../../../../sass/_variables.scss';
// @use "~/assets/scss/_variables.scss";
.single-chart {
  width: 33%;
  justify-content: space-around;
}

.circular-chart {
  display: block;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart .circle {
  stroke: $secondary;
}

.percentage {
  fill: #666;
  font-size: 0.5em;
  text-anchor: middle;
}
</style>
