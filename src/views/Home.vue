<template>
	<div class="container-fluid h-100">
		<div class="row justify-content-center h-100">
			<div class="col-md-4 col-xl-3 chat">
				<Contacts></Contacts>
			</div>
			<div class="col-md-8 col-xl-6 chat">
				<Chat></Chat>
			</div>
		</div>
	</div>
</template>

<script>
import Contacts from "../views/Contacts";
import Chat from "./Chat";
export default {
	components: {
		Contacts,
		Chat
	},
	// beforeRouteLeave(to, from, next) {
	// 	if (to.name !== "Login") {
	// 		const answer = window.confirm("Do you really want to leave? you have unsaved changes!");
	// 		if (answer) {
	// 			console.log(answer);
	// 			next();
	// 		} else {
	// 			next(false);
	// 		}
	// 	}else{
	// 		next();
	// 	}
	// }
};
</script>

<style>
.message_icon {
	position: absolute;
	height: 25px;
	width: 25px;
	background-color: lightskyblue;
	border-radius: 40%;
	bottom: 3em;
	font-family: 'Times New Roman', Times, serif;
	font-weight: 700;
	left: 3.3em;
	color: #b30000;
	border: 1px solid rebeccapurple;
}
.online_icon {
	position: absolute;
	height: 13px;
	width: 13px;
	background-color: #4cd137;
	border-radius: 50%;
	bottom: 0.2em;
	right: 0.4em;
	border: 1.4px solid white;
}
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
}
.card-footer {
	border-radius: 0 0 15px 15px !important;
	border-top: 0 !important;
}
.container {
	align-content: center;
}

.user_img {
	height: 70px;
	width: 70px;
	border: 1.5px solid #f5f6fa;
}

.img_cont {
	position: relative;
	height: 70px;
	width: 70px;
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
