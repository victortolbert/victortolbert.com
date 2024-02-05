<template>
  <div class="slds-notify_container slds-is-relative">
    <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
      <span class="slds-assistive-text">success</span>
      <span class="slds-icon_container slds-icon-utility-success slds-m-right_small slds-no-flex slds-align-top" title="Description of icon when needed">
        <svg class="slds-icon slds-icon_small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success" />
        </svg>
      </span>
      <div class="slds-notify__content">
        <h2 class="slds-text-heading_small">
          Account
          <a href="#">ACME - 100</a> widgets was created.
        </h2>
      </div>
      <div class="slds-notify__close">
        <button class="slds-button slds-button_icon slds-button_icon-inverse" title="Close">
          <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" />
          </svg>
          <span class="slds-assistive-text">Close</span>
        </button>
      </div>
    </div>
  </div>
</template>
