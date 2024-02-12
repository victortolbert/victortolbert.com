<script setup>
const props = defineProps({
  campaign: {
    type: Object,
  },
  order: {
    type: Object,
  },
})

const total = computed(() => {
  return props.campaign.daypartSummary.total
})
</script>

<template>
  <div class="daypart-summary-totals vui-text-align--center">
    <h3 class="vui-text-heading--medium vui-m-bottom--small">
      Total
    </h3>
    <div class="vui-m-bottom--x-small">
      <div class="vui-theme--default vui-box vui-m-bottom--x-small">
        <label class="vui-form-element__label">Purchased GRPs/IMPs</label><br><b class="vui-form-element__helper">{{ total.purchasedGrpsImps }}</b>
      </div>
    </div>
    <div class="vui-m-bottom--x-small">
      <div class="vui-theme--default vui-box vui-m-bottom--x-small">
        <label class="vui-form-element__label">Purchased To Date</label><br><b class="vui-form-element__helper">{{ total.purchasedToDate }}</b>
      </div>
    </div>
    <div class="vui-m-bottom--x-small">
      <div class="vui-theme--default vui-box vui-m-bottom--x-small">
        <label class="vui-form-element__label">Delivered To Date <sup>1</sup></label><br><b class="vui-form-element__helper vui-m-right--small">{{ total.deliveredToDate }}</b>
      </div>
    </div>
    <div class="vui-m-bottom--x-small">
      <div class="vui-theme--default vui-box vui-m-bottom--x-small">
        <label class="vui-form-element__label">%</label><br><b class="vui-form-element__helper vui-m-right--small">{{ total.percentage }}</b>
      </div>
    </div>
    <div class="vui-m-bottom--x-small">
      <div class="vui-theme--default vui-box vui-m-bottom--x-small">
        <label class="vui-form-element__label">+/-</label><br><b class="vui-form-element__helper vui-m-right--small" style="color: rgb(197, 32, 62)">{{ total.difference }}</b>
      </div>
    </div>
  </div>
</template>
