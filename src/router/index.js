import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import denglu from '@/views/BQ/denglu'
import register from '@/views/ZM/register'
import cxy from '@/views/ZM/cxy'
import top from '@/components/top'
import zhuye from '@/views/BQ/zhuye'

Vue.use(Router)

export default new Router({ 
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
       path: '/register',
       name: 'register',
       component: register
     },
     {
      path: '/cxy',
      name: 'cxy',
      component: cxy
     },
     {
      path: '/denglu',
      name: 'denglu',
      component:denglu
    },
    {
      path: '/top',
      name: 'top',
      component:top
    },
    {
      path: '/zhuye',
      name: 'zhuye',
      component:zhuye
    }
  ]
})
