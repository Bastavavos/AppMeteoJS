import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cities',
      name: 'cities',
      component: () => import('../views/CitiesList.vue')
    },
    {
      path: '/ville',
      name: 'ville',
      component:() => import('../components/City.vue')
    }
  ]
})

export default router
