import { Map } from 'immutable';

export default (state = Map(), action) => {
  switch (action.type) {
    case 'ADD_USER':
      return state.push(action.user);
    default:
      return state;
  }
};
