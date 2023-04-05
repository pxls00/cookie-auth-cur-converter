import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'default',
        auth: true
      },
      component: home
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      meta: {
        layout: 'auth',
        auth: false
      },
      component: () => import('@/views/sign-in.vue')
    }
  ]
})

export default router
