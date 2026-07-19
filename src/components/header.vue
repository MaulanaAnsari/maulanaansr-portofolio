<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg text-uppercase">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Maulana Ansari</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link px-lg-4 rounded">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/resume" class="nav-link px-lg-4 rounded">Resume</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/project" class="nav-link px-lg-4 rounded">Project</RouterLink>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link">Contact</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
navbar {
  background-color: black;
}

.nav-link {
  color: black;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}

.nav-link:hover {
  color: white;
  background-color: black;
}
</style>
