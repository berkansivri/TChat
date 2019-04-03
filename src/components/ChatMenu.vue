<template>
	<div class="menu-chat">
		<span id="action_menu_btn">
			<i class="fas fa-ellipsis-v"></i>
		</span>
		<div class="action_menu">
			<ul>
				<li>
					<i class="fas fa-user-circle"></i> View profile
				</li>
				<li>
					<i class="fas fa-users"></i> Add to close friends
				</li>
				<li>
					<i class="fas fa-plus"></i> Add to group
				</li>
				<li>
					<i class="fas fa-ban"></i> Block
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {};
</script>

<style>
#action_menu_btn {
	position: absolute;
	right: 10px;
	top: 10px;
	color: white;
	cursor: pointer;
	font-size: 20px;
}
.action_menu {
	z-index: 1;
	position: absolute;
	padding: 15px 0;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	border-radius: 15px;
	top: 30px;
	right: 15px;
	display: none;
}
.action_menu ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
.action_menu ul li {
	width: 100%;
	padding: 10px 15px;
	margin-bottom: 5px;
}
.action_menu ul li i {
	padding-right: 10px;
}
.action_menu ul li:hover {
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.2);
}
</style>

