<p align="center">
  <a href="https://s3.amazonaws.com/tch4t/logo.png">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TChat</h3>

  <p align="center">
    TChat is the simple single page application for auto translated chat built on <a href="https://vuejs.org" target="_blank"><img width="20" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a>.
    <br />
    <a target="_blank" href="http://tchat.space/">Live Demo</a>
  </p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

This project built for improve vue and cloud skills.

* Routing with Vue-Router and state management on Vuex.
* Users are stored in Firebase Realtime Db. To remember the users kept the information in cookie with crypted data.
* Messages are delivered with RabbitMQ (dockerize and runnig on ec2), connection with <a href="https://github.com/eclipse/paho.mqtt.javascript" target="_blank">Paho-MQTT</a> framework.
* Auto translate with <a href="https://tech.yandex.com/translate/" target="_blank">Yandex Translate API</a> between selected language on user login.
* <a href="http://tchat.space/" target="_blank">Live demo</a> on AWS S3 bucket. Used vue-cli <a href="https://github.com/multiplegeorges/vue-cli-plugin-s3-deploy" target="_blank">s3 deploy plugin</a> for production.



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
