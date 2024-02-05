<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  props: {
    wizardData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      form: {
        address: null,
        recipient: this.wizardData.name,
      },
    }
  },

  activated() {
    this.form.recipient = this.wizardData.name
  },

  validations() {
    return {
      form: {
        address: {
          required,
        },
        recipient: {
          required,
        },
      },
    }
  },
  methods: {
    submit() {
      this.v$.$touch()
      return new Promise((resolve, reject) => {
        if (!this.v$.$invalid) {
          resolve({
            recipient: this.form.recipient,
            address: this.form.address,
          })
        }
        else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('invalid address')
        }
      })
    },
  },
}
</script>

<template>
  <div>
    <h1 class="title">
      Delivery details
    </h1>

    <h2 class="subtitle">
      Where should we send your freshly roasted coffee beans?
    </h2>

    <form class="form">
      <div class="form-group">
        <label class="form-label" for="delivery_name">Name</label>
        <input id="delivery_name" v-model="v$.form.recipient.$model" type="text" placeholder="Recipients Name" class="form-control">
        <div v-if="v$.form.recipient.$error" class="error">
          field is required
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="address">Address</label>
        <textarea id="address" v-model="v$.form.address.$model" placeholder="London Street 470978 New England" rows="3" class="form-control" />
        <div v-if="v$.form.address.$error" class="error">
          field is required
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
