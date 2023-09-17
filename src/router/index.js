import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import McvRegisterPage from '@/views/Register'
import McvLoginPage from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'register',
    component: McvRegisterPage,
  },
  {
    path: '/login',
    name: 'login',
    component: McvLoginPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
