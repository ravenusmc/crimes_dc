import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import jsonp from 'jsonp';

const state = {
  crimeData: {},
};

const getters = {
  crimeData: state => state.crimeData,
};

const actions = {

  fetchCrimeData: ({ commit }, payload) => {
    const path = 'http://localhost:5000/getMapData';
    axios.post(path, payload)
    .then((res) => {
      commit('setCrimeData', res.data)
    })
    .catch((error) => {
      console.log(error);
    });
  },

};

const mutations = {

  setCrimeData(state, data) {
    state.crimeData = data;
  },

};


export default {
  state,
  getters,
  actions,
  mutations,
};
