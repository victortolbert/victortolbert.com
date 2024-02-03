<template>
  <UCommandPalette
    command-attribute="title"
    :fuse="{
      fuseOptions: {
        ignoreLocation: true,
        includeMatches: true,
        threshold: 0,
        keys: ['title', 'description', 'children.children.value', 'children.children.children.value'],
      },
      resultLimit: 10,
    }"
  />
</template>
