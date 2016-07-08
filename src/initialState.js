import { fromJS } from 'immutable';

const initialState = fromJS({
	userList: ['username'],
	currentChat: 'default',
	notification: {
		newMessage: true,
		UserName: 'username',
		Message: 'message'
	},
	chats: {
		userName: 'username',
		messageList: [
			{
				userName: 'username',
				message: 'test'
			}
		]
	}
});

export default initialState;
