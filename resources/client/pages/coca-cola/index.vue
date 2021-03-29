<!-- @vue-ignore -->
<script lang="ts">
import { computed, reactive, toRefs, defineComponent, } from 'vue'

// POST /api/mappings/${slot}/${ingredientId}
// DELETE /api/mappings/${slot}

export default defineComponent({
  data() {
    return {
      selectedBeverage: null,
      slottedIngredientCartridges: [],
      ingredientCartridges: [
        {id: 100, name: 'Coke Part 1'},
        {id: 101, name: 'Coke Part 2'},
        {id: 102, name: 'Diet Coke Part 1'},
        {id: 103, name: 'Diet Coke Part 2'},
        {id: 104, name: 'Fanta'},
        {id: 105, name: 'Sprite'},
        {id: 106, name: 'Powerade'},
        {id: 107, name: 'Lemon'},
      ],
      slots: {
        s1: {
          item: null
        },
        s2: {
          item: null
        },
        s3: {
          item: null
        },
        s4: {
          item: null
        },
        s5: {
          item: null
        },
        s6: {
          item: null
        },
        s7: {
          item: null
        },
        s8: {
          item: null
        },
        s9: {
          item: null
        },
        s10: {
          item: null
        }
      },
    }
  },
  computed: {
    availableIngredientCartridges() {
      return this.ingredientCartridges
        .filter(ingredient => !this.slottedIngredientCartridges.includes(ingredient.id))
    }
  },
  mounted() {
      this.$ray().clearAll()
  },
  methods: {
    addItem() {
      this.ingredientCartridges.push({ id: 999, name: 'foo'})
    },
    select(beverage) {
      this.selectedBeverage = beverage
    },
    assign(slot) {
      this.slots[slot].item = this.selectedBeverage
      this.slottedIngredientCartridges.push(this.selectedBeverage.id)
      this.selectedBeverage = null
    },
    removeAssignment(slot, id) {
      this.$ray(id)
      const index = this.slottedIngredientCartridges.indexOf(id)
      this.slottedIngredientCartridges.splice(index, 1)
      this.slots[slot].item = null
    },
  }
})
</script>
<template>
  <PageWrapper class="mx-auto max-w-7xl p-8">
    <SectionWrapper ref="testing" class="grid grid-cols-2 gap-8">
      <div>
        <div class="grid grid-cols-2 gap-4">
          <button
            v-for="item in availableIngredientCartridges"
            :key="item.id"
            @click="select(item)"
            class="flex items-center justify-center text-white transition-colors duration-200 transform bg-gray-500 rounded-full shadow active:ring-blue-500 w-24 h-24 text-sm hover:scale-105 ring-2 ring-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-offset-4 focus:ring-offset-white focus:ring-gray-900 focus:outline-none"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
      <div>
        <ul class="flex flex-col space-y-4">
          <li
            v-for="(ingredient, slot) in slots"
            :key="slot"
            class="flex items-center justify-between p-8 bg-gray-100 rounded shadow"
          >
            <span class="flex items-center space-x-2">
              <span>{{ slot }}</span>
              <span v-if="!ingredient.item">Unassigned</span>
            </span>

            <span class="flex items-center space-x-2" v-if="ingredient.item">
              <span>{{ ingredient.item.name }}</span>
              <button class="rounded-full w-4 h-4 p-4 border shadow flex items-center justify-center" @click="removeAssignment(slot, ingredient.item.id)">&times;</button>
            </span>
            <OButton v-else="ingredient.item" :disabled="!selectedBeverage" @click="assign(slot)">
              Assign
            </OButton>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  </PageWrapper>
</template>
