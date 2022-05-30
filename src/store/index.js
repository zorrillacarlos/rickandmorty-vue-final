import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },
  getters: {},
  mutations: {
    loadCharacters(state, param) {
      state.characters = param.results;
    },
  },
  actions: {
    async getCharacters({commit}) {
      await Axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
          commit("loadCharacters", response.data);
        });
    },
  },
  modules: {},
});
