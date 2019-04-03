import Vue from 'vue'
import router from "./router/router"
import App from './App.vue'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

Vue.use(ElementUI);
new Vue({
  render: h => h(App),router
}).$mount('#app')
