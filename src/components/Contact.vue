<template>
	<div class="d-flex bd-highlight">
		<div class="img_cont">
			<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" class="rounded-circle user_img">
			<span class="online_icon" :class="isOnlineClass"></span>
			<div class="message_icon" v-show="showMessageNotify">{{ messageCount }}</div>
		</div>
		<div class="user_info">
			<span>{{user.username}}</span>
			<p>{{isOnlineText}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props:["user"],
	data(){
		return {
		}
	},
	computed:{
		isOnlineClass(){
			return !this.user.isOnline ? "offline" : "";  
		},
		isOnlineText(){
			return !this.user.isOnline ? "offline" : "online";  
		},
		messageCount(){
			return this.$store.getters.getUnreadMessages(this.user.id).length
		},
		showMessageNotify(){
			return this.messageCount > 0 && this.$store.state.chatUser.id !== this.user.id
		}
	},
};
</script>

<style>
.offline {
	background-color: #c23616 !important;
}

</style>
