import Axios from "axios";

const characterStore = {
    namespaced: true,

    state: ()=> ({
        characters: [],
      }),
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
      modules: {
        
      },
}

export default characterStore