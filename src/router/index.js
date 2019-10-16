import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Addstory from '@/components/Addstory'
import Agreement from '@/components/Agreement'
import Story from '@/components/Story'
import Contact from '@/components/Contact'
import Project from '@/components/Project'
import Empty from '@/components/Empty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/udm',
      name: 'udm',
      component: Story
    },
    {
      path: '/',
      name: 'main',
      component: Story
    },
    {
      path: '/story',
      name: 'story',
      component: Story
    },
    {
      path: '/addstory',
      name: 'addstory',
      component: Addstory
    },
    {
      path: '/udmadd',
      name: 'udmadd',
      component: Addstory
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: Agreement
    },   
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/contactudm',
      name: 'contactudm',
      component:  Contact
    },
    {
      path: '/empty',
      name: 'empty',
      component: Empty
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/projectudm',
      name: 'projectudm',
      component: Project
    },
          
  ],
  mode: 'history'
})
