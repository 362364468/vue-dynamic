import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:()=>import('@/page/login/login.vue')
    },
    {
      path: '*',
      name: '404',
      component:()=>import('@/page/404/404.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component:()=>import('@/page/admin/admin.vue')
    }
  ]
})
