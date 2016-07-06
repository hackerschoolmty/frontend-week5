export default
{
  addUser: (newUserName) => {
    return {
      type: 'ADD_USER',
      user: newUserName
    }
  }
};
