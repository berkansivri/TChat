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

  async addUser(session) {
    return db.ref("users").push(session).key;
  },

  async updateUser(user){
    db.ref("users/").child(user.id).update({username: user.username, isOnline: user.isOnline});
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
          userdata.push({ id: key, username: snap[key].username, isOnline : snap[key].isOnline, lang : snap[key].lang} );
        });
      }
      store.commit("setUsers", userdata);
    });
  },

  translateMessage(msgObj){
    var senderLang = store.getters.getLang(msgObj.from);
    var lang = store.state.session.lang;
    var msg = msgObj.message;

    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='
       + 'trnsl.1.1.20190417T082424Z.87b25bdb2b535443.09bdf32bcb123edcb9e086fd1efddd5c15758511'
       + '&lang='+ encodeURIComponent(senderLang ? `${senderLang}-${lang}` : lang)
       + '&text='+ encodeURIComponent(msg))
      .then(response => response.json())
      .then(json => {
        msgObj.message = json.text[0];
        store.commit("pushMessages", msgObj);
      });
  },

  getLangs(){
    return fetch('https://translate.yandex.net/api/v1.5/tr.json/getLangs?key='
       + 'trnsl.1.1.20190417T082424Z.87b25bdb2b535443.09bdf32bcb123edcb9e086fd1efddd5c15758511'
       + '&ui=en')
       .then(response => response.json())
  },

  disconnectUser(){
    db.ref("users/" + store.state.session.id ).onDisconnect().update({isOnline : false})
  }
};
