<script>
import BoosterRoundedButton from '~/components/booster/RoundedButton.vue'

export default {
  components: {
    BoosterRoundedButton,
  },
  props: {
    participants: {
      type: Array,
      default: () => [],
    },
    gaData: {
      type: Object,
      default: null,
    },
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    frCode() {
      return this.participants.find(participant => participant.deleted !== 1).fr_code
    },
  },
}
</script>

<template>
  <BoosterRoundedButton
    :link="`/v3/tkdashboard/?redirect=auth/login/${frCode}/view-participant/pledge`"
    :text="lang.enter_pledge"
    :ga-data="gaData"
    class="is-primary"
  />
</template>
