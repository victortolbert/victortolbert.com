<script>
import BoosterActivityRewardBadge from './ActivityRewardBadge.vue'
import BoosterActivityRewardIcon from './ActivityRewardIcon.vue'

export default {
  components: {
    BoosterActivityRewardBadge,
    BoosterActivityRewardIcon,
  },
  props: {
    activity: {
      type: Object,
      default: () => {},
    },
    hasBadge: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['selected'],
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    actionHeader() {
      return this.parseLanguage(
        this.lang.activity_reward_action_header[this.activity.category],
        {
          needed: this.activity.amount_needed,
        },
      )
    },
  },
  methods: {
    select(selected) {
      this.selected = selected
      this.$emit('selected', selected)
    },
  },
}
</script>

<template>
  <button
    class="focus:shadow-outline relative m-2 h-30 w-24 flex flex-col items-center justify-between border-2 rounded px-2 py-3 text-xs font-normal shadow hover:bg-gray-50 focus:outline-none"
    type="button"
    @click="select(activity)"
  >
    <span
      class="mx-auto mb-2 h-12 w-12 flex items-center justify-center rounded-full text-white" :class="[
        `bg-${activity.category}`,
      ]"
    >
      <BoosterActivityRewardIcon :category="activity.category" />

    </span>
    <span> {{ actionHeader }} </span>

    <BoosterActivityRewardBadge
      v-if="hasBadge"
      :data-testid="`award-ribbon ${activity.name}`"
      class="pin-t pin-l absolute left-0 top-0 -ml-4 -mt-2"
    />
  </button>
</template>
