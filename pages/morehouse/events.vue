<script setup>
const events = ref([
  {
    day: 'Thu 5/8',
    time: 'TBD',
    description: 'The Party',
    location: 'Kilgore Center, 830 Westview Dr, Atlanta, GA 30314',
  },
])
</script>

<template>
  <main class="main">
    <article class="article">
      <h2 class="article__headline">
        Events
      </h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Event</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.time">
            <td>{{ event.day }}</td>
            <td>{{ event.time }}</td>
            <td>{{ event.description }}</td>
            <td>{{ event.location }}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </main>
</template>
