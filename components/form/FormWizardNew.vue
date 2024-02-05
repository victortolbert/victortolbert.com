<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import { postFormToDB } from '~/api'

const wizardStep = ref()

const currentStepNumber = ref(1)
const asyncState = ref()

const steps = ref([
  'FormPlanPicker',
  'FormUserDetails',
  'FormAddress',
  'FormReviewOrder',
])

const form = reactive({
  plan: null,
  email: null,
  name: null,
  password: null,
  address: null,
  recipient: null,
  chocolate: false,
  otherTreat: false,
})

const length = computed(() => {
  return steps.value.length
})

const isLastStep = computed(() => {
  return currentStepNumber.value === length.value
})

const wizardInProgress = computed(() => {
  return currentStepNumber.value <= length.value
})

const currentStep = computed(() => {
  return steps.value[currentStepNumber.value - 1]
})

const progress = computed(() => {
  return currentStepNumber.value / length.value * 100
})

function updateAsyncState(state: any) {
  asyncState.value = state
}

function submitOrder() {
  asyncState.value = 'pending'

  postFormToDB(form).then(() => {
    console.log('form submitted', form)

    asyncState.value = 'success'
    currentStepNumber.value++
  })
}

function nextButtonAction() {
  wizardStep.value.submit()
    .then((stepData: any) => {
      Object.assign(form, stepData)

      if (isLastStep.value)
        submitOrder()
      else
        goNext()
    })
    .catch((error: any) => console.log(error))
}

function goBack() {
  currentStepNumber.value--
}

function goNext() {
  currentStepNumber.value++
}
</script>

<template>
  <div>
    <div v-if="wizardInProgress" v-show="asyncState !== 'pending'">
      <keep-alive>
        <component
          :is="currentStep"
          ref="wizardStep"
          :wizard-data="form"
          @update-async-state="updateAsyncState"
        />
      </keep-alive>

      <div class="progress-bar">
        <div :style="`width: ${progress}%;`" />
      </div>

      <!-- Actions -->
      <div class="buttons">
        <button
          v-if="currentStepNumber > 1"
          class="btn-outlined"
          @click="goBack"
        >
          Back
        </button>

        <button
          class="btn"
          @click="nextButtonAction"
        >
          {{ isLastStep ? 'Complete Order' : 'Next' }}
        </button>
      </div>
    </div>

    <div v-else>
      <h1 class="title">
        Thank you!
      </h1>
      <h2 class="subtitle">
        We look forward to shipping you your first box!
      </h2>

      <p class="text-center">
        <a href="https://vueschool.io" target="_blank" class="btn">Go somewhere cool!</a>
      </p>
    </div>

    <div v-if="asyncState === 'pending'" class="loading-wrapper">
      <div class="loader">
        <img src="/assets/images/spinner.svg" alt="">
        <p>Please wait, we're hitting our servers!</p>
      </div>
    </div>
  </div>
</template>
