import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/ProjectsView.vue'),
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: () => import('@/views/ProjectDetail.vue'),
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutMe.vue'),
  },
  // Добавляем новый маршрут для страницы сертификата
  {
    path: '/certificate',
    name: 'Certificate',
    component: () => import('@/views/CertificateView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
