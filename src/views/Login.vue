<template>
	<div class="container">
		<div class="card card-login mx-auto text-center bg-dark">
			<div class="card-header mx-auto bg-dark">
				<span> <img src="../../public/logo.png" class="w-25 h-25" alt="Logo"> </span><br />
				<span class="logo_title mt-5"> Login TChat </span>
			</div>
			<div class="card-body">
				<form action="" method="post">
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" v-model="username" @keydown.enter.prevent="login" class="form-control" placeholder="Name">
					</div>
						<p class="alert alert-dark small"> * Your information will be stored for your next entry</p>
					<div class="form-group">
						<input @click="login" class="btn btn-outline-danger float-right login_btn" value="Login" type="button">
					</div>

				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: "",
		};
	},
	methods: {
		login() {
			this.$api.addUser(this.username).then( id => {
				
				var session = {id, username: this.username};
				this.$store.commit("setSession", session);
				//this.$cookie.set("session", JSON.stringify(session));

				this.$api.subUsers();
				this.$mq.connect();
				this.$router.push("/");
				})
		}
	}
};
</script>

<style scoped>
.card {
	border: 1px solid #28a745;
	height: auto;
}
.card-login {
	margin-top: 130px;
	padding: 18px;
	max-width: 30rem;
}

.card-header {
	color: #fff;
	/*background: #ff0000;*/
	font-family: sans-serif;
	font-size: 20px;
	font-weight: 600 !important;
	margin-top: 10px;
	border-bottom: 0;
}

.input-group-prepend span {
	width: 50px;
	background-color: #ff0000;
	color: #fff;
	border: 0 !important;
}

input:focus {
	outline: 0 0 0 0 !important;
	box-shadow: 0 0 0 0 !important;
}

.login_btn {
	width: 130px;
}

.login_btn:hover {
	color: #fff;
	background-color: #ff0000;
}

.btn-outline-danger {
	color: #fff;
	font-size: 18px;
	background-color: #28a745;
	background-image: none;
	border-color: #28a745;
}

.form-control {
	display: block;
	width: 100%;
	height: calc(2.25rem + 2px);
	padding: 0.375rem 0.75rem;
	font-size: 1.2rem;
	line-height: 1.6;
	color: #28a745;
	background-color: transparent;
	background-clip: padding-box;
	border: 1px solid #28a745;
	border-radius: 0;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.input-group-text {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	padding: 0.375rem 0.75rem;
	margin-bottom: 0;
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1.6;
	color: #495057;
	text-align: center;
	white-space: nowrap;
	background-color: #e9ecef;
	border: 1px solid #ced4da;
	border-radius: 0;
}
</style>
