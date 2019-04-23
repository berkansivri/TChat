<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/Home'
import Auth from './services/Auth.js'
export default {
  components:{
    Home
  },
  created() {
		if (this.$store.state.session.id === undefined) {
			var session = Auth.getSessionCookie();
			if(session){
				this.$store.commit("setSession", session);
				session.isOnline = true;
				this.$api.updateUser(session)
				this.$api.subUsers();
				this.$mq.connect();
				this.$router.push("/");
			}else{
				this.$router.push("/login");
			}
		}
	},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body,
html {
	height: auto;
	margin: 0;
	background: #7f7fd5;
	background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
	background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
}
</style>
