import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import zhuce from '@/xm/zhuce'
import forget from '@/views/WYZ/forget'
import need from '@/views/WYZ/need'
import need1 from '@/views/WYZ/need1'
import upup from '@/views/WYZ/upup'
import information from '@/views/WYZ/information'

import denglu from '@/views/BQ/denglu'
import register from '@/views/ZM/register'
import top from '@/components/top'
import zhuye from '@/views/BQ/zhuye'
import youxiu from '@/views/BQ/youxiu'
import xqxqy from '@/views/BQ/xqxqy'
// import wodexiangmu from '@/views/BQ/wodexiangmu'
import jianli from '@/views/BQ/jianli'
// import daiban from '@/views/BQ/daiban'

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
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/need',
      name: 'need',
      component: need
    },
    {
      path: '/need1',
      name: 'need1',
      component: need1
    },
    {
      path: '/upup',
      name: 'upup',
      component: upup
    },
    {
      path: '/information',
      name: 'information',
      component: information
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
    },
    {
      path: '/youxiu',
      name: 'youxiu',
      component:youxiu
    },
    {
      path: '/xqxqy',
      name: 'xqxqy',
      component:xqxqy
    },
    {
      path: '/jianli',
      name: 'jianli',
      component:jianli
    },
    // {
    //   path: '/work',
    //   name: 'work',
    //   component:work
    // },
    // {
    //   path: '/daiban',
    //   name: 'daiban',
    //   component:daiban
    // },
  ]
})
