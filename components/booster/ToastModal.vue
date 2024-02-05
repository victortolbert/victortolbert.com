<script>
import BoosterSendEnvelope from '~/components/booster/SendEnvelope'

export default {
  components: {
    BoosterSendEnvelope,
  },
  props: {
    duration: {
      type: Number,
      default: 3000,
    },
    successMessage: {
      type: String,
      default: '',
    },
    icon: {
      type: Array,
      default: null,
    },
  },
  emits: ['close'],
  mounted() {
    setTimeout(() => {
      this.closeModal()
    }, this.duration)
  },
  methods: {
    closeModal() {
      this.$emit('close')
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
  <div class="m-4 rounded-xl overflow-hidden">
    <div class="card bg-blue w-full p-4">
      <div class="card-content md:w-80 py-16 text-white text-center">
        <FontAwesomeIcon
          v-if="icon"
          :icon="icon"
          size="3x"
        />
        <BoosterSendEnvelope
          v-else
        />
        <p
          v-if="successMessage"
          class="font-bold text-xl"
        >
          {{ successMessage }}
        </p>
      </div>
    </div>
  </div>
</template>
