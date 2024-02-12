<script setup>
defineProps({
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
})

defineEmits(['close'])

onMounted(() => {
  setTimeout(() => {
    closeModal()
  }, props.duration)
})

function closeModal() {
  emit('close')
  unBlur()
}

function blur() {
  document.getElementById('app').style.filter = 'blur(4px)'
}

function unBlur() {
  document.getElementById('app').style.filter = 'none'
}
</script>

<template>
  <div class="m-4 rounded-xl overflow-hidden">
    <div class="card bg-blue w-full p-4">
      <div class="card-content md:w-80 py-16 text-white text-center">
        <UIcon
          v-if="icon"
          :name="icon"
          class="w-8 h-8"
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
