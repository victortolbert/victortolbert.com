<script>
export default {
  props: ['budgets', 'selectBudget'],
}
</script>

<template>
  <div class="budgets container">
    <h5>Select A Budget</h5>
    <div v-for="budget in budgets" :key="`budget-${budget.name}`" class="row">
      <a class="col" href="#" @click="selectBudget(budget.id, $event)">
        {{ budget.name }}
      </a>
    </div>
  </div>
</template>
