import Vue from 'vue'
import App from './App.vue'
import router from './Init/router'
import store from './store/store'
import mqservice from './services/mqservice'
import apiservice from './services/apiservice'
import VueCookie from 'vue-cookie'
Vue.config.productionTip = false

Vue.prototype.$mq = mqservice;
Vue.prototype.$api = apiservice;

Vue.use(VueCookie);

new Vue({
  created(){
    window.onbeforeunload = function() {
      mqservice.disconnect();
      return "test"
    };
  },
  render: h => h(App),
  router,
  store,
}).$mount('#app')
