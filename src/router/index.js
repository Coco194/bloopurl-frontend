import { createRouter, createWebHashHistory } from 'vue-router'

import homePage from '../views/HomePage.vue'
import aboutPage from '../views/AboutPage.vue'
import notFound from '../views/NotFound.vue'
import dashboardPage from '../views/DashboardPage.vue'
import LinkPage from '../views/LinkPage.vue'

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
    component: dashboardPage
  },
  {
    path: '/link',
    component: LinkPage
  }

]

export const router = createRouter({
  // used createWebHashHistory() instead of createWebHistory()
  history: createWebHashHistory(),
  routes,
})