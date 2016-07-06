export function addUser(userName) {
  return {
    type: 'ADD_USER',
    user: userName
  };
}

export function addMessage(msg) {
  return {
    type: 'ADD_MESSAGE',
    message: msg
  };
}
