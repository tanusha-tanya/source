import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Addstory from '@/components/Addstory'
import Agreement from '@/components/Agreement'
import Udm from '@/components/Udm'
import Story from '@/components/Story'
import Contact from '@/components/Contact'
import Project from '@/components/Project'
import Empty from '@/components/Empty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'story',
      component: Story
    },
    {
      path: '/addstory',
      name: 'addstory',
      component: Addstory
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: Agreement
    },
    {
      path: '/udm',
      name: 'udm',
      component: Udm
    },
    {
      path: '/story',
      name: 'Story',
      component: Story
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/empty',
      name: 'Empty',
      component: Empty
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    }       
  ],
  mode: 'history'
})
