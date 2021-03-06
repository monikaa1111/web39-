// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$axios=Axios

Vue.use(Axios,VueAxios)

Vue.config.productionTip = false
Vue.prototype.$axios=Axios
Vue.use(VueAxios,Axios)
Vue.use(ElementUI)
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
