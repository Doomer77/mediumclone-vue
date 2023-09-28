import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import McvRegister from '@/views/Register'
import McvLogin from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'register',
    component: McvRegister,
  },
  {
    path: '/login',
    name: 'login',
    component: McvLogin,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
