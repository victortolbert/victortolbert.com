<script>
import BoosterShareButtonAction from './ShareButtonAction.vue'
import BoosterShareButtonDesktop from './ShareButtonDesktop.vue'
import BoosterShareButtonMobile from './ShareButtonMobile.vue'

export default {
  components: {
    BoosterShareButtonAction,
    BoosterShareButtonDesktop,
    BoosterShareButtonMobile,
  },
  props: {
    type: {
      type: String,
      default: 'facebook',
    },
    program: {
      type: Object,
      default: undefined,
    },
    gaPageLocation: {
      type: String,
      default: 'Student Card Header Section',
    },
    gaSiteLocation: {
      type: String,
      default: 'Parent Dashboard',
    },
  },
  computed: {
    config() {
      return this.$store.getters.getButtonConfig(this.type)
    },
    lang() {
      return this.$store.state.lang
    },
    text() {
      return this.lang.sms_button
    },
  },
}
</script>

<template>
  <div class="share-button flex flex-col">
    <!-- Mobile Button -->
    <BoosterShareButtonAction
      :program="program"
      :ga-site-location="gaSiteLocation"
      :ga-page-location="gaPageLocation"
      :type="type"
    >
      <BoosterShareButtonMobile
        :type="type"
        :icon="config.icon"
        :label="config.text"
        :class-name="config.className"
        class="cursor-pointer items-center justify-center"
      />
    </BoosterShareButtonAction>

    <!-- Desktop Button -->
    <BoosterShareButtonAction
      :program="program"
      :ga-site-location="gaSiteLocation"
      :ga-page-location="gaPageLocation"
      :type="type"
    >
      <BoosterShareButtonDesktop
        :icon="config.icon"
        :label="config.text"
        :class-name="config.className"
      />
    </BoosterShareButtonAction>
  </div>
</template>
