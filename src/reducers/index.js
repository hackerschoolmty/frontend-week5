import { Map, List } from 'immutable';
// import { combineReducers } from 'redux-immutable';
// import userList from './userListReducer';
//
// export default combineReducers({
//   userList,
//   currentChat,
//   newMessage,
//   chats,
//   appTitle
// });

export default (state = Map(), action) => {
  switch (action.type) {
    case 'CLOSE_NOTIFICATION' :
      return state.remove('newMessage');
    case 'REPLY_NOTIFICATION':
      return state.remove('newMessage')
                  .update('currentChat', () => action.userName);
    case 'ADD_MESSAGE': {
      console.log(action);
      console.log('oldState', state.toJS());
      const userList = state.getIn(['chats', action.msg.userName, 'messageList']).push(action.msg);
      const newState = state.setIn(['chats', action.msg.userName, 'messageList'], userList);
      console.log('newState', newState.toJS());
      return newState;
    }
    default:
      return state;
  }
};
