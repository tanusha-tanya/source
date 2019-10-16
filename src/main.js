import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ymapPlugin from './vue-yandex-maps/dist/vue-yandex-maps.js'
import store from './store'

Vue.use(ymapPlugin)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  ymapPlugin,  
  store
}).$mount('#app')
