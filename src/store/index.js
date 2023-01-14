import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    data: []
  },
  getters: {
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async getData({ commit }) {
      try {
        const response = await axios('data/db.json');
        commit('setData', response.data);
      } catch (error) {
        console.log(error);
      }
    }
  
  },
modules: {
}
})
