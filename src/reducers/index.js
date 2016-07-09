import { combineReducers } from 'redux-immutable';
import userList from './userListReducer';
import notification from './notificationReducer';
import chats from './chatsReducer';
import currentChat from './currentChatReducer';
import routing from './routingReducer';

export default combineReducers({
  userList,
  notification,
  chats,
  currentChat,
  routing
});
