<script setup>
useHead({
  title: 'Dynamic Forms',
  meta: [
    {
      name: 'description',
      content: 'Dynamic Forms',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: '/app.css',
    },
  ],
})
</script>

<template>
  <div id="app" class="mx-auto py-6 container">
    <header>
      <div>
        <span id="logo">Liquid Gold Box</span>
      </div>
    </header>

    <div class="content">
      <FormWizard />
    </div>
  </div>
</template>
