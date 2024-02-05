<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

async function fetcher() {
  return await fetch('https://api.victortolbert.com/airports').then(response =>
    response.json(),
  )
}

const { data, suspense } = useQuery({ queryKey: ['test'], queryFn: fetcher })

await suspense()
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Abbreviation</th>
        <th>Name</th>
        <th>City</th>
        <th>Passenger Destination</th>
        <th>Cargo Destination</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td class="text-center">
          {{ row.abbreviation }}
        </td>
        <td>{{ row.name }}</td>
        <td>{{ row.city }}, {{ row.state }}</td>
        <td>
          <UBadge
            v-for="passenger in row.destinations.passenger"
            :key="`passenger-${row.id}-${passenger}`"
            color="white"
            variant="solid"
          >
            {{ passenger }}
          </UBadge>
        </td>
        <td>
          <UBadge
            v-for="cargo in row.destinations.cargo"
            :key="`cargo-${row.id}-${cargo}`"
            color="white"
            variant="solid"
          >
            {{ cargo }}
          </UBadge>
        </td>
      </tr>
    </tbody>
  </table>
</template>
