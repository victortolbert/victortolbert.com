<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
  },
})

defineEmits(['menuSelected'])

const menuActive = ref(false)
const show = ref(false)
const nubbinLeft = ref(false)
const nubbinRight = ref(false)
const nubbinTop = ref(true)

function click() {
  show.value = true
}

function away(event) {
  show.value = false
  // console.log('clicked away', event.target )
}

function hideDropdown(options) {
  show.value = false
}

function slugify(str) {
  return str.toLowerCase().split(' ').join('-')
}

function closeDropdown() {
  show.value = false
}

function toggle(e) {
  show.value = !show.value
}

function select(item) {
  emit('menuSelected')

  show.value = false
  // this.menuActive = true

  router.push({
    name: item.route,
    activeClass: 'v-link-active',
    exact: true,
  })
}
</script>

<template>
  <div
    class="vui-dropdown-trigger vui-dropdown-trigger--site-nav vui-dropdown-trigger--click dropdown"
    :aria-expanded="show"
    :class="{ 'vui-is-open': show }"
  >
    <!-- v-on-clickaway="away" -->
    <a
      :aria-expanded="show"
      :class="menuActive ? 'v-link-active' : ''"
      :disabled="disabled"
      aria-haspopup="true"
      aria-live="assertive"
      style="margin-right: 0"
      @click.prevent="click"
    >
      <span class="vui-m-right--xx-small" style="color: white">{{ text }}</span>
      <VuiIcon name="caret-down" style="color: #4296b4; margin-right: 0" />
    </a>
    <div class="vui-dropdown vui-dropdown--site-nav">
      <ul class="dropdown-menu dropdown__list vui-dropdown__list" role="menu">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="dropdown-item vui-dropdown__item"
        >
          <a role="menuitem" @click.prevent="select(item)">
            <p class="vui-truncate">{{ item.name }}</p></a>
        </li>
      </ul>
    </div>
  </div>
</template>
