<script setup>
import { onMounted, ref } from 'vue'
import Card from '../components/Card.vue'
import axios from 'axios'

const query = ref([])

const getData = async () => {
  try {
    console.log('Fetching json...')

    const res = await axios.get('/data/porto.json')

    console.log('Status:', res.status)
    console.log('Data:', res.data)

    query.value = res.data
  } catch (err) {
    console.error('Axios Error:', err)
  }
  // axios
  //   .get('/data/porto.json')
  //   .then((res) => {
  //     query.value = res.data
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
}

onMounted(() => {
  getData()
})
</script>

<template>
  <!-- make project component -->
  <div class="container" id="project">
    <div class="col-md-6 mx-auto">
      <h1 class="text-center fw-bold fs-1 mt-5">My Projects</h1>

      <Card v-for="data in query" :key="data.id" class="my-5">
        <div class="row">
          <div class="col-md-5 align-self-center">
            <img class="img-fluid rounded-4" :src="data.image" alt="" />
          </div>
          <div class="col-md-7 align-self-center mt-3 mt-lg-0">
            <h3 class="fw-bold fs-3">{{ data.title }}</h3>
            <p>
              {{ data.description }}
            </p>
            <a :href="data.link_demo" class="btn btn-sm">Visit Demo</a>
            <a :href="data.link_github" class="ms-1 btn btn-sm">Source Code</a>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
#project {
  margin-top: 100px;
  min-height: 100vh;
}

.btn-secondary {
  background-color: rgb(230, 230, 230);
  color: black;
}

.btn-primary {
  background-color: rgb(58, 151, 250);
}

.btn {
  background-color: #2563eb;
  color: white;
}

.ms-1 {
  background-color: white;
  color: #2563eb;
  border: 2px solid #2563eb;
}
</style>
