import { fromJS } from 'immutable';

const initialState = fromJS({
	userList: [],
	notification: {
		newMessage: false,
		UserName: 'username',
		Message: 'message'
	},
	chats: {
		currentChat: null
	}
});

export default initialState;
