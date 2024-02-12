<script setup>
defineProps({
  campaign: {
    type: Object,
  },
})

const dayparts = ref(['EM', 'EN', 'PR', 'LF'])
</script>

<template>
  <div v-if="campaign.daypartSummary" class="daypart-summary-chart">
    <!-- <Chart
      :categories="dayparts"
      :series="campaign.series"
      title="Daypart Summary"
    /> -->
  </div>
</template>
