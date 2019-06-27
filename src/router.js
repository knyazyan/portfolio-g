import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

let router =  new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: "default_component", requiresAuth: true},
      component: () => import('./views/home/Home.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {layout: "default_component", requiresAuth: true},
      component: () => import('./views/home/ContactMe.vue'),
    },
  ]
});

export default router;
