<script setup>
import { ref } from 'vue'
import AppBackground from '../components/AppBackground.vue'

const staffId = ref('')
const password = ref('')

function submit() {
  if (staffId.value === '' || password.value === '') {
    alert('Please fill all the fields')
  } else {
    const data = {
      staffId: staffId.value,
      password: password.value
    }
    console.log(data)
    staffId.value = ''
    password.value = ''
  }
}
</script>

<template>
  <div class="container cnt d-flex justify-content-center align-items-center" style="height: 100vh">
    <AppBackground />

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
        <br />Career Center Staff Login
      </div>

      <div class="container-form">
        <form @submit.prevent="submit">
          <label for="staffId">Staff Id</label>
          <input
            type="text"
            id="stId"
            placeholder="Enter your staff id"
            autofocus
            required
            v-model="staffId"
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
