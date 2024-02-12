<script setup>
import axios from 'axios'

const campaigns = ref([])
const gridColumns = ref([])

function fetchCampaigns() {
  axios.get('https:/api.victortolbert.com/campaigns')
    .then((response) => {
      campaigns.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

fetchCampaigns()
</script>

<template>
  <div class="campaign-performance-view">
    <VuiTitle>Campaign Performance</VuiTitle>

    <VuiPanel>
      <div class="vui-scrollabl vui-p-bottom--x-small">
        <VideaCampaignPerformanceFilter />
      </div>
    </VuiPanel>

    <VideaCampaignPerformanceGridControls />

    <div class="vui-scrollable--x vui-m-bottom--small">
      <VideaCampaignPerformanceGrid campaigns="campaigns" />
    </div>

    <VuiFootnote />
  </div>
</template>
