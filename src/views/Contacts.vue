<template>
	<div class="card mb-sm-3 mb-md-0 contacts_card">
		<div class="card-header">
			<Search></Search>
		</div>
		<div class="card-body contacts_body">
			<div class="contacts">
				<li v-for="user in $store.getters.getOnlineUsers" :key="user.id">
					<Contact :user="user"></Contact>
				</li>
			</div>
		</div>
		<div class="card-footer">Total: {{$store.getters.getOnlineUsers.length}}</div>
	</div>
</template>

<script>
import Search from "../components/Search";
import Contact from "../components/Contact";
export default {
	components: {
		Search,
		Contact
	},
	beforeCreate() {
		if (this.$store.state.session === {}) {
			this.$router.push("/login");
		} else {
			this.$api.getUsers();
		}
	},
	created() {

	},
	mounted() {

	}
};
</script>

<style>
.contacts_body {
	padding: 0.75rem 0 !important;
	overflow-y: auto;
	white-space: nowrap;
}
.contacts {
	list-style: none;
	padding: 0;
}
.contacts li {
	width: 100% !important;
	padding: 5px 10px;
	margin-bottom: 15px !important;
}
.active {
	background-color: rgba(0, 0, 0, 0.3);
}
@media (max-width: 576px) {
	.contacts_card {
		margin-bottom: 15px !important;
	}
}
</style>
