import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router