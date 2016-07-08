import { generateNewUser } from '../utils/chatHelper'

export default
{
  addUser: () => (dispatch, getState) => {
    generateNewUser().then((usrName) => {
      dispatch({
        type: 'ADD_USER',
        user: usrName
      });
    });
    dispatch({type: 'WAITING'});
  }
};
