<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    gaData: {
      type: Object,
      default: null,
    },
  },
  emits: ['clicked'],
  methods: {
    clicked() {
      this.gaTrack()
      this.$emit('clicked')
      this.navigateToLink()
    },
    gaTrack() {
      if (!this.gaData)
        return
      this.gaEvent(
        this.gaData.category,
        this.gaData.label,
        this.gaData.action,
      )
    },
    navigateToLink() {
      if (this.link)
        window.location.href = this.link
    },
  },
}
</script>

<template>
  <a
    class="button is-medium is-rounded is-fullwidth mx-auto max-w-xs text-24 font-semibold shadow"
    @click="clicked"
  >
    {{ text }}
  </a>
</template>
