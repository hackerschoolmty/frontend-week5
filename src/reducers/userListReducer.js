import { Map } from 'immutable';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER': {
      console.log(action);
      const newUser = action.user;
      let newList = state.slice();
      newList.push(newUser);
      return newList;
    }
    default:
      return state;
  }
};
