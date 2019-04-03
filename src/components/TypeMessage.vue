<template>
	<div class="input-group">
		<div class="input-group-append">
			<span class="input-group-text attach_btn">
				<i class="fas fa-paperclip"></i>
			</span>
		</div>
		<textarea name class="form-control type_msg" placeholder="Type your message..."></textarea>
		<div class="input-group-append">
			<span class="input-group-text send_btn">
				<i class="fas fa-location-arrow"></i>
			</span>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.type_msg {
	background-color: rgba(0, 0, 0, 0.3) !important;
	border: 0 !important;
	color: white !important;
	height: 60px !important;
	overflow-y: auto;
}
.type_msg:focus {
	box-shadow: none !important;
	outline: 0px !important;
}
.attach_btn {
	border-radius: 15px 0 0 15px !important;
	background-color: rgba(0, 0, 0, 0.3) !important;
	border: 0 !important;
	color: white !important;
	cursor: pointer;
}
.send_btn {
	border-radius: 0 15px 15px 0 !important;
	background-color: rgba(0, 0, 0, 0.3) !important;
	border: 0 !important;
	color: white !important;
	cursor: pointer;
}
</style>

