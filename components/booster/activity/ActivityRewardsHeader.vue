<script>
export default {
  props: {
    earned: {
      type: Number,
      default: null,
    },
    total: {
      type: Number,
      default: null,
    },
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    headerText() {
      if (this.earned >= this.total)
        return this.lang.completed_activity_rewards_header

      return this.parseLanguage(
        this.lang.activity_rewards_header,
        {
          earned: this.earned,
          total: this.total,
        },
      )
    },
  },
}
</script>

<template>
  <header>
    <h2 class="text-center text-xl font-bold">
      {{ headerText }}
    </h2>
  </header>
</template>
