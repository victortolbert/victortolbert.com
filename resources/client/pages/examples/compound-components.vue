<template>
  <div id="app">
    <ExampleTabs initial-active-tab="profile">
      <div :class="$style.section">
        <ExampleTab id="home">Home</ExampleTab>
        <ExampleTab id="profile">Profile</ExampleTab>
        <ExampleTab id="settings">Settings</ExampleTab>
      </div>
      <div :class="$style.section">
        <ExampleTabPanel id="home">Home content</ExampleTabPanel>
        <ExampleTabPanel id="profile">Profile content</ExampleTabPanel>
        <ExampleTabPanel id="settings">Settings content</ExampleTabPanel>
      </div>
    </ExampleTabs>
  </div>
</template>

<style module>
.section {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>
