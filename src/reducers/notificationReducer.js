import { Map } from 'immutable';

export default (state = Map(), action) => {
  switch (action.type) {
    case 'CLOSE_NOTIFICATION' :
      return state.remove('newMessage');
    case 'REPLY_NOTIFICATION':
      return state.remove('newMessage')
                  .update('currentChat', () => action.userName);
    default:
      return state;
  }
};
