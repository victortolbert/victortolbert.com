<script setup>
definePageMeta({
  title: 'Salesforce',
  description: 'The Salesforce Lightning Design System (SLDS) is a UI framework for building high-performance applications on the Salesforce platform.',
  breadcrumb: {
    title: 'Salesforce',
    ariaLabel: 'Salesforce',
    hideCurrent: true,
  },
})
</script>

<template>
  <article class="slds-scope font-salesforce">
    <SldsPageHeader
      title="Salesforce Lightning Design System"
      description="The Salesforce Lightning Design System (SLDS) is a UI framework for building high-performance applications on the Salesforce platform."
    />

    <!--  -->
    <div class="slds-grid">
      <!--
    First column
  -->
      <div class="slds-col slds-size_2-of-3">
        <div class="slds-p-around_medium slds-card">
          <h2 class="slds-text-heading_medium">
            Example of injected data
          </h2>
          <p class="slds-text-body_regular slds-m-vertical_medium">
            Data shown in this table comes from
            <a
              href="https://github.com/salesforce-ux/design-system-starter-kit/blob/master/src/views/data/example.json"
            ><code>views/data/example.json</code></a>.
          </p>

          <!--
        Data table component
        https://www.lightningdesignsystem.com/components/data-tables/

        Modifier:
        - fixed layout: slds-table_fixed-layout (to make text truncation work within cells)
      -->
        </div>
      </div>

      <!--
    Second column
  -->
      <div class="slds-p-left_small slds-col slds-size_1-of-3">
        <div class="slds-card slds-p-around_medium slds-m-top_none">
          <h2 class="slds-text-heading_medium">
            Examples of interactions
          </h2>
          <p class="slds-text-body_regular slds-m-vertical_medium">
            A few components are interactive, thanks to the JavaScript bundled in
            the starter kit.
          </p>
          <div class="slds-section slds-is-open">
            <h3 class="slds-section__title slds-theme_shade slds-m-bottom_medium">
              <span
                class="slds-truncate slds-p-horizontal_small"
                title="Section Title"
              >Tabs</span>
            </h3>
            <div aria-hidden="false" class="slds-section__content">
              <!--
            Tabs component
            https://www.lightningdesignsystem.com/components/tabs/
          -->
              <div class="slds-tabs_default">
                <ul class="slds-tabs_default__nav" role="tablist">
                  <li
                    class="slds-tabs_default__item slds-active"
                    title="Item One"
                    role="presentation"
                  >
                    <a
                      id="tab-default-1__item"
                      class="slds-tabs_default__link"
                      href="javascript:void(0);"
                      role="tab"
                      tabindex="0"
                      aria-selected="true"
                      aria-controls="tab-default-1"
                    >Item One</a>
                  </li>
                  <li
                    class="slds-tabs_default__item slds-text"
                    title="Item Two"
                    role="presentation"
                  >
                    <a
                      id="tab-default-2__item"
                      class="slds-tabs_default__link"
                      href="javascript:void(0);"
                      role="tab"
                      tabindex="-1"
                      aria-selected="false"
                      aria-controls="tab-default-2"
                    >Item Two</a>
                  </li>
                  <li
                    class="slds-tabs_default__item slds-text"
                    title="Item Three"
                    role="presentation"
                  >
                    <a
                      id="tab-default-3__item"
                      class="slds-tabs_default__link"
                      href="javascript:void(0);"
                      role="tab"
                      tabindex="-1"
                      aria-selected="false"
                      aria-controls="tab-default-3"
                    >Item Three</a>
                  </li>
                </ul>
                <div
                  id="tab-default-1"
                  class="slds-tabs_default__content slds-show"
                  role="tabpanel"
                  aria-labelledby="tab-default-1__item"
                >
                  Item One Content
                </div>
                <div
                  id="tab-default-2"
                  class="slds-tabs_default__content slds-hide"
                  role="tabpanel"
                  aria-labelledby="tab-default-2__item"
                >
                  Item Two Content
                </div>
                <div
                  id="tab-default-3"
                  class="slds-tabs_default__content slds-hide"
                  role="tabpanel"
                  aria-labelledby="tab-default-3__item"
                >
                  Item Three Content
                </div>
              </div>
            </div>
          </div>

          <div class="slds-section slds-is-open">
            <h3 class="slds-section__title slds-theme_shade slds-m-bottom_medium">
              <span
                class="slds-truncate slds-p-horizontal_small"
                title="Section Title"
              >Dropdown Menu</span>
            </h3>
            <div aria-hidden="false" class="slds-section__content">
              Click me:
              <!--
            Dropdown Menu Component
            https://www.lightningdesignsystem.com/components/menus/
          -->
              <div
                class="slds-dropdown-trigger slds-dropdown-trigger_click"
                aria-expanded="true"
              >
                <button
                  class="slds-button slds-button_icon-border-filled"
                  aria-haspopup="true"
                >
                  <svg aria-hidden="true" class="slds-button__icon">
                    <use
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
                    />
                  </svg>
                  <span class="slds-assistive-text">Show More</span>
                </button>
                <div class="slds-dropdown slds-dropdown_left">
                  <ul class="dropdown__list" role="menu">
                    <li class="slds-dropdown__item">
                      <a href="javascript:void(0);" role="menuitem">
                        <p class="slds-truncate">Menu Item One</p>
                      </a>
                    </li>
                    <li class="slds-dropdown__item">
                      <a href="javascript:void(0);" role="menuitem">
                        <p class="slds-truncate">Menu Item Two</p>
                      </a>
                    </li>
                    <li class="slds-dropdown__item">
                      <a href="javascript:void(0);" role="menuitem">
                        <p class="slds-truncate">Menu Item Three</p>
                      </a>
                    </li>
                    <li class="slds-dropdown__item slds-has-divider_top-space">
                      <a href="javascript:void(0);" role="menuitem">
                        <p class="slds-truncate">Menu Item Four</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
