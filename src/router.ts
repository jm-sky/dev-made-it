import { createWebHistory, createRouter } from 'vue-router'

import MainPage from '@/pages/MainPage.vue'
import ResumePage from '@/pages/ResumePage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/resume', component: ResumePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
