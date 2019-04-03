<template>
	<div class="card">
		<div class="card-header msg_head">
			<ChatContact></ChatContact>
		</div>
		<div class="card-body msg_card_body">
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


