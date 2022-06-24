import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LikePage from '../views/LikePage.vue'
import CreatePage from '../views/CreatePage.vue'
import PostIdPage from '../views/PostIdPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  ,
  {
    path: '/posts/:id',
    component: PostIdPage
  },
  {
    path: '/like',
    component: LikePage
  }
  ,
  {
    path: '/create',
    component: CreatePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
