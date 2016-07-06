export default
{
  sendChat: (msg) => {
    return {
      type: 'ADD_MESSAGE',
      message: msg
    }
  }
};
