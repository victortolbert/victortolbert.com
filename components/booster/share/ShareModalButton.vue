<script>
import BoosterRoundedButton from '~/components/booster/RoundedButton.vue'
import BoosterShareModal from '~/components/booster/share/ShareModal.vue'

export default {
  components: {
    BoosterRoundedButton,
  },
  props: {
    program: {
      type: Object,
      default: () => {},
    },
    text: {
      type: String,
      default: null,
    },
    gaData: {
      type: Object,
      default: null,
    },
  },
  emits: ['close'],
  computed: {
    lang() {
      return this.$store.state.lang
    },
    shareText() {
      if (this.text)
        return this.text

      return this.lang.share_button
    },
  },
  methods: {
    blur() {
      document.getElementById('app').style.filter = 'blur(4px)'
    },
    unBlur() {
      document.getElementById('app').style.filter = 'none'
    },
    openShareModal() {
      this.$modal.open({
        parent: this,
        component: BoosterShareModal,
        hasModalCard: true,
        canCancel: ['escape', 'outside'],
        onCancel: () => {
          this.$emit('close')
          this.unBlur()
        },
        props: {
          program: this.program,
        },
      })
      this.blur()
    },
  },
}
</script>

<template>
  <BoosterRoundedButton
    :text="shareText"
    :ga-data="gaData"
    class="is-secondary"
    @clicked="openShareModal()"
  />
</template>
