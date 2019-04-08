import Vue from 'vue'
import App from './App.vue'
import router from './Init/router'
import store from './store/store'
import mqservice from './services/mqservice'
import apiservice from './services/apiservice'
Vue.config.productionTip = false

Vue.prototype.$mq = mqservice;
Vue.prototype.$api = apiservice;
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
