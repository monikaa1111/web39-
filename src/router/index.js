import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import denglu from '@/views/BQ/denglu'
import zhuce from '@/xm/zhuce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    }
  ]
})
