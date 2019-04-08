<template>
	<div class="input-group">
		<input type="text" placeholder="Search..." class="form-control search" v-model="searchText">
		<div class="input-group-prepend">
			<span class="input-group-text search_btn">
				<i class="fas fa-search"></i>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchText: ""
		};
	},
	watch:{
		searchText(text){
			this.$store.commit("setSearch", text)
		}
	}
};
</script>

<style scoped>
.search {
	border-radius: 15px 0 0 15px !important;
	background-color: rgba(0, 0, 0, 0.3) !important;
	border: 0 !important;
	color: white !important;
}
.search:focus {
	box-shadow: none !important;
	outline: 0px !important;
}
.search_btn {
	border-radius: 0 15px 15px 0 !important;
	background-color: rgba(0, 0, 0, 0.3) !important;
	border: 0 !important;
	color: white !important;
	cursor: pointer;
}
</style>
