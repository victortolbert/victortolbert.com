<script>
import BoosterShareButtonAction from './ShareButtonAction.vue'
import BoosterShareButtonMobile from './ShareButtonMobile.vue'
import BoosterAccordionModal from '~/components/booster/AccordionModal.vue'

export default {
  components: {
    BoosterAccordionModal,
    BoosterShareButtonAction,
    BoosterShareButtonMobile,
  },
  props: {
    program: {
      type: Object,
      default: () => {},
    },
  },
  emits: ['close'],
  computed: {
    lang() {
      return this.$store.state.lang
    },
    items() {
      return [
        this.$store.getters.getButtonConfig('email'),
        this.$store.getters.getButtonConfig('facebook'),
        this.$store.getters.getButtonConfig('sms'),
        this.$store.getters.getButtonConfig('link'),
      ]
    },
    itemsCount() {
      return this.items.length
    },
  },
  methods: {
    closeModal(type = null) {
      if (type !== 'link') {
        this.$emit('close')
        this.unBlur()
      }
    },
    blur() {
      document.getElementById('app').style.filter = 'blur(4px)'
    },
    unBlur() {
      document.getElementById('app').style.filter = 'none'
    },
  },
}
</script>

<template>
  <BoosterAccordionModal
    :header="lang.share_modal_title"
    :subheader="lang.share_modal_subheader"
    width-size="small"
    class="text-grey-darkest mx-4"
  >
    <template #default>
      <BoosterShareButtonAction
        v-for="(item, index) in items"
        :key="index"
        :type="item.type"
        :program="program"
        ga-site-location="Student Card Header Section"
        ga-page-location="Parent Dashboard"
      >
        <button
          class="text-grey-darkest mb-px w-full flex cursor-pointer px-4 py-4 shadow-none md:px-4 sm:py-4 focus:outline-none" :class="[
            index < (itemsCount - 1) ? 'border-b' : '',
            item.type === 'sms' ? 'md:hidden' : '',
          ]"
          @click="closeModal(item.type)"
        >
          <BoosterShareButtonMobile
            :type="item.type"
            :icon="item.icon"
            :label="item.label"
            :class-name="item.className"
            :display-on-desktop="true"
            class="ml-2 cursor-pointer items-center justify-center"
          />
          <p
            class="ml-4 mt-2 flex-1 text-left text-2xl"
          >
            <span class="font-medium">{{ $store.getters.getButtonConfig(item.type).text }}</span>
          </p>
          <span class="mr-2 mt-2 flex cursor-pointer items-center justify-center font-medium">
            <UIcon name="i-carbon-chevron-right" />
          </span>
        </button>
      </BoosterShareButtonAction>
    </template>
  </BoosterAccordionModal>
</template>
