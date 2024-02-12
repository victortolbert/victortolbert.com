<script setup>
defineProps({
  campaign: {
    type: Object,
  },
})
</script>

<template>
  <div class="daypart-summary-grid">
    <h3 class="vui-text-heading--medium vui-m-bottom--small vui-text-align--center">
      Daypart Summary
    </h3>
    <div class="vui-scrollable--x vui-m-bottom--large">
      <table class="vui-table">
        <thead>
          <tr>
            <th>Dayparts</th>
            <th>Purchased To Date</th>
            <th>Delivered To Date <sup>1</sup></th>
            <th>%</th>
            <th>+/-</th>
          </tr>
        </thead>
        <tbody v-if="campaign.daypartSummary.items">
          <tr v-for="item in campaign.daypartSummary.items" :key="item.daypart">
            <td class="vui-truncate" :title="item.daypart">
              {{ item.daypart }}
            </td>
            <td class="vui-truncate" :title="item.purchasedToDate">
              {{ item.purchasedToDate }}
            </td>
            <td class="vui-truncate" :title="item.deliveredToDate">
              {{ item.deliveredToDate }}
            </td>
            <td>
              <VideaCampaignPerformanceDeliveryIndicator :value="item.percentage" />
            </td>
            <td class="vui-truncate" :title="item.difference">
              {{ item.difference }}
            </td>
          </tr>
        </tbody>
        <tfoot v-if="campaign.daypartSummary.items">
          <tr>
            <td>Total</td>
            <td class="vui-truncate" :title="campaign.daypartSummary.total.orderedToDate">
              {{ campaign.daypartSummary.total.orderedToDate }}
            </td>
            <td class="vui-truncate" :title="campaign.daypartSummary.total.deliveredToDate">
              {{ campaign.daypartSummary.total.deliveredToDate }}
            </td>
            <td>
              <VideaCampaignPerformanceDeliveryIndicator :value="campaign.daypartSummary.total.percentageRatio" />
            </td>
            <td class="vui-truncate" :title="campaign.daypartSummary.total.difference" style="color: rgb(197, 32, 62)">
              {{ campaign.daypartSummary.total.difference }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
