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
      component:()=>import('@/components/admin.vue'),
      children: [{
        path:'test',
        component:()=>import('@/page/test/test.vue')
      },
      {
        path:'test1',
        component:()=>import('@/page/test1/test1.vue')
      },
      {
        path:'test2',
        component:()=>import('@/page/test2/test2.vue')
      },
			{
			  path:'testcode',
			  component:()=>import('@/page/testcode/testcode.vue')
			},
      {
        path:'test3',
        component:()=>import('@/page/test3/test3.vue')
      },
      {
        path:'test4',
        component:()=>import('@/page/test4/test4.vue')
      },
      {
        path:'test5',
        component:()=>import('@/page/test5/test5.vue')
      },
      ]
    },
  ]
})
