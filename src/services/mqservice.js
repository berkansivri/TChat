import 'paho-mqtt/paho-mqtt-min'
import store from '../store/store'
import apiservice from '../services/apiservice'

let client = null;

export default {

  connect() {
    client = new Paho.MQTT.Client("35.176.145.87", 15675, "/ws", store.state.session.username);

    var options = {
      timeout: 30,
      keepAliveInterval: 10,
      userName: "tchat",
      password: "tchat",
      cleanSession: true,
      onSuccess: () => {
        console.log("CONNECTION SUCCESS");

        client.subscribe(store.state.session.id, { qos: 1 } );
      },
      onFailure: (message) => {
        console.log("CONNECTION FAILURE - " + message.errorMessage);
      }
    };

    client.onConnectionLost = this.onConnectionLost;
    client.onMessageArrived = this.onMessageArrived;
    client.connect(options);
  },

  sendMessage(message){
    var date = new Date();
		var msgObj = {
			from: store.state.session.id,
			to: store.state.chatUser.id,
      message: message,
      isRead : false,
			time: date.toLocaleTimeString()
		};
    var sendObj = new Paho.MQTT.Message(JSON.stringify(msgObj));
    sendObj.destinationName = store.state.chatUser.id;
    client.send(sendObj);
  },

  onConnectionLost(responseObject) {
    //TODO
    console.log(responseObject.errorMessage)
  },

  onMessageArrived(message){
    var msgObj = JSON.parse(message.payloadString)
    msgObj.isRead = msgObj.from == store.state.chatUser.id ? true : false;
    store.commit("pushMessages", msgObj);
  },

  disconnect() {
    client.disconnect();
  }
}