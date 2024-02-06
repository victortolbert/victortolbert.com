<template>
  <div class="slds-tabs_default">
    <ul class="slds-tabs_default__nav" role="tablist">
      <li class="slds-tabs_default__item slds-is-active" title="Item One" role="presentation">
        <a id="tab-default-1__item" class="slds-tabs_default__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-default-1">Item One</a>
      </li>
      <li class="slds-tabs_default__item" title="Item Two" role="presentation">
        <a id="tab-default-2__item" class="slds-tabs_default__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-default-2">Item Two</a>
      </li>
      <li class="slds-tabs_default__item" title="Item Three" role="presentation">
        <a id="tab-default-3__item" class="slds-tabs_default__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-default-3">Item Three</a>
      </li>
    </ul>
    <div id="tab-default-1" class="slds-tabs_default__content slds-show" role="tabpanel" aria-labelledby="tab-default-1__item">
      Item One Content
    </div>
    <div id="tab-default-2" class="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="tab-default-2__item">
      Item Two Content
    </div>
    <div id="tab-default-3" class="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="tab-default-3__item">
      Item Three Content
    </div>
  </div>
</template>
