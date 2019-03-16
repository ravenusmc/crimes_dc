// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import * as VueGoogleMaps from 'vue2-google-maps'
let {key} = require('./key');
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.config.productionTip = false;

//Google maps
Vue.use(VueGoogleMaps, {
  load: {
    key: key,
  },
})

//Material design
Vue.use(VueMaterial)

//Vue bus
export const eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
