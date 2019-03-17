import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import jsonp from 'jsonp';

const state = {
  queryData: {},
};

const getters = {
  queryData: state => state.queryData,
};

const actions = {

  fetchCrimeData: ({ commit }, payload) => {
    const path = 'http://localhost:5000/getMapData';
    axios.post(path, payload)
    .then((res) => {
      console.log(res.data)
      // commit('setShiftData', res.data)
    })
    .catch((error) => {
      console.log(error);
    });
  },

};

const mutations = {

  setShiftData(state, data) {
    state.queryData = data;
  },

};


export default {
  state,
  getters,
  actions,
  mutations,
};
