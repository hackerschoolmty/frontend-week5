import { fromJS } from 'immutable';

const initialState = fromJS({
	userList: ['user_1', 'user_2'],
	currentChat: null,
	chats: [],
	appTitle: 'React Chat'
});

export default initialState;
