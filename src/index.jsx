import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './containers/App';
import initialState from './initialState';

// const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
// const store = createStoreWithMiddleware(reducers, initialState);
const store = createStore(reducers, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('myApp')
);
