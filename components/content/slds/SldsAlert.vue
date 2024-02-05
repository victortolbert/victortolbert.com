<template>
  <div class="slds-notify slds-notify_alert slds-alert_error" role="alert">
    <span class="slds-assistive-text">error</span>
    <span class="slds-icon_container slds-icon-utility-error slds-m-right_x-small" title="Description of icon when needed">
      <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error" />
      </svg>
    </span>
    <h2>
      Your browser is currently not supported. Your Salesforce may be degraded.
      <a href="#">More Information</a>
    </h2>
    <div class="slds-notify__close">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-button_icon-inverse" title="Close">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" />
        </svg>
        <span class="slds-assistive-text">Close</span>
      </button>
    </div>
  </div>
</template>
