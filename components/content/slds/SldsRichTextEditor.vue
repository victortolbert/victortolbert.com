<template>
  <div class="demo-only" style="min-height:180px">
    <div class="slds-form-element">
      <div class="slds-form-element__control">
        <div class="slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap">
          <div role="toolbar" class="slds-rich-text-editor__toolbar slds-shrink-none">
            <ul aria-label="Format text" class="slds-button-group-list">
              <li>
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" tabindex="0">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#bold" />
                  </svg>
                  <span class="slds-assistive-text">Bold</span>
                </button>
              </li>
              <li>
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" tabindex="-1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#italic" />
                  </svg>
                  <span class="slds-assistive-text">Italic</span>
                </button>
              </li>
              <li>
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" tabindex="-1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#underline" />
                  </svg>
                  <span class="slds-assistive-text">Underline</span>
                </button>
              </li>
              <li>
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" tabindex="-1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#strikethrough" />
                  </svg>
                  <span class="slds-assistive-text">Strike Through</span>
                </button>
              </li>
            </ul>
            <ul aria-label="Format body" class="slds-button-group-list">
              <li>
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" tabindex="-1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#richtextbulletedlist" />
                  </svg>
                  <span class="slds-assistive-text">Bulleted List</span>
                </button>
              </li>
              <li>
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" tabindex="-1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist" />
                  </svg>
                  <span class="slds-assistive-text">Numbered List</span>
                </button>
              </li>
              <li>
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" tabindex="-1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#richtextindent" />
                  </svg>
                  <span class="slds-assistive-text">Indent</span>
                </button>
              </li>
              <li>
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" tabindex="-1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#richtextoutdent" />
                  </svg>
                  <span class="slds-assistive-text">Outdent</span>
                </button>
              </li>
            </ul>
            <ul aria-label="Remove Formatting" class="slds-button-group-list">
              <li>
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" tabindex="-1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#remove_formatting" />
                  </svg>
                  <span class="slds-assistive-text">Remove Formatting</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="slds-rich-text-editor__textarea slds-grid">
            <div aria-label="Compose text" contenteditable="true" class="slds-rich-text-area__content slds-text-color_weak slds-grow">
              Compose text...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
