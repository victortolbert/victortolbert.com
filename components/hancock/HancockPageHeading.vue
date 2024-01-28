<script setup>
// const open = ref(false)
// const activeIndex = ref(0)
// const selectedIndex = ref(0)

const slots = useSlots()

// const state = ref({
//   modelName: 'selected',
//   items: [
//     {
//       name: 'Published',
//       description: 'This job posting can be viewed by anyone who has the link.',
//       current: true
//     },
//     {
//       name: 'Draft',
//       description: 'This job posting will no longer be publicly accessible.',
//       current: false
//     }
//   ],
// })

// const hasEylidSlot = computed(() => !!slots.eyelid)

const hasBylineSlot = computed(() => !!slots.byline)
const hasActionsSlot = computed(() => !!slots.actions)

// function focusButton() { }
// function onOptionSelect() { }
// function onButtonClick() { }
// function onEscape() { }
// function onArrowUp() { }
// function onArrowDown() { }
// function choose() { }
</script>

<template>
  <header class="py-8 shadow-lg bg-primary-50 dark:text-primary-300 dark:bg-primary-800">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
      <div class="flex-1 min-w-0">
        <slot name="eyelid" />
        <h1 class="mt-2 text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
          <slot />
        </h1>
        <div
          v-if="hasBylineSlot"
          class="flex flex-col mt-1 sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-8"
        >
          <slot name="byline" />
        </div>
      </div>
      <div v-if="hasActionsSlot" class="flex mt-5 xl:mt-0 xl:ml-4">
        <slot name="actions" />
      </div>
    </div>
  </header>
</template>
