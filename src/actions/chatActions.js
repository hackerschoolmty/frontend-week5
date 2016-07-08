import { generateResponse } from '../utils/chatHelper';

export default
{
  selectChat: (usrName) => {
    return {
      type: 'SELECT_CHAT',
      user: usrName
    }
  },
  createResponse: () => (dispatch, getState) => {
    const currentState = getState();
    const currentChat = currentState.getIn(['chats', 'currentChat']);
    if (currentState.get('userList').includes(currentChat)) {
      generateResponse(currentChat).then((msg) => {
        dispatch({
          type: 'ADD_MESSAGE',
          msg: msg
        })
      })
    }
  },
  sendChat: (msg) => {
    return {
      type: 'ADD_MESSAGE',
      notifyGA: true,
      msg: msg
    }
  }
};
