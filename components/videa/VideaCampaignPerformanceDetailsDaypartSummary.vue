<script setup>
defineProps({
  campaign: {
    type: Object,
  },
})

const section = ref('table')
</script>

<template>
  <div v-if="campaign.daypartSummary" class="vui-grid vui-grid--align-spread vui-theme--default vui-m-bottom--xx-large vui-p-around--large">
    <div class="vui-align-top vui-size--1-of-6 vui-text-align--center vui-m-right--large">
      <VideaCampaignPerformanceDetailsDaypartSummaryTotals :campaign="campaign" />
    </div>
    <div class="vui-align-top vui-size--4-of-6">
      <VideaCampaignPerformanceDetailsDaypartSummaryGrid v-if="section === &quot;table&quot;" :campaign="campaign" />
      <VideaCampaignPerformanceDetailsDaypartSummaryChart v-if="section === &quot;chart&quot;" :campaign="campaign" />
      <VideaCampaignPerformanceDetailsDaypartSummaryLegend class="vui-text-align--center" :campaign="campaign" />
    </div>
    <div class="vui-align-top vui-size--1-of-6">
      <div class="view-selector vui-text-align--right">
        <label class="vui-form-element__label">View:</label>
        <button class="vui-button--neutral" @click="section = &quot;table&quot;">
          <VuiIcon class="vui-m-right--x-small" name="table" />
        </button>
        <button class="vui-button--neutral" @click="section = &quot;chart&quot;">
          <VuiIcon class="vui-m-right--x-small" name="bar-chart" />
        </button>
      </div>
    </div>
  </div>
</template>
