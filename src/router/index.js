import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import McvRegister from '@/views/Register'
import McvLogin from '@/views/Login'
import McvCreateArticle from '@/views/CreateArticle'
import McvSettings from '@/views/Settings'
import McvUserProfile from '@/views/UserProfile'

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
  {
    path: '/createArticle',
    name: 'createArticle',
    component: McvCreateArticle,
  },
  {
    path: '/settings',
    name: 'settings',
    component: McvSettings,
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: McvUserProfile,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
