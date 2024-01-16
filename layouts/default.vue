<template>
  <div class="flex flex-col min-h-screen">
    <header class="pt-4 px-10 pb-0 flex justify-center" />

    <main class="px-8 flex-1">
      <slot />
    </main>

    <footer class="p-8 flex justify-between">
      <NuxtLink to="/">
        <TheLogo />
      </NuxtLink>
      <UColorModeButton />
    </footer>
  </div>
</template>
