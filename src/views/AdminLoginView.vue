<script setup>
import AdminHeader from '../components/AdminHeader.vue';
import AppBackground from '../components/AppBackground.vue'
</script>

<template>
  <AdminHeader />
  <div class="container cnt d-flex justify-content-center align-items-center" style="height: 100vh">
    <AppBackground />
    <div class="c">
      <div class="container-form">
        <form style="border-top-right-radius: 0%; border-bottom-right-radius: 0%">
          <label for="iCoorId">Coordinator Id</label>
          <input type="text" id="stId" placeholder="Enter your coordinator id" autofocus="" />

          <label for="password" class="mt-2">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <button id="button2" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
