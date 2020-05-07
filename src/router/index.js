import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/views/ZM/register'

Vue.use(Router)

export default new Router({
  routes: [
     {
       path: '/register',
       name: 'register',
       component: register
     }
  ]
})
