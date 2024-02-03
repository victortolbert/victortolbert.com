<script setup>
import { Bar } from 'vue-chartjs'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js'

defineProps({
  chartData: {
    type: Object,
    required: true,
  },
  chartOptions: {
    type: Object,
    default: () => {},
  },
})

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// const chartStyle = computed(() => {
//   return {
//     height: '250px',
//     position: 'relative',
//   }
// })
</script>

<template>
  <ClientOnly>
    <div class="grid gap-4">
      <Bar
        id="bar-chart-id"
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </ClientOnly>
</template>
