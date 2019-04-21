<template>
	<div class="container-fluid h-100">
		<div class="row justify-content-center h-100">
			<div class="col-md-4 col-xl-3 chat">
				<Contacts></Contacts>
			</div>
			<div class="col-md-8 col-xl-6 chat">
				<Chat v-if="Object.keys($store.state.chatUser).length"></Chat>
			</div>
		</div>
	</div>
</template>

<script>
import Contacts from "../views/Contacts";
import Chat from "./Chat";
import Auth from '../services/Auth.js'
export default {
	components: {
		Contacts,
		Chat
	},
};
</script>

<style>
.chat {
	margin-top: auto;
	margin-bottom: auto;
}
.card {
	height: 500px;
	border-radius: 15px !important;
	background-color: rgba(0, 0, 0, 0.4) !important;
}

.card-header {
	border-radius: 15px 15px 0 0 !important;
	border-bottom: 0 !important;
	padding: 0.5rem 1.25rem !important; 
}
.card-footer {
	border-radius: 0 0 15px 15px !important;
	border-top: 0 !important;
}
.container {
	align-content: center;
}

.user_info {
	margin-top: auto;
	margin-bottom: auto;
	margin-left: 15px;
}
.user_info span {
	font-size: 20px;
	color: white;
}
.user_info p {
	font-size: 10px;
	color: rgba(255, 255, 255, 0.6);
}
</style>
