<template>
	<div>
		<div class="d-flex bd-highlight">
			<div class="img_cont">
				<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" class="rounded-circle user_img">
				<span class="online_icon"></span>
			</div>
			<div class="user_info">
				<span>Chat with Name Surname</span>
				<p>1767 Messages</p>
			</div>
			<div class="video_cam">
				<span>
					<i class="fas fa-video"></i>
				</span>
				<span>
					<i class="fas fa-phone"></i>
				</span>
			</div>
		</div>
		<ChatMenu></ChatMenu>
	</div>
</template>

<script>
import ChatMenu from "../components/ChatMenu";
export default {
	components: {
		ChatMenu
	}
};
</script>

<style>
.video_cam {
	margin-left: 50px;
	margin-top: 5px;
}
.video_cam span {
	color: white;
	font-size: 20px;
	cursor: pointer;
	margin-right: 20px;
}
</style>


