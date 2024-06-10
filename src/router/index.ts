import { createRouter, createWebHistory } from 'vue-router'
import Opening from '../views/Opening.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'opening',
      component: Opening
    }
  ]
})

export default router
