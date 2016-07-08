import { Map, fromJS } from 'immutable';

export default (state = Map(), action) => {
  switch (action.type) {
    case 'SELECT_CHAT': {
      return state.update('currentChat', value => action.user);
    }
    case 'ADD_USER': {
      return state.set(action.user, fromJS(
        {userName: action.user, messageList: []}
      ));
    }
    case 'ADD_MESSAGE': {
      const currentChat = state.get('currentChat');
      const userList = state.getIn([currentChat, 'messageList']).push(action.msg);
      const newState = state.setIn([currentChat, 'messageList'], userList);
      return newState;
    }
    default:
      return state;
  }
};
