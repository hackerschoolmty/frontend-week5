import { fromJS } from 'immutable';

const initialState = fromJS({
	userList: ['username'],
	currentChat: 'default',
	notification: {
		UserName: 'username',
		Message: 'message'
	},
	newMessage: true,
	chats: {
		userName: 'username',
		messageList: [
			{
				userName: 'username',
				message: 'test'
			}
		]
	},
	appTitle: 'React Chat'
});

export default initialState;
