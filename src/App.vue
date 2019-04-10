<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  components:{
    Home
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
