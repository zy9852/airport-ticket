import Vue from 'vue';
import Router from 'vue-router';

import home from '../pages/home';
// import calendar from '../pages/calendar';
import ticketsList from '../pages/ticketsList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    // {
    //   path: '/calendar',
    //   name: 'calendar',
    //   component: calendar
    // },
    {
      path: '/ticketsList',
      name: 'ticketsList',
      component: ticketsList
    }
  ],
  mode: 'history'
});
