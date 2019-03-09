import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import Map from '@/components/map/Map';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/map',
      name: 'Map',
      component: Map,
    },
  ],
});
