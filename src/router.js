import { createRouter, createWebHistory } from 'vue-router'
import Calendar from './pages/Calendar'
import TodoList from './pages/TodoList'
import Home from './pages/Home'
import Markdown from './pages/Markdown'

const routes = [
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/todo',
    component: TodoList
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/markdown',
    component: Markdown
  },

]

const router = createRouter({history: createWebHistory(),routes})

export default router
