<template>
	<div class="card mb-sm-3 mb-md-0 contacts_card">
		<div class="card-header">
			<Search></Search>
		</div>
		<div class="card-body contacts_body">
			<div class="contacts">
				<li class="active">
					<Contact></Contact>
				</li>
				<li>
					<Contact></Contact>
				</li>
				<li>
					<Contact></Contact>
				</li>
			</div>
		</div>
		<div class="card-footer">Total: 3</div>
	</div>
</template>

<script>
import Search from "../components/Search";
import Contact from "../components/Contact";
export default {
	components: {
		Search,
		Contact
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
