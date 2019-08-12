import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import nav from '@/components/nav';

Vue.use(Router);
Vue.use(iView);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: nav
    }
  ]
});
