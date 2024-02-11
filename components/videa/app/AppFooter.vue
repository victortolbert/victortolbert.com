<script setup lang="ts">
const fontSize = ref(16)
const baseStyles = ref({
  fontWeight: 800,
  color: 'red',
})

const overrideStyles = ref({
  fontWeight: 400,
  color: 'white',
})

function toggleDebug() {
  document.documentElement.classList.toggle('debug')
}
</script>

<template>
  <footer class="vui-site-footer" role="contentinfo">
    <div class="vui-container">
      <nav class="vui-navigation--footer vui-grid vui-grid--align-center">
        <ul class="vui-list--horizontal vui-has-dividers--right">
          <li class="vui-list__item">
            <NuxtLink to="/videa/privacy">
              Privacy Policy
            </NuxtLink>
          </li>
          <li class="vui-list__item">
            <NuxtLink to="/videa/terms">
              Terms &amp; Conditions
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <p :style="[baseStyles, overrideStyles]">
        3390 Peachtree Road, NE, Suite 400 Atlanta, GA 30326 <br>
        Copyright © 2014&ndash;{{ new Date().getFullYear() }} Videa. All rights reserved.
      </p>
    </div>
  </footer>
</template>
