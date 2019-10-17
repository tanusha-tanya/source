import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import ymapPlugin from './vue-yandex-maps/dist/vue-yandex-maps.js'
import store from './store'
import Vuex from 'vuex'

Vue.use(Vuelidate);
Vue.use(ymapPlugin);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  ymapPlugin,  
  store, 
  Vuelidate    
}).$mount('#app')
