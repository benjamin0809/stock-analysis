import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter) 

const routers: RouteConfig = {
  path: '/',
  name: 'home',
  meta: {
    title: 'home'
  },
  component: () => import('../components/home.vue')
}

const RouterConfig = {
  // mode: 'history',
  routes: routers
}

const router = new VueRouter({ routes: [routers] })
export default router