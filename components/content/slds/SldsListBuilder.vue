<template>
  <div class="demo-only demo-only_viewport" style="height:640px">
    <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="id-of-modalheader-h1" class="slds-modal slds-fade-in-open slds-modal_large">
      <div class="slds-modal__container">
        <button class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse">
          <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" />
          </svg>
          <span class="slds-assistive-text">Cancel and close</span>
        </button>
        <div class="slds-modal__header">
          <h1 id="id-of-modalheader-h1" class="slds-text-heading_medium">
            Add products
          </h1>
          <p class="slds-m-top_x-small">
            Pricebook: Salesforce Products
          </p>
        </div>
        <div id="modal-content-id-1" class="slds-modal__content slds-grid slds-nowrap">
          <div class="slds-col slds-grid slds-grid_vertical slds-nowrap">
            <div class="slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade">
              <div class="slds-form-element">
                <label id="combobox-label-id-25" class="slds-form-element__label slds-assistive-text" for="example-unique-id-220">Search</label>
                <div class="slds-form-element__control">
                  <div class="slds-combobox_container">
                    <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                      <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                        <input id="example-unique-id-220" type="text" class="slds-input slds-combobox__input" aria-autocomplete="list" aria-controls="example-unique-id-221" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Salesforce">
                        <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                          <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search" />
                          </svg>
                        </span>
                      </div>
                      <div id="example-unique-id-221" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                        <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option97" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__body">
                                <span class="slds-truncate" title="Option A">Option A</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option98" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__body">
                                <span class="slds-truncate" title="Option B">Option B</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option99" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__body">
                                <span class="slds-truncate" title="Option C">Option C</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option100" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__body">
                                <span class="slds-truncate" title="Option D">Option D</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slds-pill_container slds-pill_container_bare">
                <ul class="slds-listbox slds-listbox_horizontal" role="listbox" aria-label="Selected Options:" aria-orientation="horizontal">
                  <li class="slds-listbox-item" role="presentation">
                    <span class="slds-pill" role="option" tabindex="0" aria-selected="true">
                      <span class="slds-pill__label" title="Analytics">Analytics</span>
                      <span class="slds-icon_container slds-pill__remove" title="Remove">
                        <svg class="slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" />
                        </svg>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="slds-text-title slds-m-top_x-small" aria-live="polite">
                1 Item(s) Selected
              </div>
            </div>
            <div class="slds-scrollable slds-grow">
              <div class="slds-scrollable_none">
                <table aria-multiselectable="true" class="slds-table slds-no-row-hover slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example product list">
                  <thead>
                    <tr class="slds-line-height_reset">
                      <th class="" scope="col" style="width:3.75rem" />
                      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                          <span class="slds-assistive-text">Sort by: </span>
                          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span class="slds-truncate" title="Name">Name</span>
                            <span class="slds-icon_container slds-icon-utility-arrowdown">
                              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon" aria-hidden="true">
                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" />
                              </svg>
                            </span>
                          </div>
                        </a>
                        <div class="slds-resizable">
                          <input id="cell-resize-handle-85" type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" max="1000" min="20" tabindex="-1">
                          <span class="slds-resizable__handle">
                            <span class="slds-resizable__divider" />
                          </span>
                        </div>
                      </th>
                      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                          <span class="slds-assistive-text">Sort by: </span>
                          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span class="slds-truncate" title="Product Code">Product Code</span>
                            <span class="slds-icon_container slds-icon-utility-arrowdown">
                              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon" aria-hidden="true">
                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" />
                              </svg>
                            </span>
                          </div>
                        </a>
                        <div class="slds-resizable">
                          <input id="cell-resize-handle-86" type="range" aria-label="Product Code column width" class="slds-resizable__input slds-assistive-text" max="1000" min="20" tabindex="-1">
                          <span class="slds-resizable__handle">
                            <span class="slds-resizable__divider" />
                          </span>
                        </div>
                      </th>
                      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                          <span class="slds-assistive-text">Sort by: </span>
                          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span class="slds-truncate" title="List Price">List Price</span>
                            <span class="slds-icon_container slds-icon-utility-arrowdown">
                              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon" aria-hidden="true">
                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" />
                              </svg>
                            </span>
                          </div>
                        </a>
                        <div class="slds-resizable">
                          <input id="cell-resize-handle-87" type="range" aria-label="List Price column width" class="slds-resizable__input slds-assistive-text" max="1000" min="20" tabindex="-1">
                          <span class="slds-resizable__handle">
                            <span class="slds-resizable__divider" />
                          </span>
                        </div>
                      </th>
                      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                          <span class="slds-assistive-text">Sort by: </span>
                          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span class="slds-truncate" title="Product Family">Product Family</span>
                            <span class="slds-icon_container slds-icon-utility-arrowdown">
                              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon" aria-hidden="true">
                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" />
                              </svg>
                            </span>
                          </div>
                        </a>
                        <div class="slds-resizable">
                          <input id="cell-resize-handle-88" type="range" aria-label="Product Family column width" class="slds-resizable__input slds-assistive-text" max="1000" min="20" tabindex="-1">
                          <span class="slds-resizable__handle">
                            <span class="slds-resizable__divider" />
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
                      <td class="slds-text-align_right" role="gridcell" tabindex="0">
                        <label class="slds-checkbox-button slds-checkbox-button_is-checked" for="example-unique-id-222">
                          <input id="example-unique-id-222" type="checkbox" class="slds-assistive-text" value="example-unique-id-222" tabindex="-1" checked>
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color" title="Description of icon when needed">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                            </svg>
                            <span class="slds-assistive-text">Add product</span>
                          </span>
                        </label>
                      </td>
                      <th scope="row">
                        <div class="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div class="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="Analytics Product">
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" class="slds-hint-parent">
                      <td class="slds-text-align_right" role="gridcell">
                        <label class="slds-checkbox-button" for="example-unique-id-223">
                          <input id="example-unique-id-223" type="checkbox" class="slds-assistive-text" value="example-unique-id-223" tabindex="-1">
                          <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
                            </svg>
                            <span class="slds-assistive-text">Add product</span>
                          </span>
                        </label>
                      </td>
                      <th scope="row">
                        <div class="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div class="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="Analytics Product">
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" class="slds-hint-parent">
                      <td class="slds-text-align_right" role="gridcell">
                        <label class="slds-checkbox-button" for="example-unique-id-224">
                          <input id="example-unique-id-224" type="checkbox" class="slds-assistive-text" value="example-unique-id-224" tabindex="-1">
                          <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
                            </svg>
                            <span class="slds-assistive-text">Add product</span>
                          </span>
                        </label>
                      </td>
                      <th scope="row">
                        <div class="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div class="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="Analytics Product">
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" class="slds-hint-parent">
                      <td class="slds-text-align_right" role="gridcell">
                        <label class="slds-checkbox-button" for="example-unique-id-225">
                          <input id="example-unique-id-225" type="checkbox" class="slds-assistive-text" value="example-unique-id-225" tabindex="-1">
                          <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
                            </svg>
                            <span class="slds-assistive-text">Add product</span>
                          </span>
                        </label>
                      </td>
                      <th scope="row">
                        <div class="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div class="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="Analytics Product">
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" class="slds-hint-parent">
                      <td class="slds-text-align_right" role="gridcell">
                        <label class="slds-checkbox-button" for="example-unique-id-226">
                          <input id="example-unique-id-226" type="checkbox" class="slds-assistive-text" value="example-unique-id-226" tabindex="-1">
                          <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
                            </svg>
                            <span class="slds-assistive-text">Add product</span>
                          </span>
                        </label>
                      </td>
                      <th scope="row">
                        <div class="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div class="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="Analytics Product">
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" class="slds-hint-parent">
                      <td class="slds-text-align_right" role="gridcell">
                        <label class="slds-checkbox-button" for="example-unique-id-227">
                          <input id="example-unique-id-227" type="checkbox" class="slds-assistive-text" value="example-unique-id-227" tabindex="-1">
                          <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
                            </svg>
                            <span class="slds-assistive-text">Add product</span>
                          </span>
                        </label>
                      </td>
                      <th scope="row">
                        <div class="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div class="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="Analytics Product">
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" class="slds-hint-parent">
                      <td class="slds-text-align_right" role="gridcell">
                        <label class="slds-checkbox-button" for="example-unique-id-228">
                          <input id="example-unique-id-228" type="checkbox" class="slds-assistive-text" value="example-unique-id-228" tabindex="-1">
                          <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
                            </svg>
                            <span class="slds-assistive-text">Add product</span>
                          </span>
                        </label>
                      </td>
                      <th scope="row">
                        <div class="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div class="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="Analytics Product">
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" class="slds-hint-parent">
                      <td class="slds-text-align_right" role="gridcell">
                        <label class="slds-checkbox-button" for="example-unique-id-229">
                          <input id="example-unique-id-229" type="checkbox" class="slds-assistive-text" value="example-unique-id-229" tabindex="-1">
                          <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
                            </svg>
                            <span class="slds-assistive-text">Add product</span>
                          </span>
                        </label>
                      </td>
                      <th scope="row">
                        <div class="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div class="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div class="slds-truncate" title="Analytics Product">
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="slds-modal__footer">
          <button class="slds-button slds-button_neutral" aria-label="Cancel and close">
            Cancel
          </button>
          <button class="slds-button slds-button_brand">
            Next
          </button>
        </div>
      </div>
    </section>
    <div class="slds-backdrop slds-backdrop_open" role="presentation" />
  </div>
</template>
