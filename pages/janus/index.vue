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
  <article class="slds-grid mt-[58px]">
    <div class="slds-col slds-size_2-of-3">
      <SldsCard>sdf</SldsCard>

      <SldsCard class="slds-p-around_medium">
        <!-- <SldsTextHeading /> -->
        <!-- <SldsTextBody /> -->
        <!-- <SldsActivityTimeline /> -->
      </SldsCard>
    </div>

    <div class="slds-p-left_small slds-col slds-size_1-of-3">
      <SldsCard>
        <SldsTextHeading>
          Examples of interactions
        </SldsTextHeading>

        <SldsTextBody>
          A few components are interactive, thanks to the JavaScript bundled in the starter kit.
        </SldsTextBody>

        <SldsSection>
          <SldsSectionTitle>
            <span
              class="slds-truncate slds-p-horizontal_small"
              title="Section Title"
            >Tabs</span>
          </SldsSectionTitle>
          <SldsSectionContent />
        </SldsSection>

        <SldsSection>
          <SldsSectionTitle>
            <span
              class="slds-truncate slds-p-horizontal_small"
              title="Section Title"
            >Dropdown Menu</span>
          </SldsSectionTitle>

          <SldsSectionContent>
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
          </SldsSectionContent>
        </SldsSection>
      </SldsCard>
    </div>
  </article>
</template>
