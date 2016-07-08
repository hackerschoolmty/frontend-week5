import { Map } from 'immutable';

export default (state = Map(), action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      console.log(action);
      console.log('oldState', state.toJS());
      const userList = state.getIn([action.msg.userName, 'messageList']).push(action.msg);
      const newState = state.setIn([action.msg.userName, 'messageList'], userList);
      console.log('newState', newState.toJS());
      return newState;
    }
    default:
      return state;
  }
};
