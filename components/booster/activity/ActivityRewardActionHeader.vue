<script>
import BoosterActivityRewardIcon from './ActivityRewardIcon.vue'

export default {
  components: {
    BoosterActivityRewardIcon,
  },
  props: {
    activity: {
      type: Object,
      default: () => {},
    },
    headerText: {
      type: String,
      default: null,
    },
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    actionText() {
      return this.parseLanguage(
        this.lang.activity_reward_text_unearned[this.activity.category],
        {
          prize: this.activity.display_name,
          needed: this.activity.amount_needed,
        },
      )
    },
  },
}
</script>

<template>
  <header class="mb-4 flex items-center font-bold">
    <h4
      class="mr-2 h-12 w-12 flex items-center justify-center rounded-full text-white" :class="[
        `bg-${activity.category}`,
      ]"
    >
      <BoosterActivityRewardIcon :category="activity.category" />
    </h4>

    <span>{{ headerText }}</span>
  </header>
</template>
