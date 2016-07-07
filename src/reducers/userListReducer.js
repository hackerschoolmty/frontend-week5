import { Map } from 'immutable';

export default (state = Map(), action) => {
  switch (action.type) {
    case 'ADD_USER': {
      console.log(action);
      console.log('oldState', state.toJS());
      const newState = state.push(action.user);
      console.log('newState', newState.toJS());
      return newState;
    }
    default:
      return state;
  }
};
