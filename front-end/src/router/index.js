import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'home',
    meta: {
      requiresVisitor: true
    },
    component: Home
  },
  {
    path: '/',
    name: 'welcome',
    meta: {
      requiresAuth: true
    },
    component: Welcome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
