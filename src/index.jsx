import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './containers/App';
import initialState from './initialState';
import gaMiddleware from './middleware/googleAnalytics';
import logger from './middleware/logger';
import filter from './middleware/filter';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunk, filter, gaMiddleware, logger
)(createStore);
const store = createStoreWithMiddleware(reducers, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('myApp')
);
