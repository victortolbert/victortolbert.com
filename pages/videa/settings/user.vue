<script setup>
const newpassword = ref('')
const hasErrors = ref(false)
const activeTab = ref('#user-settings')

function onKeyup() {
  alert('on keyup')
}

function onSubmit(event) {
  // validate manually
  // this.$validate(true)

  // if (this.$validation.invalid)
  //   event.preventDefault()
}
</script>

<template>
  <div
    v-show="activeTab === '#user-settings'"
    class="page settings user vui-p-around--x-large vui-tabs--scoped__content"
    aria-labelledby="tab-scoped-1__item"
    role="tabpanel"
  >
    <form
      class="vui-container--x-large"
      novalidate="novalidate"
      @submit="onSubmit"
    >
      <div
        id="resetPassword"
        class="vui-m-bottom--large"
      >
        <h3 class="vui-text-heading--medium vui-m-bottom--medium">
          Reset Password
        </h3>
        <div class="vui-grid vui-grid--align-spread">
          <div class="vui-p-right--xx-large vui-size--12-of-12 vui-medium-size--1-of-2 vui-large-size--1-of-2">
            <p class="vui-m-bottom--medium">
              Please enter your old password and confirm your new password.
            </p>
            <!-- Old Password Fieldset -->
            <fieldset class="vui-form-element vui-m-bottom--large">
              <label class="vui-form-element__label" for="password">
                Old Password
              </label>
              <div class="vui-form-element__control">
                <!-- @keyup.191="onKeyup" -->
                <input
                  id="password"
                  class="VuiInput"
                  detect-blur="off"
                  detect-change="off"
                  name="password"
                  type="password"
                >
              </div>
            </fieldset>
            <!-- New Password Fieldset -->
            <fieldset class="vui-form-element vui-m-bottom--large">
              <label class="vui-form-element__label" for="newpassword">
                New Password
              </label>
              <div class="vui-form-element__control">
                <input
                  id="newpassword"
                  v-model="newpassword"
                  class="VuiInput"
                  detect-blur="off"
                  detect-change="off"
                  name="newpassword"
                  type="password"
                >
              </div>
            </fieldset>

            <!-- Confirm Password Fieldset -->
            <fieldset class="vui-form-element vui-m-bottom--large">
              <label class="vui-form-element__label" for="confirmpassword">
                Confirm Password:
              </label>
              <div class="vui-form-element__control">
                <input
                  id="confirmpassword"
                  class="VuiInput"
                  detect-blur="off"
                  detect-change="off"
                  name="confirmpassword"
                  type="password"
                >
              </div>
            </fieldset>
          </div>
          <div class="vui-size--12-of-12 vui-medium-size--1-of-2 vui-large-size--1-of-2">
            <h4 class="vui-text-heading--small vui-m-bottom--medium">
              Password Requirements
            </h4>
            <div v-if="hasErrors" class="errors" />
            <ul>
              <li>At least 6 characters</li>
              <li>Contains uppercase and lowercase letters</li>
              <li>Contains a number</li>
              <li>Contains at least 1 special character (!@$)</li>
              <li>Does NOT include your email or username</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="contactInformation">
        <h3 class="vui-text-heading--medium vui-m-bottom--medium">
          Contact Information
        </h3>
        <div class="vui-grid vui-grid--align-spread">
          <div class="vui-col vui-size--12-of-12 vui-medium-size--1-of-2 vui-large-size--1-of-2 vui-p-right--xx-large">
            <h4 class="vui-text-heading--small vui-m-bottom--medium">
              Update Phone Number
            </h4>
            <p class="vui-m-bottom--medium">
              Please enter your phone number and confirm your new phone number.
            </p>
            <!-- Phone Number -->
            <VuiInput
              id="phoneNumber"
              class="vui-m-bottom--large"
              label="Phone Number (xxx-xxx-xxxx)"
              type="tel"
            />
            <!-- New Phone Number -->
            <VuiInput
              id="newPhoneNumber"
              class="vui-m-bottom--large"
              label="New Phone Number (xxx-xxx-xxxx)"
              type="tel"
            />
            <!-- Confirm Phone Number -->
            <VuiInput
              id="confirmPhoneNumber"
              class="vui-m-bottom--large"
              label="Confirm Phone Number"
              type="tel"
            />
            <button
              class="vui-button vui-button--brand vui-m-right--x-small"
              @click.prevent=""
            >
              Submit
            </button>
            <button class="vui-button vui-button--neutral" @click.prevent="">
              Cancel
            </button>
          </div>
          <div class="vui-size--12-of-12 vui-medium-size--1-of-2 vui-large-size--1-of-2">
            <p>Please contact the administrator at 844-213-8543 or admin@videa.tv if you need to have your email updated.</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
