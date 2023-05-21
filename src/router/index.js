import { createRouter, createWebHistory } from 'vue-router'
import StaffLoginView from '../views/StaffLoginView.vue'
import CoordinatorLoginView from '../views/CoordinatorLoginView.vue'
import StudentLoginView from '../views/StudentLoginView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import LoginNavigationView from '../views/LoginNavigationView.vue'
import StudentDashboardView from '../views/StudentDashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login-navigation',
      component: LoginNavigationView
    },

    {
      path: '/staff-login',
      name: 'staff-login',
      component: StaffLoginView
    },
    {
      path: '/coordinator-login',
      name: 'coordinator-login',
      component: CoordinatorLoginView
    },

    {
      path: '/student-login',
      name: 'student-login',
      component: StudentLoginView
    },
    {
      path: '/admin',
      name: 'admin-login',
      component: AdminLoginView
    },
    {
      path: '/student-dashboard',
      name: 'student-dashboard',
      component: StudentDashboardView
    }
  ]
})

export default router
