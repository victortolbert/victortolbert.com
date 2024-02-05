<template>
  <div>
    <div class="slds-form">
      <fieldset class="slds-form-element slds-form-element_compound">
        <legend class="slds-form-element__label slds-form-element__legend">
          Date and Time
        </legend>
        <div class="slds-form-element__control">
          <div class="slds-form-element__group">
            <div class="slds-form-element__row">
              <div class="slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
                <label class="slds-form-element__label" for="example-unique-id-40">Date</label>
                <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
                  <input id="example-unique-id-40" type="text" placeholder="Select a date…" class="slds-input">
                  <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Select a date">
                    <svg class="slds-button__icon" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#event" />
                    </svg>
                    <span class="slds-assistive-text">Select a date</span>
                  </button>
                </div>
                <div aria-hidden="false" aria-label="Date picker: June" class="slds-datepicker slds-dropdown slds-dropdown_left" role="dialog">
                  <div class="slds-datepicker__filter slds-grid">
                    <div class="slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow">
                      <div class="slds-align-middle">
                        <button class="slds-button slds-button_icon slds-button_icon-container" title="Previous Month">
                          <svg class="slds-button__icon" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left" />
                          </svg>
                          <span class="slds-assistive-text">Previous Month</span>
                        </button>
                      </div>
                      <h2 id="undefined-month" aria-atomic="true" aria-live="assertive" class="slds-align-middle">
                        June
                      </h2>
                      <div class="slds-align-middle">
                        <button class="slds-button slds-button_icon slds-button_icon-container" title="Next Month">
                          <svg class="slds-button__icon" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right" />
                          </svg>
                          <span class="slds-assistive-text">Next Month</span>
                        </button>
                      </div>
                    </div>
                    <div class="slds-shrink-none">
                      <label class="slds-assistive-text" for="undefined_select">Pick a Year</label>
                      <div class="slds-select_container">
                        <select id="undefined_select" class="slds-select">
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <table aria-labelledby="undefined-month" aria-multiselectable="true" class="slds-datepicker__month" role="grid">
                    <thead>
                      <tr id="undefined-weekdays">
                        <th id="undefined-Sunday" scope="col">
                          <abbr title="Sunday">Sun</abbr>
                        </th>
                        <th id="undefined-Monday" scope="col">
                          <abbr title="Monday">Mon</abbr>
                        </th>
                        <th id="undefined-Tuesday" scope="col">
                          <abbr title="Tuesday">Tue</abbr>
                        </th>
                        <th id="undefined-Wednesday" scope="col">
                          <abbr title="Wednesday">Wed</abbr>
                        </th>
                        <th id="undefined-Thursday" scope="col">
                          <abbr title="Thursday">Thu</abbr>
                        </th>
                        <th id="undefined-Friday" scope="col">
                          <abbr title="Friday">Fri</abbr>
                        </th>
                        <th id="undefined-Saturday" scope="col">
                          <abbr title="Saturday">Sat</abbr>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td aria-selected="false" class="slds-day_adjacent-month" role="gridcell" aria-label="31 May 2020">
                          <span class="slds-day">31</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" tabindex="0" aria-label="1 June 2020">
                          <span class="slds-day">1</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="2 June 2020">
                          <span class="slds-day">2</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="3 June 2020">
                          <span class="slds-day">3</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="4 June 2020">
                          <span class="slds-day">4</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="5 June 2020">
                          <span class="slds-day">5</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="6 June 2020">
                          <span class="slds-day">6</span>
                        </td>
                      </tr>
                      <tr>
                        <td aria-selected="false" class="" role="gridcell" aria-label="7 June 2020">
                          <span class="slds-day">7</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="8 June 2020">
                          <span class="slds-day">8</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="9 June 2020">
                          <span class="slds-day">9</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="10 June 2020">
                          <span class="slds-day">10</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="11 June 2020">
                          <span class="slds-day">11</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="12 June 2020">
                          <span class="slds-day">12</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="13 June 2020">
                          <span class="slds-day">13</span>
                        </td>
                      </tr>
                      <tr>
                        <td aria-selected="false" class="" role="gridcell" aria-label="14 June 2020">
                          <span class="slds-day">14</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="15 June 2020">
                          <span class="slds-day">15</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="16 June 2020">
                          <span class="slds-day">16</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="17 June 2020">
                          <span class="slds-day">17</span>
                        </td>
                        <td aria-selected="false" aria-current="date" class="slds-is-today" role="gridcell" aria-label="18 June 2020">
                          <span class="slds-day">18</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="19 June 2020">
                          <span class="slds-day">19</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="20 June 2020">
                          <span class="slds-day">20</span>
                        </td>
                      </tr>
                      <tr class="">
                        <td aria-selected="false" class="" role="gridcell" aria-label="21 June 2020">
                          <span class="slds-day">21</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="22 June 2020">
                          <span class="slds-day">22</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="23 June 2020">
                          <span class="slds-day">23</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="24 June 2020">
                          <span class="slds-day">24</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="25 June 2020">
                          <span class="slds-day">25</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="26 June 2020">
                          <span class="slds-day">26</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="27 June 2020">
                          <span class="slds-day">27</span>
                        </td>
                      </tr>
                      <tr class="">
                        <td aria-selected="false" class="" role="gridcell" aria-label="28 June 2020">
                          <span class="slds-day">28</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="29 June 2020">
                          <span class="slds-day">29</span>
                        </td>
                        <td aria-selected="false" class="" role="gridcell" aria-label="30 June 2020">
                          <span class="slds-day">30</span>
                        </td>
                        <td aria-selected="false" class="slds-day_adjacent-month" role="gridcell" aria-label="1 July 2020">
                          <span class="slds-day">1</span>
                        </td>
                        <td aria-selected="false" class="slds-day_adjacent-month" role="gridcell" aria-label="2 July 2020">
                          <span class="slds-day">2</span>
                        </td>
                        <td aria-selected="false" class="slds-day_adjacent-month" role="gridcell" aria-label="3 July 2020">
                          <span class="slds-day">3</span>
                        </td>
                        <td aria-selected="false" class="slds-day_adjacent-month" role="gridcell" aria-label="4 July 2020">
                          <span class="slds-day">4</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button class="slds-button slds-align_absolute-center slds-text-link">
                    Today
                  </button>
                </div>
              </div>
              <div class="slds-form-element">
                <label id="combobox-label-id-13" class="slds-form-element__label" for="example-unique-id-41">Time</label>
                <div class="slds-form-element__control">
                  <div class="slds-combobox_container">
                    <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                      <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                        <input
                          id="example-unique-id-41" type="text" class="slds-input slds-combobox__input" aria-activedescendant="" aria-autocomplete="list" aria-controls="example-unique-id-42" aria-expanded="false" aria-haspopup="listbox" autoComplete="off"
                          role="combobox" placeholder="Select a time…" value=""
                        >
                        <span class="slds-icon_container slds-icon-utility-clock slds-input__icon slds-input__icon_right">
                          <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clock" />
                          </svg>
                        </span>
                      </div>
                      <div id="example-unique-id-42" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                        <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option79" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon" />
                              <span class="slds-media__body">
                                <span class="slds-truncate" title="7:00am">7:00am</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option80" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon" />
                              <span class="slds-media__body">
                                <span class="slds-truncate" title="8:00am">8:00am</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option81" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon" />
                              <span class="slds-media__body">
                                <span class="slds-truncate" title="9:00am">9:00am</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option82" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon" />
                              <span class="slds-media__body">
                                <span class="slds-truncate" title="10:00am">10:00am</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option83" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon" />
                              <span class="slds-media__body">
                                <span class="slds-truncate" title="11:00am">11:00am</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option84" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon" />
                              <span class="slds-media__body">
                                <span class="slds-truncate" title="12:00pm">12:00pm</span>
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
        </div>
      </fieldset>
    </div>
  </div>
</template>
