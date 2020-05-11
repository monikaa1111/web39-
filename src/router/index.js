import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/views/ZM/register'
import denglu from '@/views/BQ/denglu'
import top from '@/components/top'
import zhuye from '@/views/BQ/zhuye'

Vue.use(Router)

export default new Router({ 
  mode:"history",
  routes: [
     {
       path: '/register',
       name: 'register',
       component: register
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
