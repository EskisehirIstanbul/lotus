<script>
import AdminHeader from '../../../components/AdminHeader.vue'
import useAdminStore from '../../../stores/admin.store'
import { useRouter } from 'vue-router'

export default {
  components: { AdminHeader },
  setup() {
    const adminStore = useAdminStore()
    const router = useRouter()

    if (!adminStore.isAdminLoggedIn) {
      router.push({ name: 'LoginNavigation' })
    }

    function logout() {
      adminStore.logoutAdmin()
      router.push({ name: 'LoginNavigation' })
    }

    return {
      logout
    }
  }
}
</script>

<template>
  <AdminHeader logout="logout" />
  <div class="container cnt d-flex justify-content-center align-items-center" style="height: 100vh">
    <RouterView />
  </div>
</template>

