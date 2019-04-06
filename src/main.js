import Vue from 'vue'
import App from './App.vue'
import router from './Init/router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
