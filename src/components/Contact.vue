<template>
	<div class="d-flex bd-highlight">
		<div class="img_cont">
			<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" class="rounded-circle user_img">
			<span class="online_icon"></span>
		</div>
		<div class="user_info">
			<span>{{user.username}}</span>
			<p>online</p>
		</div>
	</div>
</template>

<script>
export default {
	props:["user"],
	created(){
	}
};
</script>

<style>
.offline {
	background-color: #c23616 !important;
}
</style>
