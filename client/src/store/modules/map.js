import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import jsonp from 'jsonp';

const state = {
  shift: [],
};

const getters = {
  shift: state => state.shift,
};




const mutations = {

  setShiftData(state, data) {
    state.shift = data;
  },

};


export default {
  state,
  getters,
  actions,
  mutations,
};
