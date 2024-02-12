<template>
  <div class="vui-container vui-grid vui-grid--align-spread vui-grid--vertical-align-center">
    <ul class="vui-grid vui-grow">
      <li>
        <NuxtLink to="/videa/buyers/avails" exact="exact">
          Avails
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/videa/buyers/avails/request" exact="exact">
          Request Avails
        </NuxtLink>
      </li>
    </ul>
    <ul class="actions vui-align-middle">
      <li>
        <NuxtLink
          class="vui-button vui-button--brand"
          :to="{
            name: 'settings-user',
          }"
          style="color: white !important; white-space: nowrap"
          tag="button"
        >
          <vui-icon
            class="vui-m-right--x-small"
            name="cog"
          />
          <span>Settings</span>
          <span class="vui-assistive-text">Settings</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
