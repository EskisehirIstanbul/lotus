import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { loginCareerCenter, getCareerCenterById } from '../api/careerCenter.api'
// loginCoordinator ,getCoordinatorById
export default defineStore('careerCenter', () => {
  const student = ref(null)

  const setCareerCenter = async (username, password) => {
    const status = await loginCareerCenter(username, password)
    if (status === 200) {
      CareerCenter.value = await getCareerCenterById(username)
      console.log(CareerCenter.value)
    } else {
      CareerCenter.value = null
    }

    return CareerCenter.value
  }

  const isCareerCenterLoggedIn = computed(() => CareerCenter.value !== null)

  const logoutCareerCenter = () => {
    CareerCenter.value = null
  }

  return {
    CareerCenter,
    setCareerCenter,
    isCareerCenterLoggedIn,
    logoutCareerCenter
  }
})
