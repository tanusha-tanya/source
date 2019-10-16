import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAlert: true,
    coocies: true,
  },  
  mutations: {
    turneOf(state) {    
      state.isAlert = false;
    },
    close(state) {
      state.coocies = false;
    }
  }
})
