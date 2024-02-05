<template>
  <div class="demo-only" style="height:28rem;position:relative;margin-left:1rem">
    <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Show Favorites">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite" />
      </svg>
      <span class="slds-assistive-text">Show Favorites</span>
    </button>
    <section aria-describedby="dialog-body-id-22" aria-label="My Favourites" class="slds-popover slds-nubbin_top-left slds-dynamic-menu" role="dialog" style="position:absolute;left:-0.5rem;top:48px">
      <div id="dialog-body-id-22" class="slds-popover__body slds-p-horizontal_none">
        <div class="slds-media">
          <div class="slds-media__body">
            <div id="example-unique-id-20" class="slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="My Favorites">
                <li role="presentation" class="slds-listbox__item">
                  <div id="option61" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                    <h3 class="slds-listbox__option-header" role="presentation">
                      My Favorites
                    </h3>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option62" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option" tabindex="0">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-standard-account">
                        <svg class="slds-icon slds-icon_small" aria-hidden="true">
                          <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account" />
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                      <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option63" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-standard-account">
                        <svg class="slds-icon slds-icon_small" aria-hidden="true">
                          <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account" />
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                      <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option64" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-standard-account">
                        <svg class="slds-icon slds-icon_small" aria-hidden="true">
                          <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account" />
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="slds-listbox__option-text slds-listbox__option-text_entity">Edge Communications</span>
                      <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Austin, TX</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option65" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-standard-account">
                        <svg class="slds-icon slds-icon_small" aria-hidden="true">
                          <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account" />
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="slds-listbox__option-text slds-listbox__option-text_entity">Express Logistics and Transport</span>
                      <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Portland, OR</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option66" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-standard-account">
                        <svg class="slds-icon slds-icon_small" aria-hidden="true">
                          <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account" />
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="slds-listbox__option-text slds-listbox__option-text_entity">GenePoint</span>
                      <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Mountain View, CA</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer class="slds-popover__footer">
        <ul>
          <li>
            <button class="slds-button slds-button_reset slds-p-vertical_xx-small slds-size_1-of-1">
              <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
              </svg>Favorite this page
            </button>
          </li>
          <li>
            <button class="slds-button slds-button_reset slds-p-vertical_xx-small slds-size_1-of-1">
              <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit" />
              </svg>Edit Favorites
            </button>
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>
