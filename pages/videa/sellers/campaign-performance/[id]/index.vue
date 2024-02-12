<script setup>
const route = useRoute()
const id = ref(route.params.id)
const campaign = ref({})

fetchCampaign(route.params.id)

function fetchCampaign(id) {
  axios.get(`https:/api.victortolbert.com/campaigns/${id}`)
    .then((res) => {
      campaign.value = res.data
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<template>
  <div class="campaign-performance-details-view">
    <VuiTitle class="vui-grid vui-grid--align-spread" style="margin-bottom: 0">
      <span>Campaign Performance Details</span>
    </VuiTitle>
    <div class="vui-grid vui-grid--align-spread vui-m-bottom--large">
      <NuxtLink to="/videa/sellers/campaign-performance">
        <VuiIcon class="vui-align-middle vui-m-right--xx-small" name="arrow-circle-left" /><span class="vui-align-middle">Back to Campaign Performance</span>
      </NuxtLink>
    </div>
    <VuiSubtitle>
      {{ campaign.advertiser }} {{ campaign.product }} {{ campaign.estimateNumber }}
    </VuiSubtitle>

    <VideaCampaignPerformanceDetailsInfo :campaign="campaign" />
    <VideaCampaignPerformanceDetailsDaypartSummary :campaign="campaign" />

    <VuiPanel>
      <VideaCampaignPerformanceDetailsFilter />
    </VuiPanel>

    <VuiSubtitle>Spot Detail</VuiSubtitle>
    <VuiDaypartSelector />

    <form class="vui-form--inline vui-m-bottom--small">
      <div class="vui-form-element">
        <label class="vui-form-element__label" for="select-01">Select Skewbook</label>
        <div class="vui-form-element__control">
          <div class="vui-select_container">
            <select id="select-01" class="vui-select" disabled="disabled">
              <option>--</option>
              <option>NOV14</option>
              <option>FEB15</option>
              <option>MAY15</option>
              <option>JUL15</option>
              <option>NOV15</option>
              <option>JAN16</option>
              <option>FEB16</option>
              <option>MAR16</option>
              <option>APR16</option>
              <option>DEC16</option>
              <option>JAN17</option>
              <option>FEB17</option>
            </select>
          </div>
        </div>
      </div>
    </form>

    <VideaCampaignPerformanceDetailsSpotDetailsGridControls />
    <VideaCampaignPerformanceDetailsSpotDetailsGrid />
    <VideaCampaignPerformanceDetailsSpotDetailsGridFooter />
  </div>
</template>
