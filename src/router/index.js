import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Addhistory from '@/components/Addhistory'
import Agreement from '@/components/Agreement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addhistory',
      name: 'addhistory',
      component: Addhistory
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: Agreement
    }
  ],
  mode: 'history'
})
