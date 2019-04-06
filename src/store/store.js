import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: ''
  },
  getters: {

  },
  mutations: {
    setUsername(state, name){
      state.username = name;
    } 
  },
  actions: {

  }
})

export default store;

const initialStateCopy = JSON.parse(JSON.stringify(store.state))

export function resetState() {
   store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)))
}