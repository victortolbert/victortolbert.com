<script>
export default {
  props: {
    header: {
      type: String,
      default: '',
    },
    subheader: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    footer: {
      type: String,
      default: '',
    },
    widthSize: {
      type: String,
      default: '',
    },
  },
  emits: ['close'],
  computed: {
    widthSizeClass() {
      if (this.widthSize === 'small')
        return 'max-w-sm'

      return ''
    },
  },
  methods: {
    closeModal() {
      this.$emit('close')
      this.$parent.$emit('close')
      this.unBlur()
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
  <div class="mx-auto max-h-screen overflow-y-auto shadow-lg" :class="[widthSizeClass]">
    <div class="modal-card mx-auto rounded-xl bg-white shadow-lg" :class="[widthSizeClass]">
      <header class="modal-card-head relative items-start bg-white">
        <slot name="header">
          <div class="font-weight-normal items-center justify-between text-xl">
            <span style="width: 24px; height: 48px" />
            <h2 class="mt-6 text-center text-2xl font-bold capitalize">
              {{ header }}
            </h2>
            <h4
              v-if="subheader.length > 0"
              class="text-center text-lg"
              v-html="subheader"
            />
            <a
              href="#"
              class="absolute self-start text-black"
              style="top: 1rem; right: 1rem"
              @click.prevent="closeModal"
            >
              <span class="icon">
                <UIcon
                  name="i-carbon-close"
                />
              </span>
            </a>
          </div>
        </slot>
      </header>
      <section class="modal-card-body overflow-auto p-0">
        <slot>
          <div class="modal-card-body bg-white p-4 text-sm md:p-6 md:text-lg sm:text-base">
            <p class="mb-4">
              {{ content }}
            </p>
          </div>
        </slot>
      </section>
      <div class="card-footer">
        <div class="card-footer-item flex-col">
          <slot name="footer">
            {{ footer }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
