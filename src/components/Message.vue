<template>
	<div>
		<div class="d-flex justify-content-start mb-4">
			<div class="img_cont_msg">
				<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" class="rounded-circle user_img_msg">
			</div>
			<div class="msg_container">
				Hi, how are you dude?
				<span class="msg_time">8:40 AM, Today</span>
			</div>
		</div>
		<div class="d-flex justify-content-end mb-4">
			<div class="msg_container_send">
				Hi bro i am good tnx how about you?
				<span class="msg_time_send">8:55 AM, Today</span>
			</div>
			<div class="img_cont_msg">
				<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" class="rounded-circle user_img_msg">
			</div>
		</div>
	</div>
</template>

<script>
export default {};
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

