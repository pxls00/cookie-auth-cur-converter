import { createRouter, createWebHistory } from 'vue-router'
import setPageTitle from '@/helpers/setPageTitle'
import cookie from '@/helpers/cookieMethods'
import { AUTH_TOKEN_PREFIX } from '@/consts/auth'
// import type LoginBody from '@/interfaces/auth/login-body'
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

router.beforeEach((to, from, next) => {
  setPageTitle(to.meta.title as string)
  let token = null

  if (cookie.get(AUTH_TOKEN_PREFIX))
    token = cookie.get(AUTH_TOKEN_PREFIX)

  const authRequired = to.meta.auth as boolean
  console.log(cookie.get(AUTH_TOKEN_PREFIX), authRequired)
  if (authRequired && !token) {
    to.fullPath
    next({ name: 'sign-in'})
  } else next()
})

export default router
