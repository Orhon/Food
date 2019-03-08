import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sandwichAdded: []
  },
  getters: {
    getAddedSandwiches: state => state.sandwichAdded,
  },

  actions: {
    addSandwich(context, sandwich) {

      context.commit("addSandwich", sandwich)
    }
  },
  mutations: {
    addSandwich(state, sandwich) {
      state.sandwichAdded.push(sandwich);
      //console.log(state.broodjesToegevoegd);
    }
  }
});
