import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import store from './store'

import VueCookies from 'vue-cookies'

import Axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Echarts from 'echarts'

Vue.config.productionTip = false  //生产环境提示

Vue.prototype.$axios = Axios
Vue.prototype.$echarts = Echarts

Vue.use(ElementUI);
Vue.use(VueCookies);

new Vue({
  render: h => h(App),router,store
}).$mount('#app')
