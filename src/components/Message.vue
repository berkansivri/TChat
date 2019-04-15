<template>
	<div>
		<div v-for="msg in messages" :key="msg.id">
			<div class="d-flex justify-content-end mb-4" v-if="msg.from == $store.state.session.id">
				<div class="msg_container_send" :id="msg.id">
					{{ msg.message }}
					<span class="msg_time_send">{{ msg.time }}</span>
				</div>
				<div class="img_cont_msg">
					<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" class="rounded-circle user_img_msg">
				</div>
			</div>

			<div class="d-flex justify-content-start mb-4" v-else>
				<div class="img_cont_msg">
					<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" class="rounded-circle user_img_msg">
				</div>
				<div class="msg_container" :id="msg.id">
					{{ msg.message }}
					<span class="msg_time">{{ msg.time }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed:{
	messages(){
			return this.$store.getters.getMessages;
		}
	},
	updated(){
		var height = this.$el.parentElement.scrollHeight;
		this.$el.parentElement.scrollTop = height;
	}
};
</script>

<style>
.user_img_msg {
	height: 40px;
	width: 40px;
	border: 1.5px solid #f5f6fa;
}
.img_cont_msg {
	height: 40px;
	width: 40px;
}
.msg_container {
	margin-top: auto;
	margin-bottom: auto;
	margin-left: 10px;
	border-radius: 25px;
	background-color: #82ccdd;
	padding: 10px;
	position: relative;
}
.msg_container_send {
	margin-top: auto;
	margin-bottom: auto;
	margin-right: 10px;
	border-radius: 25px;
	background-color: #78e08f;
	padding: 10px;
	position: relative;
}
.msg_time {
	position: absolute;
	left: 0;
	bottom: -15px;
	color: rgba(255, 255, 255, 0.5);
	font-size: 10px;
}
.msg_time_send {
	position: absolute;
	right: 0;
	bottom: -15px;
	color: rgba(255, 255, 255, 0.5);
	font-size: 10px;
}
</style>

