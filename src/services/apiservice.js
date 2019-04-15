import firebase from "firebase";
import store from "../store/store";

var config = {
  apiKey: "AIzaSyA1YS41DraJfuL16Vya2UtXTwsAvzZ4IeI",
  authDomain: "tchat-11ca4.firebaseapp.com",
  databaseURL: "https://tchat-11ca4.firebaseio.com",
  storageBucket: "tchat-11ca4.appspot.com"
};

firebase.initializeApp(config);

var db = firebase.database();

export default {

  async addUser(username) {
    return db.ref("users").push({
      username, isOnline: true
    }).key;
  },

  async updateUser(user){
    db.ref("users/").child(user.id).update(user);
  },

  async getUsers() {
    return db.ref("users").once("value")
  },

  subUsers() {
    return db.ref("users").on("value", snapshot => {
      var userdata = [];
      var snap = snapshot.val();
      if(snap != null){
        Object.keys(snap).forEach(key => {
          userdata.push({ id: key, username: snap[key].username, isOnline : snap[key].isOnline });
        });
      }
      store.commit("setUsers", userdata);
    });
  },

  disconnectUser(){
    db.ref("users/" + store.state.session.id ).onDisconnect().update({isOnline : false})
  }
};
