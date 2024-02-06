<script>
export default {
  props: {
    type: {
      type: String,
      default: 'facebook',
    },
    icon: {
      type: [String, Array],
      default: () => 'i-carbon-logo-facebook',
    },
    className: {
      type: String,
      default: 'has-background-facebook',
    },
    // Security risk: The label value is used in v-html so make sure the value isn't provided by the user.
    label: {
      type: String,
      default: 'Share on <br class="md:hidden"> Facebook',
    },
  },
}
</script>

<template>
  <div>
    <button
      class="focus:shadow-outline hidden w-full cursor-pointer justify-center rounded-full px-2 py-2 text-xl font-semibold text-white shadow lg:flex hover:text-white focus:outline-none" :class="[className]"
    >
      <UIcon
        :name="icon"
        class="mr-2 text-2xl"
      />
      <span v-html="label" />
    </button>
  </div>
</template>

<style scoped>

</style>
