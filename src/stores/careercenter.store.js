import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCareerCenterById } from '../api/careerCenter.api'
// loginCoordinator ,getCoordinatorById
export default defineStore('careerCenter', () => {
  const staff = ref(null)

  const setCareerCenter = async (username, password) => {
    password
    try {
      staff.value = await getCareerCenterById(username)
      console.log(staff.value)
    } catch (error) {
      staff.value = null
    }

    return staff.value
  }

  const isCareerCenterLoggedIn = computed(() => staff.value !== null)

  const logoutCareerCenter = () => {
    staff.value = null
  }

  return {
    staff,
    setCareerCenter,
    isCareerCenterLoggedIn,
    logoutCareerCenter
  }
})
