// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLayload from 'vue-lazyload'
import loading from './common/images/load.png'
import {Button} from 'mint-ui'
import Dpicker from 'v-distpicker'

Vue.component(Button.name,Button)

Vue.component('v-distpicker',Dpicker)
Vue.use(VueLayload,{
  loading
})
import './mock/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
