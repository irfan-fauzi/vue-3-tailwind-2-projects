import { createRouter, createWebHashHistory } from 'vue-router'
import Calendar from './components/Calendar'
import TodoList from './components/TodoList'

const routes = [
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/todo',
    component: TodoList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
