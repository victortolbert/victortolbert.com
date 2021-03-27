<!-- @vue-ignore -->
<script lang="ts">
  // import {groupByAlphabet} from '~/helpers'
  export default {
    props: {
      people: {
        type: Array,
        default() {
          return [
            { id: 1, firstName: 'Victor', lastName: 'Tolbert', title: 'Volunteer' },
            { id: 2, firstName: 'Reginald', lastName: 'Tolbert', title: 'Volunteer' },
            { id: 3, firstName: 'Victor', lastName: 'Rodriquez', title: 'Volunteer' },
            { id: 4, firstName: 'Ron', lastName: 'Johnson', title: 'Volunteer' },
          ]
        }
      }
    },
    computed: {
      peopleSortedByLastName() {
        return [...this.people].sort((a, b)  => {
            // then check their last names
            if (a.lastName < b.lastName ) return -1
            if (a.lastName > b.lastName ) return 1
            // then check their first names
            if (a.firstName < b.firstName ) return -1
            if (a.firstName > b.firstName ) return 1
            return 0;
          }
        )
      },
      peopleGroupedByLetter() {
        return this.peopleSortedByLastName.reduce((result, person) => {
          let alphabet = person.lastName[0]

          // if there is no property in the accumulator with this letter, create it
          if (!result[alphabet]) result[alphabet] = { alphabet, people: [person] }

          // ...if there is, push current element to children array for that letter
          else result[alphabet].people.push(person);

          // return accumulator
          return result
        }, {});
      }
    },
  }
</script>
<template>
  <nav class="relative h-full overflow-y-auto" aria-label="Directory">
    <div v-for="(group, key) in peopleGroupedByLetter">
      <div
        class="sticky top-0 z-10 px-6 py-1 text-sm font-medium text-gray-500 border-t border-b border-gray-200 bg-gray-50"
      >
        <h3>{{key}}</h3>
      </div>

      <DirectoryListItem v-for="person in group.people" :person="person" :key="person.id"/>
    </div>
  </nav>
</template>
