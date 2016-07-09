import { fromJS } from 'immutable';

const initialState = fromJS({
	userList: [],
	chats: {
		currentChat: null
	}
});

export default initialState;
