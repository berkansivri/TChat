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
              ? state.users.filter(user.username.includes(state.search))
              : state.users
    },  
    getMessages: state => {
      return state.messages.filter( message => ((message.from == state.session.id && message.to == state.chatUser.id)
                                                || (message.to == state.session.id && message.from == state.chatUser.id) ) )
    },
    getUnreadMessages: (state) => (id) => {
      return state.messages.filter( message => message.from == id && !message.isRead ) 
    },
    isChatuserOnline: state => {
      return state.users.find(user=>user.id == state.chatUser.id).isOnline
    },
    getLang: state => (id) => {
      return state.users.find(user => user.id === id).lang
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
    pushMessages(state, msgObj){
      state.messages.push(msgObj);
    },
    markMessagesAsRead(state, chatUserId){
      state.messages.filter( message => message.from == chatUserId && !message.isRead ).map ( message => message.isRead = true )
    }
  },

  actions: {}
});

export default store;

const initialStateCopy = JSON.parse(JSON.stringify(store.state));

export function resetState() {
  store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)));
}
