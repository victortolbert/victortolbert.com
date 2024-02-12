<script setup>
const section = ref('Login')
const loading = ref('')
const username = ref('')
const password = ref('')
const response = ref('')

function checkCreds() {
  //  Change submit button
  // const self = this

  toggleLoading()
  resetResponse()
  store.commit('TOGGLE_LOADING')

  //  Login
  // this.$parent.callAPI('POST', '/login', {
  //   username: this.username,
  //   password: this.password,
  // }).then(function (response) {
  //   store.commit('TOGGLE_LOADING')
  //   if (response.data) {
  //     const data = response.data
  //     if (data.error) {
  //       if (data.error.name) { //  Object from LDAP at this point
  //         switch (data.error.name) {
  //           case 'InvalidCredentialsError' : self.response = 'Username/Password incorrect. Please try again.'; break
  //           default: self.response = data.error.name
  //         }
  //       }
  //       else {
  //         self.response = data.error
  //       }
  //     }
  //     else {
  //       //  success. Let's load up the dashboard
  //       if (data.user) {
  //         store.commit('SET_USER', data.user)
  //         const token = `Bearer ${data.token}`
  //         store.commit('SET_TOKEN', token)
  //         // Save to local storage as well
  //         if (window.localStorage) {
  //           window.localStorage.setItem('user', JSON.stringify(data.user))
  //           window.localStorage.setItem('token', token)
  //         }
  //         this.$router.push(data.redirect)
  //       }
  //     }
  //   }
  //   else {
  //     self.response = 'Did not receive a response. Please try again in a few minutes'
  //   }
  //   self.toggleLoading()
  // }, (response) => {
  //   // error
  //   store.commit('TOGGLE_LOADING')
  //   console.log('Error', response)
  //   self.response = 'Server appears to be offline'
  //   self.toggleLoading()
  // })
}

function toggleLoading() {
  loading.value = (loading.value === '') ? 'loading' : ''
}

function resetResponse() {
  response.value = ''
}
</script>

<template>
  <div class="container">
    <div class="text-center col-md-4 col-sm-offset-4">
      <div v-if="response" class="text-red">
        <p>{{ response }}</p>
      </div>

      <form class="ui form loginForm" @submit.prevent="checkCreds">
        <div class="input-group">
          <span class="input-group-addon">
            <i class="fa fa-envelope" />
          </span>
          <input
            v-model="username"
            class="form-control"
            name="username"
            placeholder="Username"
            type="text"
          >
        </div>

        <div class="input-group">
          <span class="input-group-addon">
            <i class="fa fa-lock" />
          </span>
          <input
            v-model="password"
            class="form-control"
            name="password"
            placeholder="Password"
            type="password"
          >
        </div>
        <button
          type="submit"
          :class="`btn btn-primary btn-lg ${loading}`"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
