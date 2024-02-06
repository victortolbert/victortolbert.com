<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    shouldReslick: {
      type: Boolean,
      default: false,
    },
    shouldEmitViewed: {
      type: Boolean,
      default: false,
    },
    titleFontWeight: {
      type: String,
      default: 'font-semibold',
    },
  },
  emits: ['viewed'],
  data() {
    return {
      open: false,
    }
  },
  created() {
    this.open = this.isOpen
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    collapseClick() {
      this.toggle()
      if (this.shouldReslick) {
        this.$nextTick(
          () => {
            if (navigator.userAgent.includes('MSIE') || navigator.appVersion.indexOf('Trident/') > 0) {
              const evt = document.createEvent('UIEvents')
              evt.initUIEvent('reslicked', true, false, window, 0)
              window.dispatchEvent(evt)
            }
            else {
              window.dispatchEvent(new Event('reslicked'))
            }
          },
        )
      }
      if (this.shouldEmitViewed)
        this.$emit('viewed', true)
    },
  },
}
</script>

<template>
  <div>
    <OCollapse
      :open="isOpen"
      class="card border-t-2 border-gray-300 shadow-none"
    >
      <template #trigger>
        <button
          class="mb-px w-full flex cursor-pointer items-baseline justify-between px-4 py-4 shadow-none md:px-4 sm:py-4 focus:outline-none"
          @click="collapseClick"
        >
          <slot name="title">
            <p
              :class="titleFontWeight"
              class="text-xl sm:text-2xl"
            >
              <span class="pl-1">{{ title }}</span>
            </p>
          </slot>

          <slot name="toggle">
            <span class="flex cursor-pointer items-center justify-center text-gray-400">
              <UIcon :name="open ? 'i-carbon-chevron-up' : 'i-carbon-chevron-down'" />
            </span>
          </slot>
        </button>
      </template>

      <slot>
        <div class="p-2">
          <div class="modal-card-body bg-white p-4 text-sm md:p-6 md:text-lg sm:text-base">
            <p class="mb-4">
              {{ content }}
            </p>
          </div>
        </div>
      </slot>
    </OCollapse>
  </div>
</template>
