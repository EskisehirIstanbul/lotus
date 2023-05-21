import { createRouter, createWebHistory } from 'vue-router'
import StaffLoginView from '../views/login/StaffLoginView.vue'
import CoordinatorLoginView from '../views/login/CoordinatorLoginView.vue'
import StudentLoginView from '../views/login/StudentLoginView.vue'
import AdminLoginView from '../views/login/AdminLoginView.vue'
import LoginNavigationView from '../views/login/LoginNavigationView.vue'
import StudentDashboardView from '../views/dashboard/student/StudentDashboardView.vue'
import StudentHomeView from '../views/dashboard/student/home/StudentHomeView.vue'
import StudentDocumentsView from '../views/dashboard/student/documents/StudentDocumentsView.vue'
import StudentMessagesView from '../views/dashboard/student/messages/StudentMessagesView.vue'
import StudentOpportunitiesView from '../views/dashboard/student/opportunities/StudentOpportunitiesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginNavigation',
      component: LoginNavigationView
    },

    {
      path: '/staff-login',
      name: 'StaffLogin',
      component: StaffLoginView
    },
    {
      path: '/coordinator-login',
      name: 'CoordinatorLogin',
      component: CoordinatorLoginView
    },

    {
      path: '/student-login',
      name: 'StudentLogin',
      component: StudentLoginView
    },
    {
      path: '/admin',
      name: 'AdminLogin',
      component: AdminLoginView
    },
    {
      path: '/student-dashboard',
      name: 'StudentDashboard',
      component: StudentDashboardView,
      children: [
        {
          path: '',
          name: 'StudentHome',
          component: StudentHomeView
        },
        {
          path: 'documents',
          name: 'StudentDocuments',
          component: StudentDocumentsView
        },
        {
          path: 'messages',
          name: 'StudentMessages',
          component: StudentMessagesView
        },
        {
          path: 'opportunities',
          name: 'StudentOpportunities',
          component: StudentOpportunitiesView
        }
      ]
    }
  ]
})

export default router
