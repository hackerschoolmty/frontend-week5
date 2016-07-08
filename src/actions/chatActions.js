export default
{
  sendChat: (msg) => {
    return {
      type: 'ADD_MESSAGE',
      notifyGA: true,
      message: msg
    }
  }
};
