import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import './registerServiceWorker'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
Vue.http.headers.common['Accept'] = 'application/json';
Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.options.root = 'http://localhost:8765/api/';

Vue.router = router;
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
