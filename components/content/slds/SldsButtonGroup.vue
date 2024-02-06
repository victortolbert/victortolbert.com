<template>
  <div class="demo-only" style="height:8.75rem">
    <div class="slds-button-group" role="group">
      <button class="slds-button slds-button_neutral">
        Refresh
      </button>
      <button class="slds-button slds-button_neutral">
        Edit
      </button>
      <button class="slds-button slds-button_neutral">
        Save
      </button>
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open slds-button_last">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down" />
          </svg>
          <span class="slds-assistive-text">Show More</span>
        </button>
        <div class="slds-dropdown slds-dropdown_right slds-dropdown_actions">
          <ul class="slds-dropdown__list" role="menu">
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="0">
                <span class="slds-truncate" title="Overflow Item One">Overflow Item One</span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="-1">
                <span class="slds-truncate" title="Overflow Item Two">Overflow Item Two</span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="-1">
                <span class="slds-truncate" title="Overflow Item Three">Overflow Item Three</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
