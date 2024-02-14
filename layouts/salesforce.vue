<script setup lang="ts">
const online = useOnline()
// const date = useAppConfig().buildDate
// const client = useSupabaseClient()
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: '/assets/styles/salesforce-lightning-design-system.css',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen flex flex-col font-salesforce slds-scope bg-primary-100">
    <SldsTrialBar v-if="false" />
    <SldsGlobalHeader />

    <div class="slds-brand-band slds-brand-band_large" />

    <main class="flex-1 slds-p-horizontal_small slds-m-top_xx-large">
      <slot />
    </main>

    <SalesforceFooter />
    <!-- <SalesforceCommandPalette /> -->
  </div>
</template>

<style>
.slds-brand-band {
  background-color: rgba(176, 196, 223, 1);
  z-index: 0;
}

.slds-brand-band:before {
  background-image: url(/assets/images/themes/oneSalesforce/banner-brand-default.png),
    linear-gradient(to top, rgba(255, 255, 255, 0) 0, rgba(160, 180, 206, 1));
}

.slds-brand-band:after {
  background-image: linear-gradient(
    to bottom,
    rgba(176, 196, 223, 0) 60%,
    rgba(176, 196, 223, 1)
  );
}

.dark .slds-card {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
