<script setup>
// const client = useSupabaseClient()

// console.log(client?.auth)

// const { data: countries } = await useAsyncData('countries', async () => {
//   const { data } = await client.from('countries').select()

//   return data
// })

const data = ref('')
</script>

<template>
  <div>{{ data }}</div>
</template>
