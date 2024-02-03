<template>
  <div class="flex items-start justify-between">
    <div class="items-end w-full sm:flex">
      <div>
        <PlantCategorySwitch />
      </div>

      <div class="mt-4 sm:mt-0 sm:ml-4">
        <PlantToxicitySelect />
      </div>
    </div>
    <ViewSwitcher />
  </div>
</template>
