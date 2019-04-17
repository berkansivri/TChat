import CryptoJS from 'crypto-js'
import VueCookies from 'vue-cookies'
const secretKey = "vueforfuture";

export default {
  setSessionCookie(session) {
    var cipherText = CryptoJS.AES.encrypt(JSON.stringify(session), secretKey).toString();
    var expireTime = "1m";
    VueCookies.set("session", cipherText, expireTime);
  },

  getSessionCookie() {
    if (VueCookies.isKey("session")) {
      var cipherText = VueCookies.get("session");
      var bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
      var session = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return session;
    }
  },

}