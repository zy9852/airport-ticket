import Vue from 'vue'
import Router from 'vue-router'

import register from '../pages/login/register'
import login from '../pages/login/login'
import home from '../pages/home'
import airport from '../pages/airport'
import ticketsList from '../pages/ticketsList'
import recommend from '../pages/recommend'
import book from '../pages/book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: register
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/airport',
      name: 'airport',
      component: airport
    },
    {
      path: '/ticketsList',
      name: 'ticketsList',
      component: ticketsList
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/book',
      name: 'book',
      component: book
    }
  ],
  mode: 'history'
})
