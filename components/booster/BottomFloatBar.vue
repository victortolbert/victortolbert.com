<script>
import { mapState } from 'vuex'
import BoosterShareModalButton from '~/components/booster/share/ShareModalButton.vue'
import BoosterPledgeButton from '~/components/booster/pledge/PledgeButton.vue'

export default {
  components: {
    BoosterShareModalButton,
    BoosterPledgeButton,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      gaData: {
        pledgeButton: {
          category: 'bottom float bar',
          label: 'pledge button',
          action: 'click',
        },
        shareButton: {
          category: 'bottom float bar',
          label: 'share button',
          action: 'click',
        },
      },
    }
  },
  computed: {
    ...mapState(['lang']),
    show() {
      return !this.$store.state.shareButtonsOnScreen
    },
  },
}
</script>

<template>
  <div
    :class="{ 'show-bar': show }"
    class="hide-bar lg:hidden"
  >
    <div class="bottom-float-bar">
      <BoosterShareModalButton
        :program="program"
        :text="lang.share"
        :ga-data="gaData.shareButton"
        class="mr-3"
      />
      <BoosterPledgeButton
        :participants="program.participants"
        :ga-data="gaData.pledgeButton"
      />
    </div>
  </div>
</template>

<style scoped>
.bottom-float-bar {
  position: fixed;
  bottom: 0px;
  transition: all 0.2s ease-in 0s;
  z-index: 99;
  cursor: pointer;
  background-color: #fff;
  border-top: 1px solid black;
  padding: 2.2em 2em;
  width: 100%;
  display: flex;
}
.hide-bar {
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.5s ease-in-out;
}
.hide-bar.show-bar {
  visibility: visible;
  opacity: 1;
}
</style>
