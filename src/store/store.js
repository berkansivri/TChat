import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    session: {},
    users: [],
    search: "",
    chatUser: {},
    messages:[]
  },
  getters: {
    getUsers: state => {
        return state.search 
              ? state.users.filter(user => user.id !== state.session.id && user.username.includes(state.search))
              : state.users.filter(user => user.id !== state.session.id)
    }
  },
  mutations: {
    setSession(state, user) {
      state.session = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setSearch(state, text) {
      state.search = text;
    },
    setChatUser(state, user) {
      state.chatUser = user;
    },
    pushMessages(state, message){
      state.messages.push(message);
    }
  },

  actions: {}
});

export default store;

const initialStateCopy = JSON.parse(JSON.stringify(store.state));

export function resetState() {
  store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)));
}
