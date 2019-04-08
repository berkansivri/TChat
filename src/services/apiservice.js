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
    console.log("add user");
    return db.ref("users").push({
      username
    }).key;
  },
  getUsers() {
    var userdata = [];
    return db.ref("users").on("value", snapshot => {
      var snap = snapshot.val();
      if(snap != null){
        Object.keys(snap).forEach(key => {
          userdata.push({ id: key, username: snap[key].username });
        });
      }
      store.commit("setUsers", userdata);
    });
  }
};
