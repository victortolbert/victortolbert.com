<template>
  <ul class="divide-y divide-gray-200" x-max="1">
    <NotificationListItem
      v-for="notification in $store.state.notifications"
      :key="notification.id"
      :notification="notification"
    />
  </ul>
</template>
