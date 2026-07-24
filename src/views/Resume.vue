<script setup>
import { ref } from 'vue'
import Card from '@/components/Card.vue'
import ItemList from '@/components/ItemList.vue'
import CardItem from '@/components/CardItem.vue'
import CardEdu from '@/components/CardEdu.vue'

const skill = ref([
  'HTML',
  'CSS',
  'JavaScript',
  'Vue',
  'SQL',
  'PHP',
  'Laravel',
  'Python',
  'Tableau',
  'PowerBI',
  'Spreadsheets',
  'Excel',
  'Word',
])

const experience = ref([
  {
    year: 'November 2025',
    job: 'Frontend Web Developer',
    location: 'Kota Depok, Jawa Barat',
    description:
      'Program Project-Based Virtual Intern sebagai Frontend Developer di Core Initiative dilaksanakan secara remote/WFH mulai 6 Oktober hingga 4 November 2025. Program ini diselenggarakan oleh Rakamin Academy x Core Initiative. Dalam program ini saya membantu mengembangkan antarmuka website ecommerce-catalog dengan menggunakan Vue dan Javascript.',
    link: 'https://ecommerce-catalog7104.vercel.app',
  },
  {
    year: 'September - Oktober 2025',
    job: 'Data Analyst',
    location: 'Kota Banjarbaru, Kalimantan Selatan',
    description:
      'Melaksanakan Kerja Praktik di Dinas Pemberdayaan Perempuan, Perlindungan Anak, Pemberdayaan Masyarakat, Pengendalian Penduduk dan Keluarga Berencana (DP3APMP2KB) Kota Banjarbaru. Disana saya mendapat tanggung jawab dalam melakukan pengolahan/analisis data kekerasan terhadap perempuan dan anak meliputi data entry, data preprocessing, membuat dashboard visualisasi data dan membantu pekerjaan administratif lainnya.',
    link: 'https://public.tableau.com/app/profile/maulana.ansari/viz/DashboardKASUSNew/DashboardFiNAL',
  },
])

const education = ref([
  {
    year: 'Juli 2022 - Juni 2026',
    univ: 'Universitas Lambung Mangkurat',
    description: ' S1-ILMU KOMPUTER (Fresh Graduate)',
  },
])
</script>

<template>
  <div class="container" id="resume">
    <div class="col-md-6 mx-auto">
      <h1 class="text-center fw-bold fs-1">
        <!-- <i class="bi bi-file-earmark-person-fill me-2"></i> -->Resume
      </h1>

      <h2 class="fw-bold mt-5"><i class="bi bi-mortarboard-fill me-2"></i>Education</h2>
      <Card v-for="data in education" class="mt-3">
        <CardEdu :year="data.year" :univ="data.univ" :description="data.description" />
      </Card>

      <h2 class="fw-bold mt-5"><i class="bi bi-code-slash me-2"></i>Skills</h2>
      <Card>
        <ItemList :data="skill" />
      </Card>

      <h2 class="fw-bold mt-5"><i class="bi bi-briefcase-fill me-2"></i>Experiences</h2>
      <Card v-for="data in experience" class="mt-3">
        <CardItem
          :year="data.year"
          :job="data.job"
          :location="data.location"
          :description="data.description"
        />
        <a :href="data.link" class="ms-1 btn btn-primary btn-sm">See My Work</a>
      </Card>
    </div>
  </div>
</template>

<style scoped>
#resume {
  margin-top: 100px;
  min-height: 100vh;
}
</style>
