<script setup>
import { useStore } from 'vuex'

const store = useStore()

const orderManagementMenuItems = ref([
  {
    name: 'Pending Orders',
    route: '/videa/sellers/order-management/pending-orders',
  },
  {
    name: 'Pending Makegoods',
    route: '/videa/sellers/order-management/pending-makegoods',
  },
  {
    name: 'Open Pre-Empts',
    route: '/videa/sellers/order-management/open-preempts',
  },
  {
    name: 'Order Search',
    route: '/videa/sellers/order-management/order-search',
  },
])

const reportingMenuItems = ref([
  {
    name: 'Account Performance',
    route: '/videa/sellers/reporting/account-performance',
    repAccess: true,
  },
  {
    name: 'Program Revenue',
    route: '/videa/sellers/reporting/program-revenue',
    repAccess: false,
  },
  {
    name: 'Order Reporting',
    route: '/videa/sellers/reporting/order-reporting',
    repAccess: true,
  },
])

const displayedOrderManagementMenuItems = computed(() => {
  return orderManagementMenuItems.value
})

const displayedReportingMenuItems = computed(() => {
  if (store.state.user.name === 'Rep User') {
    return reportingMenuItems.value.filter((item) => {
      return item.repAccess
    })
  }
  return reportingMenuItems.value
})
</script>

<template>
  <div class="vui-container vui-grid vui-grid--align-spread vui-grid--vertical-align-center">
    <ul class="vui-grid vui-grow">
      <li>
        <VuiDropdown
          :items="orderManagementMenuItems"
          text="Order Management"
        />
      </li>
      <li>
        <VuiDropdown
          :items="displayedReportingMenuItems"
          text="Reporting"
        />
      </li>
      <li>
        <NuxtLink to="/videa/sellers/price-guide">
          Price Guide
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/videa/sellers/avails">
          Avails
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/videa/sellers/campaign-performance">
          Campaign Performance
        </NuxtLink>
      </li>
    </ul>
    <ul class="vui-align-middle">
      <li>
        <NuxtLink
          class="vui-button vui-button--brand"
          to="/videa/settings/user"
          style="color: white !important; white-space: nowrap"
          tag="button"
        >
          <VuiIcon class="vui-m-right--x-small" name="cog" />
          <span>Settings</span>
          <span class="vui-assistive-text">Settings</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
