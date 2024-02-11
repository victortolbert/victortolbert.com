<script setup>
const open = ref(false)
const showContactUs = ref(false)
const showEmailSent = ref(false)
const showEmailUs = ref(false)

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <div class="site-help slideright-transition" :class="open ? 'open-drawer' : 'close-drawer'">
    <div class="wrapper" :class="open ? 'open-drawer' : 'close-drawer'">
      <div class="site-help__toggle" @click="toggle">
        Need Help?
      </div>
      <div class="site-help__content">
        <div v-show="showContactUs" class="contact-us">
          <h1 class="vui-text-heading--large vui-m-bottom--medium">
            Contact Us
          </h1>
          <div class="vui-grid vui-grid--pull-padded-large">
            <div class="vui-grid vui-grid--vertical vui-col--padded-large vui-col--rule-right" style="width: 33.33%">
              <h3 class="vui-text-heading--medium vui-m-bottom--medium vui-grid">
                <span class="vui-align-middle">Call Us</span><span class="vui-align-middle glyphicon glyphicon-earphone icon" />
              </h3>
              <p>We are available from 8:00am-11:00pm EST/EDT Mon - Fri.</p>
              <p>Customer Service: 1(844)48VIDEA</p>
            </div>
            <div class="vui-grid vui-grid--vertical vui-col--padded-large vui-col--rule-right" style="width: 33.33%">
              <h3 class="vui-text-heading--medium vui-m-bottom--medium">
                <span class="vui-align-middle">Live Chat</span><span class="vui-align-middle glyphicon glyphicon-comment icon" />
              </h3>
              <p>Need fast help? From 8:00am-11:00pm EST/EDT Mon - Fri we are online and ready to help.</p>
              <div class="vui-col--bump-top">
                <input id="chatOnline" class="vui-button vui-button--brand chatOnline" type="submit" name="chatOnline" value="Start Chat" style="display: none">
                <input id="chatOffline" class="vui-button vui-button--brand chatOffline" type="button" name="chatOffline" value="Chat Offline" disabled="">
              </div>
            </div>
            <div class="vui-grid vui-grid--vertical vui-grid--align-end vui-col--padded-large" style="width: 33.33%">
              <h3 class="vui-text-heading--medium vui-m-bottom--medium">
                <span class="vui-align-middle">Contact Us</span><span class="vui-align-middle glyphicon glyphicon-envelope icon" />
              </h3>
              <p>Technical Support: support@videa.tv</p>
              <p class="vui-m-bottom--medium">
                Or, use our email form and we will get back to you within our support hours of 8:00am-11:00pm EST/EDT - Mon-Fri
              </p>
              <div class="vui-col--bump-top">
                <input class="vui-button vui-button--brand" type="button" value="Contact Us">
              </div>
            </div>
          </div>
        </div>
        <div class="vui-help-email">
          <div v-show="showEmailUs" class="content">
            <form name="emailForm">
              <h1 class="vui-text-heading--large vui-m-bottom--medium">
                Email Us
              </h1>
              <fieldset class="vui-form-element is-required">
                <input id="email" class="vui-input" type="email" required="" data-ng-model="formData.email" ng-model-options="{ updateOn: 'blur' }" data-ng-maxlength="80" name="email" size="20" placeholder="email">
                <div class="vui-form-element__help" />
              </fieldset>
              <fieldset class="vui-form-element is-required">
                <textarea class="vui-textarea" name="description" rows="10" cols="50" placeholder="Your message goes here!" data-ng-model="formData.description" required="" />
                <div class="vui-form-element__help" />
              </fieldset>
              <fieldset class="vui-form-element">
                <input class="vui-button vui-button--brand" type="submit" value="Send Email" disabled="disabled">
              </fieldset>
            </form>
          </div>
          <div v-show="showEmailSent" class="content-sub-half">
            <div class="vui-help">
              <h1 class="vui-text-heading--large vui-m-bottom--medium">
                Email Us
              </h1>
              <h2 class="vui-text-heading--medium vui-m-bottom--medium">
                Email sent!
              </h2>
              <p>We will respond to your email within the next 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
  .site-help
    width: 750px
    position: fixed
    top: 24rem
    right: 0
    background: #fff
    border: 4px solid #6a2565
    border-right: none
    z-index: 8000
  .site-help__toggle
    position: absolute
    display: inline-block
    margin-top: 7.89999rem
    margin-left: -3rem
    -webkit-transform: rotate(-90deg)
    transform: rotate(-90deg)
    -webkit-transform-origin: 0 0
    transform-origin: 0 0
    background-color: #6a2565
    color: #fff
    padding: .75rem 1.5rem
    cursor: pointer
  .site-help__content
    padding: 1.5rem
  .site-help__content .icon
    color: #5f9ea0
    margin-left: 10px
  .site-help.open-drawer
    -webkit-transform: translateX(0)
    transform: translateX(0)
    -webkit-animation: slide-in .3s
    animation: slide-in 0.3s
  .site-help.close-drawer
    -webkit-transform: translateX(100%)
    transform: translateX(100%)
  .site-help .load-spinner
    position: absolute
    top: 45%
    z-index: 9999
    left: 50%
  .site-help .chatOffline
    cursor: not-allowed
    // filter: alpha(opacity = 65)
    box-shadow: none
    opacity: 0.65

  @keyframes slide-in
    0%
      -webkit-transform: translateX(100%)
      transform: translateX(100%)
      opacity: 0
    to
      -webkit-transform: translateX(0)
      transform: translateX(0)
      opacity: 1

  @keyframes slide-out
    0%
      -webkit-transform: translateX(0)
      transform: translateX(0)
      opacity: 1
    to
      -webkit-transform: translateX(100%)
      transform: translateX(100%)
      opacity: 0
</style>
