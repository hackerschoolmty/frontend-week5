import { fromJS } from 'immutable';

const initialState = fromJS({
	userList: ['user_1', 'user_2'],
	currentChat: {
		userName: 'user_1',
		messageList:[
			{
				userName: 'You',
				message: 'hey'
			},
			{
				userName: 'user_1',
				message: 'hola'
			}
		]
	},
	appTitle: 'React Chat'
});

export default initialState;
