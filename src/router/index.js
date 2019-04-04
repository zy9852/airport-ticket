import Vue from 'vue'
import Router from 'vue-router';

import home from '../pages/home/router';

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

const routes = [].concat(home);

Router.addRoutes(routes);

export default router
