<script setup lang="ts">
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

function login() {
  if (store.state.user.email.toLowerCase().includes('sell')) {
    store.state.hasError = false
    store.state.user.name = 'Seller User'

    // From some method in one of your Vue components
    store.state.activeApp = 'sellers'
    router.push('/videa/sellers/order-management/pending-orders')
  }
  else if (store.state.user.email.toLowerCase().includes('buy')) {
    store.state.hasError = false
    store.state.user.name = 'Buyer User'
    store.state.activeApp = 'buyers'
    router.push('/videa/buyers/avails-request')
  }
  else if (store.state.user.email.toLowerCase().includes('rep')) {
    store.state.hasError = false
    store.state.user.name = 'Rep User'
    store.state.activeApp = 'sellers'
    router.push('/sellers/order-management/pending-orders')
  }
  else {
    store.state.hasError = true
  }

  // this.$cookie.set('user', store.state.user.name, 1)

  // // To get the value of a cookie use
  // this.$cookie.get('test');

  // // To delete a cookie use
  // this.$cookie.delete('test');
}
</script>

<template>
  <div class="vui-container vui-grid vui-grid--align-spread vui-grid-vertical-align-center">
    <form class="vui-form--compound vui-align-middle">
      <fieldset class="vui-form--compound">
        <div class="form-element__group">
          <div class="vui-form-element__row" style="margin-bottom: 1rem">
            <div class="vui-form-element vui-size--1-of-3 vui-align-bottom">
              <label class="vui-form-element__label" for="input-01" style="color: white">Email</label>
              <div class="vui-form-element__control vui-input-has-icon vui-input-has-icon--left">
                <vui-icon class="vui-input__icon" name="envelope" style="color: hsla(214, 66%, 34%, 1)" />
                <input v-model="store.state.user.email" class="vui-input" placeholder="john.doe@email.com" style="min-width: 14rem" type="email">
              </div>
            </div>
            <div class="vui-form-element vui-size--1-of-3 vui-align-bottom">
              <label class="vui-form-element__label" for="input-01" style="color: white">Password</label>
              <div class="vui-form-element__control vui-input-has-icon vui-input-has-icon--left">
                <vui-icon class="vui-input__icon" name="lock" style="color: hsla(214, 66%, 34%, 1)" />
                <input class="vui-input" placeholder="Password" style="min-width: 14rem" type="password">
              </div>
            </div>
            <div class="vui-form-element vui-size--1-of-3 vui-align-bottom">
              <button class="vui-button vui-button--secondary vui-m-right--x-small" @click.prevent="login">
                Login
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
