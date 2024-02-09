<script>
export default {
  data: () => ({
    user: 'Alice',
  }),
}
</script>

<template>
  <div class="p-12 prose">
    <p>Hi, my name is {{ user }}</p>

    <label class="block" for="username">
      <span class="text-gray-700">Username</span>
      <input id="username" v-model="user" class="form-input mt-1 block w-full" name="username">
    </label>
  </div>
</template>
