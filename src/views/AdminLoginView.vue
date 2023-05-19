<script setup>
import { ref } from 'vue'
import AdminHeader from '../components/AdminHeader.vue'
import AppBackground from '../components/AppBackground.vue'

const adminId = ref('')
const password = ref('')

function submit() {
  if (adminId.value === '' || password.value === '') {
    alert('Please fill all the fields')
  } else {
    const data = {
      adminId: adminId.value,
      password: password.value
    }
    console.log(data)
    adminId.value = ''
    password.value = ''
  }
}
</script>

<template>
  <AdminHeader />
  <div class="container cnt d-flex justify-content-center align-items-center" style="height: 100vh">
    <AppBackground />
    <div class="c">
      <div class="container-form">
        <form
          style="border-top-right-radius: 0%; border-bottom-right-radius: 0%"
          @submit.prevent="submit"
        >
          <label for="iCoorId">Admin Id</label>
          <input
            type="text"
            id="stId"
            placeholder="Enter your id"
            autofocus
            required
            v-model="adminId"
          />

          <label for="password" class="mt-2">Password</label>
          <input
            required
            type="password"
            id="password"
            placeholder="Enter your password"
            v-model="password"
          />

          <button id="button2" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
