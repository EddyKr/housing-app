import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import './registerServiceWorker'
import VueResource from 'vue-resource'
import auth from './auth'
import VueRouter from 'vue-router';


Vue.use(VueResource)
// Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
Vue.http.headers.common['Accept'] = 'application/json';
Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.options.root = 'http://localhost:8765/api/';

Vue.router = router;
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.config.productionTip = false

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
  
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
