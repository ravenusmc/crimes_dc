import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import map from './modules/map';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    map,
  }
});
