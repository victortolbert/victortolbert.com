<script setup lang="ts">
type Link = { name: string, link: string }

const list = useState<Link[]>('random-links', () => generateRandomLinks())

// list.value = generateRandomLinks()

function generateRandomLinks() {
  const links: Link[] = []

  for (let i = 0; i < 10; i++) {
    const link = generateRandomLink()

    links.push({
      name: `Link ${i}`,
      link: `https://example.com/${i}`,
    })
  }

  return links
}

function generateRandomLink() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const length = 10
  let link = ''

  for (let i = 0; i < length; i++)
    link += chars[Math.floor(Math.random() * chars.length)]

  return link
}
</script>

<template>
  <div>
    {{ generateRandomLink() }}
  </div>
</template>
