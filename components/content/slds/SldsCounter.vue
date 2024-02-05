<template>
  <div class="slds-form-element">
    <label class="slds-form-element__label slds-m-right_none" for="default1">Counter Label</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_decrement" title="Decrement counter">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#ban" />
        </svg>
        <span class="slds-assistive-text">Decrement counter</span>
      </button>
      <input id="default1" type="number" placeholder="1" class="slds-input slds-input_counter">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_increment" title="Increment counter">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#new" />
        </svg>
        <span class="slds-assistive-text">Increment counter</span>
      </button>
    </div>
  </div>
</template>
