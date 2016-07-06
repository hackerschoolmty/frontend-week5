import { Map, List } from 'immutable';

export default (state = Map(), action) => {
  switch (action.type) {
    case 'CLOSE_NOTIFICATION' :
      return state.remove('newMessage');
    case 'REPLY_NOTIFICATION':
      return state.remove('newMessage')
                  .update('currentChat', () => action.userName);
    case 'ADD_USER': {
      console.log(action);
      console.log('oldState', state.toJS());
      const userList = state.get('userList').push(action.user);
      const newState = state.set('userList', userList);
      console.log('newState', newState.toJS());
      return newState;
    }
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
