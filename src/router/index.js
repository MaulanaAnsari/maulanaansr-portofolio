import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/Home.vue'
import resume from '@/views/Resume.vue'
import Project from '@/views/Project.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume,
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
    },
  ],
})

export default router
