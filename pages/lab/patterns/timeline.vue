<script setup lang="ts">
const entries = [
  { year: 1964, event: 'Born.' },
  { year: 1986, event: 'Graduates from Princeton.' },
  { year: 1990, event: 'Youngest vice-president at Bankers Trust.' },
  { year: 1992, event: 'Senior vice-president at D.E. Shaw & Co.' },
  { year: 1995, event: 'Amazon.com opens for business.' },
  { year: 1998, event: 'Net sales of $252.9 million, an increase of 383% over the same period in 1997.' },
  { year: 1998, event: 'Net sales of $252.9 million, an increase of 383% over the same period in 1997.' },
  { date: '2004-09-16', event: 'Chicago' },
  { date: '2004-06-16 03:06 PM', event: 'Received invite to join Gmail from Kassim Kasmani <kassimk@gmail.com>' },
  { date: '2004-06-16 03:06 PM', event: 'Started Gmail account, victor.tolbert@gmail.com' },
  { date: '2004-06-30 03:06 PM', event: 'Essence Festival' },
  { date: '2004', event: 'WebMD' },
]
// Ryan Evans, Jenn Wood, Neville, Tom Owens
</script>

<template>
  <table class="text-xs font-mono">
    <tr>
      <td>1964</td>
      <td>Born.</td>
    </tr>
    <tr>
      <td>1986</td>
      <td>Graduates from Princeton.</td>
    </tr>
    <tr>
      <td>1990</td>
      <td>Youngest vice-president at Bankers Trust.</td>
    </tr>
    <tr>
      <td>1992</td>
      <td>Senior vice-president at D.E. Shaw &amp; Co.</td>
    </tr>
    <tr>
      <td>1995</td>
      <td>Amazon.com opens for business.</td>
    </tr>
    <tr>
      <td>1998</td>
      <td>Net sales of $252.9 million, an increase of 383% over the same period in 1997.</td>
    </tr>
  </table>
</template>

<style scoped>
table {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-collapse: collapse;
  width: 300px;
}

td {
  padding: 0.25rem 0.5rem;
  vertical-align: top;
}

tr:nth-child(odd) {
  background-color: rgba(157, 25, 0, 0.2);
}

td:first-child {
  font-weight: 700;
  background-color: #fff;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
}
</style>
