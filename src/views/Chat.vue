<template>
	<div class="card">
		<div class="card-header msg_head">
			<Contact :user="$store.state.chatUser"></Contact>
		</div>
		<div class="card-body msg_card_body" id="messages">
			<Message></Message>
		</div>
		<div class="card-footer">
			<TypeMessage></TypeMessage>
		</div>
	</div>
</template>

<script>
import Message from "../components/Message";
import TypeMessage from "../components/TypeMessage";
import Contact from '../components/Contact'
export default {
	components: {
		Contact,
		Message,
		TypeMessage
	},
	data(){
		return{
			
		}
	}
};
</script>

<style>
.msg_card_body {
	overflow-y: auto;
}
.msg_head {
	position: relative;
}
</style>


