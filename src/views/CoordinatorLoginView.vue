<script setup>
import { ref } from 'vue'
import AppBackground from '../components/AppBackground.vue'

const coordinatorId = ref('')
const password = ref('')

function submit() {
  if (coordinatorId.value === '' || password.value === '') {
    alert('Please fill all the fields')
  } else {
    const data = {
      coordinatorId: coordinatorId.value,
      password: password.value
    }
    console.log(data)
    coordinatorId.value = ''
    password.value = ''
  }
}
</script>

<template>
  <AppBackground />
  <div class="container cnt d-flex justify-content-center align-items-center" style="height: 100vh">
    <div class="c">
      <div class="container-label text-center">
        <div>
          <img
            src="../assets/images/uskudar-universitesi-logo.png"
            alt="Logo"
            class="img-fluid"
            style="width: 10rem; height: 10rem"
          />
        </div>
        <br />Coordinator Login
      </div>

      <div class="container-form">
        <form @submit.prevent="submit">
          <label for="iCoorId">Coordinator Id</label>
          <input
            type="text"
            id="stId"
            placeholder="Enter your coordinator id"
            autofocus
            required
            v-model="coordinatorId"
          />

          <label for="password" class="mt-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            v-model="password"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
