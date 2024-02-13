<template>
  <div class="slds-card">
    <slot name="header" />

    <div class="slds-card__body slds-card__body_inner">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>
