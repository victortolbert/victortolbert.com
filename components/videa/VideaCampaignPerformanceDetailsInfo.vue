<script setup>
defineProps({
  campaign: {
    type: Object,
  },
})
</script>

<template>
  <div v-show="campaign" class="vui-box vui-grid vui-m-bottom--large vui-wrap vui-theme--default">
    <div class="vui-container--fluid vui-grid vui-grid--align-spread vui-p-around--small">
      <div class="vui-align-middle">
        <h3 class="vui-text-heading--medium vui-m-bottom--small">
          Campaign Detail
        </h3>
      </div>
      <div class="vui-align-middle">
        <span>Spots Last Updated: &nbsp;</span><span>{{ campaign.orderLastUpdated }}</span>
      </div>
    </div>
    <div class="vui-grid--align-spread vui-grid">
      <div class="vui-col--padded vui-form-element">
        <label class="vui-form-element__label" for="">Station Order #</label>
        <div class="vui-form-element__control">
          <span class="vui-form-element__static">{{ campaign.stationOrderNumber }}</span>
        </div>
      </div>
      <div class="vui-col--padded vui-form-element">
        <label class="vui-form-element__label" for="">Videa Order #</label>
        <div class="vui-form-element__control">
          <span class="vui-form-element__static">{{ campaign.videaOrderNumber }}</span>
        </div>
      </div>
      <div class="vui-col--padded vui-form-element">
        <label class="vui-form-element__label" for="">Agency</label>
        <div class="vui-form-element__control">
          <span class="vui-form-element__static">{{ campaign.agency }}</span>
        </div>
      </div>
      <div class="vui-col--padded vui-form-element">
        <label class="vui-form-element__label" for="">Flight Start</label>
        <div class="vui-form-element__control">
          <span class="vui-form-element__static">{{ campaign.flightStartDate }}</span>
        </div>
      </div>
      <div class="vui-col--padded vui-form-element">
        <label class="vui-form-element__label" for="">Flight End</label>
        <div class="vui-form-element__control">
          <span class="vui-form-element__static"> {{ campaign.flightEndDate }}</span>
        </div>
      </div>
      <div class="vui-col--padded vui-form-element">
        <label class="vui-form-element__label" for="">Revenue</label>
        <div class="vui-form-element__control">
          <span class="vui-form-element__static">
            <!-- {{ campaign.revenue | numberWithCommas | formatMoney }} -->
            {{ campaign.revenue }}
          </span>
        </div>
      </div>
      <div class="vui-col--padded vui-form-element">
        <label class="vui-form-element__label" for="">Total Purchased</label>
        <div class="vui-form-element__control">
          <span class="vui-form-element__static">{{ campaign.daypartSummary.total.purchasedGrpsImps }}</span>
        </div>
      </div>
      <div class="vui-col--padded vui-form-element">
        <label class="vui-form-element__label" for="">Demo</label>
        <div class="vui-form-element__control">
          <span class="vui-form-element__static">{{ campaign.demoName }}</span>
        </div>
      </div>
      <div class="vui-col--padded vui-form-element">
        <label class="vui-form-element__label" for="">Weeks Remaining</label>
        <div class="vui-form-element__control">
          <span class="vui-form-element__static">{{ campaign.weeksRemaining }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
