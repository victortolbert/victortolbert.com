<script setup>
defineProps({
  campaign: {
    type: Object,
  },
})
</script>

<template>
  <div class="vui-text-align--center">
    <div class="vui-box--border vui-text-align--center vui-show--inline-block vui-size--2-of-3 vui-form-element__helper">
      <div class="campaign-performance-legend">
        <span class="vui-m-right--medium">LPM</span><span class="vui-m-right--medium">
          <VuiIcon class="vui-m-right--x-small" name="stop" style="color: #3B7F36" />≥ 95%</span><span class="vui-m-right--medium">
          <VuiIcon class="vui-m-right--x-small" name="stop" style="color: #F58220" />80%-94%</span><span class="vui-m-right--medium">
          <VuiIcon class="vui-m-right--x-small" name="stop" style="color: #C5103D" />≤ 79%</span>
      </div>
    </div>
  </div>
</template>
