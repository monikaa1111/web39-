import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import denglu from '@/views/BQ/denglu'
import register from '@/views/ZM/register'
import denglu from '@/views/BQ/denglu'
import top from '@/components/top'
import zhuye from '@/views/BQ/zhuye'

Vue.use(Router)

<<<<<<< HEAD
export default new Router({ 
=======
export default new Router({
>>>>>>> 7680e6929c1eff095398543a2d7c075d6fe214d2
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
