import { createRouter, createWebHashHistory } from 'vue-router'
import TaskList from '@/views/TaskList.vue'
import TaskItem from '@/views/TaskItem.vue'

const routes = [
  { path: '/', name: 'tasklist', component: TaskList },
  { path: '/task/:id', name: 'taskitem', component: TaskItem, props: true }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
