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

  fetchCrimeData: ({ commit }) => {
    console.log('Mike')
    // const varietyObject = {
    //   variety: payload
    // };
    // const path = 'http://localhost:5000/worldMapData';
    // axios.post(path, varietyObject)
    // .then((res) => {
    //   commit('setWineData', res.data)
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
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
