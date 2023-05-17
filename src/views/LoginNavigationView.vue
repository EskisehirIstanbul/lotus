<script setup>
import AppBackground from '../components/AppBackground.vue'
</script>

<template>
  <AppBackground />
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-6 text-center">
        <img
          src="../assets/images/uskudar-universitesi-logo.png"
          alt="Logo"
          class="img-fluid mb-3"
          style="width: 14rem; height: 14rem"
        />
        <div class="entText text-uppercase mb-4 fw-bolder">Internshıp Applıcatıon System</div>

        <RouterLink
          to="/student-login"
          class="btn btn-link text-reset text-decoration-none btn-md d-block mb-3 entBtnText"
          >Student</RouterLink
        >
        <RouterLink
          to="/coordinator-login"
          class="btn btn-link text-reset text-decoration-none btn-md d-block mb-3 entBtnText"
          >Internship Coordinator</RouterLink
        >

        <RouterLink
          to="/staff-login"
          class="btn btn-link text-reset text-decoration-none btn-md d-block mb-3 entBtnText"
          >Career Center Staff</RouterLink
        >
      </div>
    </div>
  </div>
</template>
