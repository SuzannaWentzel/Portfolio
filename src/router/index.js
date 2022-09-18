import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/projects/:projectSlug',
    name: 'Projects',
    component: () => import(/* webpackChunckName: "Project" */ '../views/Projects.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunckName: "Project" */ '../views/Projects.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
