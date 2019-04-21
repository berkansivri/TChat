<template>
	<div class="d-flex bd-highlight">
		<div class="user_info">
			<span> <span class="online_icon" :class="isOnlineClass"></span> {{user.username}}</span>
			<span class="w3-badge" v-show="showMessageNotify">{{ messageCount }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ["user"],
	data() {
		return {};
	},
	computed: {
		isOnlineClass() {
			return !this.user.isOnline ? "offline" : "online";
		},
		messageCount() {
			return this.$store.getters.getUnreadMessages(this.user.id).length;
		},
		showMessageNotify() {
			return (
				this.messageCount > 0 && this.$store.state.chatUser.id !== this.user.id
			);
		}
	}
};
</script>

<style>
.w3-badge {
	background-color: #ff0000;
	color: #fff;
	display: inline-block;
	padding-left: 8px;
	padding-right: 8px;
	text-align: center;
	border-radius: 50%;
	font-size: 13px !important;
	margin-left:5px;
	margin-bottom: 3px;
}
.offline {
	background-color: #c23616 !important;
}
.online_icon {
	position: absolute;
	height: 13px;
	width: 13px;
	background-color: #4cd137;
	border-radius: 50%;
	left: 5px;
	margin-top: 7px;
	border: 1.4px solid white;
}
</style>
