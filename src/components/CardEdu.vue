<script setup>
const props = defineProps({
  year: Number,
  univ: String,
  description: String,
  yearColor: String,
})
</script>

<template>
  <div class="row px-3 py-2">
    <div class="col-md-8 p-2">
      <p id="year" :style="{ color: props.yearColor ?? '#2563eb' }">
        {{ props.year }}
      </p>
      <p id="univ">{{ props.univ }}</p>
      <p id="description" class="text-secondary">
        <i>{{ props.description }}</i>
      </p>
    </div>
  </div>
</template>

<style scoped>
.col-md-8 {
  height: 80px;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
}

.col-md-8 p {
  margin: 1px 0px;
}

.col-md-8 #year {
  font-weight: bold;
}

.col-md-8 #description {
  font-size: 13px;
}
</style>
