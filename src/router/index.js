import Container from '@/components/layouts/Container.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Container,
      children:[
        {
          path: '/',
          name: 'dashboard',
          component: () => import('../views/dashboard/index.vue'),
          meta: {
            title: "Dashboard",
          },
        },
        {
          path: '/programs',
          name: 'programs',
          component: () => import('../views/programs/index.vue'),
          meta: {
            title: "Programs",
          },
        },
        {
          path: '/programs/detail/:id',
          name: 'programsDetail',
          component: () => import('../views/programs/detail/index.vue'),
          meta: {
            title: "Programs Detail",
          },
        },
        {
          path: '/programs/edit/:id',
          name: 'programsEdit',
          component: () => import('../views/programs/edit/index.vue'),
          meta: {
            title: "Programs Edit",
          },
        },
        {
          path: '/programs/my-programs',
          name: 'myPrograms',
          component: () => import('../views/programs/my-programs/index.vue'),
          meta: {
            title: "My Program",
          },
        },
        {
          path: '/announcements',
          name: 'announcements',
          component: () => import('../views/announcements/index.vue'),
          meta: {
            title: "Announcements",
          },
        },
      ]
    },
  ]
})

export default router
