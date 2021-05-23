import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './route'
import '@csstools/normalize.css';
import './assets/scss/main.scss';
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
