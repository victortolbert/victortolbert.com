<script>
import FormPlanPicker from './FormPlanPicker.vue'
import FormUserDetails from './FormUserDetails.vue'
import FormAddress from './FormAddress.vue'
import FormReviewOrder from './FormReviewOrder.vue'

import { postFormToDB } from '~/api'

export default {
  name: 'FormWizard',
  components: {
    FormPlanPicker,
    FormUserDetails,
    FormAddress,
    FormReviewOrder,
  },
  data() {
    return {
      currentStepNumber: 1,
      asyncState: null,
      steps: [
        'FormPlanPicker',
        'FormUserDetails',
        'FormAddress',
        'FormReviewOrder',
      ],
      form: {
        plan: null,
        email: null,
        name: null,
        password: null,
        address: null,
        recipient: null,
        chocolate: false,
        otherTreat: false,
      },
    }
  },
  computed: {
    isLastStep() {
      return this.currentStepNumber === this.length
    },
    wizardInProgress() {
      return this.currentStepNumber <= this.length
    },
    length() {
      return this.steps.length
    },
    currentStep() {
      return this.steps[this.currentStepNumber - 1]
    },
    progress() {
      return this.currentStepNumber / this.length * 100
    },
  },
  methods: {
    updateAsyncState(state) {
      this.asyncState = state
    },
    submitOrder() {
      this.asyncState = 'pending'
      postFormToDB(this.form)
        .then(() => {
          console.log('form submitted', this.form)
          this.asyncState = 'success'
          this.currentStepNumber++
        })
    },
    nextButtonAction() {
      this.$refs.currentStep.submit()
        .then((stepData) => {
          Object.assign(this.form, stepData)
          if (this.isLastStep)
            this.submitOrder()

          else
            this.goNext()
        })
        .catch(error => console.log(error))
    },
    goBack() {
      this.currentStepNumber--
    },
    goNext() {
      this.currentStepNumber++
    },
  },
}
</script>

<template>
  <div>
    <div v-if="wizardInProgress" v-show="asyncState !== 'pending'">
      <keep-alive>
        <component
          :is="currentStep"
          ref="currentStep"
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
