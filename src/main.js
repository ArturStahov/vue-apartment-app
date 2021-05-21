import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js'
import '@csstools/normalize.css';
import './assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
