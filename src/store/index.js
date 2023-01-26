import { createStore } from 'vuex'
// import axios from 'axios'

export default createStore({
  state: {
    products: {},

  },
  getters: {
  },
  mutations: {
    async setData(state, data) {
      state.products = await data;
      console.log(state.products);
    }
  },
  actions: {
    getData({ commit }) {
      try {
        fetch('/db.json').then(res => res.json()).then(response => {
          // console.log(response.dataResult);
          commit('setData', response.dataResult)
        })
        // context.state= response.dataResult
        // commit('setData', response.dataResult);
      } catch (error) {
        console.log(error);
      }
    }

  },
  modules: {
  }
})
