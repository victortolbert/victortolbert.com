<script>
export default {
  props: {
    type: {
      type: String,
      default: 'facebook',
    },
    displayOnDesktop: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: [String, Array],
      default: () => 'i-carbon-logo-facebook',
    },
    className: {
      type: String,
      default: 'has-background-facebook',
    },
    label: {
      type: String,
      default: 'Share on <br class="md:hidden"> Facebook',
    },
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    isSMSType() {
      return this.type === 'sms'
    },
  },
}
</script>

<template>
  <div>
    <!-- SMS Button -->
    <button
      v-if="!isSMSType"
      class="mx-auto h-12 w-12 flex cursor-pointer items-center justify-center rounded-full text-white shadow hover:text-white" :class="[className, displayOnDesktop ? '' : 'lg:hidden']"
    >
      <UIcon
        :name="icon"
        class="text-2xl"
      />
      <span
        v-if="!displayOnDesktop"
        class="hidden text-black lg:inline"
        v-html="label"
      />
    </button>

    <!-- Non-SMS Button -->
    <a
      v-if="isSMSType"
      class="is-rounded has-background-text-message mx-auto h-12 w-12 flex cursor-pointer items-center justify-center rounded-full text-white shadow hover:text-white" :class="[displayOnDesktop ? '' : 'lg:hidden']"
    >
      <UIcon
        name="i-carbon-chat"
        class="text-2xl-"
      />
    </a>
    <span
      v-if="!displayOnDesktop"
      class="text-sm text-black lg:hidden"
      v-html="label"
    />
  </div>
</template>
