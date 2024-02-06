<script>
export default {
  computed: {
    lang() {
      return this.$store.state.lang
    },
  },
}
</script>

<template>
  <div class="banner_dashboard mx-auto">
    <a
      href="/v3/tkdashboard/?redirect=home/dashboard?dashboardBetaOptOut=true"
      class="bg-grey"
    >
      <span class="bg-grey message leading-tight text-white md:leading-normal md:underline">
        {{ lang.beta_banner_return }}
      </span>
    </a>
  </div>
</template>
