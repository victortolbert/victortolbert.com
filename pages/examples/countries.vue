<script setup>
const client = useSupabaseClient()
console.log(client?.auth)

const { data: countries } = await useAsyncData('countries', async () => {
  const { data } = await client.from('countries').select()

  return data
})
</script>

<template>
  <div>{{ data }}</div>
</template>
