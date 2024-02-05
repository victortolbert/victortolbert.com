<template>
  <div class="slds-grid slds-wrap">
    <nav v-if="$slots.header" class="slds-col slds-size_1-of-1">
      <slot name="header">
        Header
      </slot>
    </nav>

    <main class="slds-col" :class="$slots.aside ? 'slds-size_1-of-2' : 'slds-size_1-of-1'">
      <slot />
    </main>

    <aside v-if="$slots.aside" class="slds-col slds-size_1-of-2">
      <slot name="aside">
        Aside
      </slot>
    </aside>

    <section v-if="$slots.section" class="slds-col slds-size_1-of-1">
      <slot name="section">
        Section
      </slot>
    </section>
  </div>
</template>
