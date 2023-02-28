import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/charcuteria',
    name: 'Charcuteria',
    component: () => import('../views/Charcuteria.vue')
  },
  {
    path: '/carniceria',
    name: 'Carniceria',
    component: () => import('../views/Carniceria.vue')
  },
  {
    path: '/cerdo',
    name: 'Cerdo',
    component: () => import('../views/Cerdo.vue')
  },
  {
    path: '/panaderia',
    name: 'Panaderia',
    component: () => import('../views/Panaderia.vue')
  },  
  {
    path: '/pollo',
    name: 'Pollo',
    component: () => import('../views/Pollo.vue')
  },
  {
    path: '/pollo-gourmet',
    name: 'PolloGourmet',
    component: () => import('../views/PolloGourmet.vue')
  },
  {
    path: '/rio-gourmet',
    name: 'RioGourmet',
    component: () => import('../views/RioGourmet.vue')
  },
  {
    path: '/rio-gourmet-jugos',
    name: 'RioGourmetJugos',
    component: () => import('../views/RioGourmetJugos.vue')
  },
  {
    path: '/rio-empanada',
    name: 'RioEmpanada',
    component: () => import('../views/Empanada.vue')
  },
  {
    path: '/rio-menu',
    name: 'RioMenu',
    component: () => import('../views/RioMenu.vue')
  },
  {
    path: '/rio-menu/1',
    name: 'RioMenuPrincipal',
    component: () => import('../views/RioMenuPrincipal.vue')
  }          
]

const router = new VueRouter({
  routes
})

export default router
