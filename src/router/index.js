import { createRouter, createWebHistory } from 'vue-router'

import homePage from '../views/HomePage.vue'
import aboutPage from '../views/AboutPage.vue'
import notFound from '../views/NotFound.vue'
import dashboardPage from '../views/DashboardPage.vue'
import LinkPage from '../views/LinkPage.vue'
import registerPage from '../views/RegisterPage.vue'
import loginPage from '../views/LoginPage.vue'

const routes = [
  { 
    path: '/', 
    component: homePage
  },
  {
    path: '/about',
    component: aboutPage
  },
  {
    path: '/404',
    component: notFound
  },
  {
    path: '/dashboard',
    component: dashboardPage,
  },
  {
    path: '/register',
    component: registerPage
  },
  {
    path: "/login",
    component: loginPage
  },
  {
    name: "linkPage",
    // passing route params
    path: '/link/:id',
    component: LinkPage
  }
]

export const router = createRouter({
  // used createWebHashHistory() instead of createWebHistory()
  history: createWebHistory(),
  routes,
})