<template>
	<div class="card" v-if="Object.keys($store.state.chatUser).length">
		<div class="card-header msg_head">
			<ChatContact></ChatContact>
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
import ChatContact from "../components/ChatContact";
import Message from "../components/Message";
import TypeMessage from "../components/TypeMessage";
export default {
	components: {
		ChatContact,
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


