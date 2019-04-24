import Vue from 'vue';
import Router from 'vue-router';

import home from '../pages/home';
import airport from '../pages/airport';
import ticketsList from '../pages/ticketsList';

Vue.use(Router);

export default new Router({
  routes: [
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
    }
  ],
  mode: 'history'
});
