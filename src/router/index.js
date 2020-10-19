import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/inner',
    name: 'Home',
    component: ()=> import('@/views/inner'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
