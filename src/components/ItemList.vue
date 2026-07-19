<script setup>
const props = defineProps({
  data: Array,
})
</script>

<template>
  <ul class="d-flex flex-wrap gap-2">
    <li v-for="item in data">{{ item }}</li>
  </ul>
</template>

<style scoped>
ul li {
  font-size: 15px;
  padding: 5px 20px;
  background-color: whitesmoke;
  color: black;
  list-style: none;
  border: 50px;
  font-weight: bold;
}
</style>
