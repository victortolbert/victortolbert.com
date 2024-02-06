<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success',
    },
    duration: {
      type: Number,
      default: 1000,
    },
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    reload: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  computed: {
    cardClasses() {
      return {
        'bg-blue': this.type === 'success',
        'bg-red': this.type === 'error',
      }
    },
  },
  mounted() {
    this.blur()
    if (this.duration > 0) {
      setTimeout(() => {
        this.close()
      }, this.duration)
    }
  },
  methods: {
    blur() {
      document.getElementById('app').style.filter = 'blur(4px)'
    },
    unBlur() {
      document.getElementById('app').style.filter = 'none'
    },
    close() {
      if (this.reload) {
        // Refresh the page so the updates will take effect throughout the frontend
        location.reload()
      }
      this.$emit('close')
      this.unBlur()
    },
  },
}
</script>

<template>
  <div class="m-4 overflow-hidden rounded-xl">
    <div
      :class="cardClasses"
      class="card"
    >
      <header
        v-if="duration === 0"
        class="card-header border-b-0 bg-blue pr-4 pt-4 text-white shadow-none -mb-16"
      >
        <p class="modal-card-title flex items-center justify-between text-center text-white">
          <span style="width: 24px; height: 48px;" />
          <a
            href="#"
            class="self-start text-white hover:text-white"
            style="width: 24px; height: 48px;"
            @click.prevent="close"
          >
            <span class="icon">
              <UIcon
                name="i-carbon-close"
                size="xs"
              />
            </span>
          </a>
        </p>
      </header>
      <div
        class="card-content py-16 text-center text-white sm:px-32"
      >
        <UIcon
          name="i-carbon-checkmark"
          size="3x"
        />
        <p
          v-if="title"
          class="text-xl font-bold capitalize"
          v-text="title"
        />
        <p
          v-if="subtitle"
          class="max-w-2xs mx-auto text-base sm:max-w-xs md:-mx-4"
          v-text="subtitle"
        />
      </div>
    </div>
  </div>
</template>
