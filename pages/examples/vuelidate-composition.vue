<script setup>
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const state = reactive({
  firstName: '',
  lastName: '',
  contact: {
    email: '',
  },
})

const rules = {
  firstName: { required }, // Matches state.firstName
  lastName: { required }, // Matches state.lastName
  contact: {
    email: { required, email }, // Matches state.contact.email
  },
}

const v$ = useVuelidate(rules, state)
</script>

<template>
  <div :class="{ error: v$.firstName.$errors.length }">
    <input v-model="state.firstName">

    <div v-for="error of v$.firstName.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>

    <label>
      <input v-model="name" @blur="v$.name.$touch">
      <div v-if="v$.name.$error">Name field has an error.</div>
    </label>
  </div>
</template>
