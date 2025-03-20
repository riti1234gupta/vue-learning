import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Jobs from '@/views/Jobs.vue'
import NotFound from '@/views/NotFound.vue'
import JobDetail from '@/views/JobDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home',
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    {
      path: '/jobs/:id',
      name: 'jobDetail',
      component: JobDetail,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFound,
    },
  ],
})
export default router
