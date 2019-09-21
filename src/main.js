import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import router from './router.js';
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')