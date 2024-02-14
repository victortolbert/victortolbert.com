<template>
  <header class="slds-global-header_container">
    <a href="#" class="slds-assistive-text slds-assistive-text_focus">Skip to Navigation</a>
    <a href="#" class="slds-assistive-text slds-assistive-text_focus">Skip to Main Content</a>

    <div class="slds-global-header slds-grid slds-grid_align-spread">
      <div class="slds-global-header__item">
        <NuxtLink to="/" class="flex items-center">
          <LogoLab class="text-sky-800 h-8 w-auto" />
          <!-- <BaseLogo class="text-violet-800" /> -->
        </NuxtLink>

        <!-- <div class="slds-global-header__logo">
          <span class="slds-assistive-text">Salesforce</span>
        </div> -->
      </div>

      <div class="slds-global-header__item slds-global-header__item_search">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-12">Search Exemplar</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox-group">
              <div class="slds-combobox_object-switcher slds-combobox-addon_start">
                <div class="slds-form-element">
                  <label id="combobox-label-id-16" class="slds-form-element__label slds-assistive-text" for="objectswitcher-combobox-id-12">Filter Search by:</label>
                  <div class="slds-form-element__control">
                    <div class="slds-combobox_container">
                      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-search-combobox-id-1">
                        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                          <div
                            id="objectswitcher-combobox-id-12-selected-value" role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-16 objectswitcher-combobox-id-12-selected-value"
                            aria-controls="objectswitcher-listbox-id-12" aria-expanded="false" aria-haspopup="listbox"
                          >
                            <span id="combobox-value-id-16" class="slds-truncate">Accounts</span>
                          </div>
                          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                            <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down" />
                            </svg>
                          </span>
                        </div>
                        <div id="objectswitcher-listbox-id-12" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                          <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                            <li role="presentation" class="slds-listbox__item">
                              <div id="option208" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                                <h3 class="slds-listbox__option-header" role="presentation">
                                  Suggested for you
                                </h3>
                              </div>
                            </li>
                            <li role="presentation" class="slds-listbox__item">
                              <div id="option209" aria-checked="true" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                                <span class="slds-media__figure slds-listbox__option-icon">
                                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                                    </svg>
                                  </span>
                                </span>
                                <span class="slds-media__body">
                                  <span class="slds-truncate" title="Accounts">Accounts</span>
                                </span>
                              </div>
                            </li>
                            <li role="presentation" class="slds-listbox__item">
                              <div id="option210" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                <span class="slds-media__figure slds-listbox__option-icon" />
                                <span class="slds-media__body">
                                  <span class="slds-truncate" title="Reports">Reports</span>
                                </span>
                              </div>
                            </li>
                            <li role="presentation" class="slds-listbox__item">
                              <div id="option211" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                <span class="slds-media__figure slds-listbox__option-icon" />
                                <span class="slds-media__body">
                                  <span class="slds-truncate" title="Contacts">Contacts</span>
                                </span>
                              </div>
                            </li>
                            <li role="presentation" class="slds-listbox__item">
                              <div id="option212" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                <span class="slds-media__figure slds-listbox__option-icon" />
                                <span class="slds-media__body">
                                  <span class="slds-truncate" title="Files">Files</span>
                                </span>
                              </div>
                            </li>
                            <li role="presentation" class="slds-listbox__item">
                              <div id="option213" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                <span class="slds-media__figure slds-listbox__option-icon" />
                                <span class="slds-media__body">
                                  <span class="slds-truncate" title="Groups">Groups</span>
                                </span>
                              </div>
                            </li>
                            <li role="presentation" class="slds-listbox__item">
                              <div id="option214" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                <span class="slds-media__figure slds-listbox__option-icon" />
                                <span class="slds-media__body">
                                  <span class="slds-truncate" title="Leads">Leads</span>
                                </span>
                              </div>
                            </li>
                            <li role="presentation" class="slds-listbox__item">
                              <div id="option215" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                <span class="slds-media__figure slds-listbox__option-icon" />
                                <span class="slds-media__body">
                                  <span class="slds-truncate" title="Notes">Notes</span>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slds-combobox_container slds-combobox-addon_end">
                <div id="primary-search-combobox-id-1" class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                  <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left slds-global-search__form-element" role="none">
                    <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_left">
                      <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search" />
                      </svg>
                    </span>
                    <input id="combobox-id-12" type="text" class="slds-input slds-combobox__input" aria-autocomplete="list" aria-controls="search-listbox-id-1" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Exemplar">
                  </div>
                  <div id="search-listbox-id-1" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                    <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="Recent Items">
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option216" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                          <h3 class="slds-listbox__option-header" role="presentation">
                            Recent Items
                          </h3>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option217" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon">
                            <span class="slds-icon_container slds-icon-standard-opportunity">
                              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#opportunity" />
                              </svg>
                            </span>
                          </span>
                          <span class="slds-media__body">
                            <span class="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce - 1,000 Licenses</span>
                            <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Opportunity • Propecting</span>
                          </span>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option218" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon">
                            <span class="slds-icon_container slds-icon-standard-contact">
                              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact" />
                              </svg>
                            </span>
                          </span>
                          <span class="slds-media__body">
                            <span class="slds-listbox__option-text slds-listbox__option-text_entity">Art Vandelay</span>
                            <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Contact • avandelay@vandelay.com</span>
                          </span>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option219" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon">
                            <span class="slds-icon_container slds-icon-standard-account">
                              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account" />
                              </svg>
                            </span>
                          </span>
                          <span class="slds-media__body">
                            <span class="slds-listbox__option-text slds-listbox__option-text_entity">Vandelay Industries</span>
                            <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco</span>
                          </span>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option220" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon">
                            <span class="slds-icon_container slds-icon-standard-event">
                              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event" />
                              </svg>
                            </span>
                          </span>
                          <span class="slds-media__body">
                            <span class="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce UK 2016 Events</span>
                            <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Event • $20,000</span>
                          </span>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option221" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon">
                            <span class="slds-icon_container slds-icon-standard-lead">
                              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#lead" />
                              </svg>
                            </span>
                          </span>
                          <span class="slds-media__body">
                            <span class="slds-listbox__option-text slds-listbox__option-text_entity">H.E. Pennypacker</span>
                            <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Lead • Nursing</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-global-header__item">
        <ul class="slds-global-actions">
          <li class="slds-global-actions__item">
            <div class="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
              <div class="slds-button-group">
                <button class="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small" aria-pressed="false" title="Toggle Favorites">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite" />
                  </svg>
                  <span class="slds-assistive-text">Toggle Favorite</span>
                </button>
                <button class="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
                  <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down" />
                  </svg>
                  <span class="slds-assistive-text">View Favorites</span>
                </button>
              </div>
            </div>
          </li>
          <li class="slds-global-actions__item">
            <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
              <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action" aria-haspopup="true" title="Global Actions">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
                </svg>
                <span class="slds-assistive-text">Global Actions</span>
              </button>
            </div>
          </li>
          <li class="slds-global-actions__item">
            <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
              <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
                <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#question" />
                </svg>
                <span class="slds-assistive-text">Help and Training</span>
              </button>
            </div>
          </li>
          <li class="slds-global-actions__item">
            <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
              <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action" aria-haspopup="true" title="Setup">
                <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#setup" />
                </svg>
                <span class="slds-assistive-text">Setup</span>
              </button>
            </div>
          </li>
          <li class="slds-global-actions__item">
            <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
              <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
                <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification" />
                </svg>
                <span class="slds-assistive-text">no new notifications</span>
              </button>
              <span aria-hidden="true" class="slds-notification-badge">0</span>
            </div>
          </li>
          <li class="slds-global-actions__item">
            <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
              <button
                class="slds-button slds-global-actions__avatar slds-global-actions__item-action"
                title="person name"
                aria-haspopup="true"
              >
                <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                  <UAvatar
                    src="/assets/images/avatars/avatar.png"
                    size="md"
                    alt="Person name"
                  />
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <SldsGlobalNavigation />
  </header>
</template>
