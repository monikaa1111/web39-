import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import zhuce from '@/xm/zhuce'
import forget from '@/views/WYZ/forget'
import need from '@/views/WYZ/need'
import need1 from '@/views/WYZ/need1'
import upup from '@/views/WYZ/upup'
import information from '@/views/WYZ/information'
Vue.use(Router)

export default new Router({
  mode:'history',
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
    // {
    //   path: '/zhuce',
    //   name: 'zhuce',
    //   component: zhuce
    // }
  ]
})
