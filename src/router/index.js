import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Anndetails from '../views/anndetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component:  () => import( '../views/HomeView.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import( '../views/details.vue')
  },
  {
    path: '/anndetails',
    name: 'anndetails',
    component: () => import( '../views/anndetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
