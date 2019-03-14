import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import Map from '@/components/map/Map';
import About from '@/components/about/About';
import Graph from '@/components/graphs/Graph';

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
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph,
    },
  ],
});
