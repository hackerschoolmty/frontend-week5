import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers';
import App from './containers/App';
import initialState from './initialState';
import gaMiddleware from './middleware/googleAnalytics';
import logger from './middleware/logger';
import filter from './middleware/filter';
import thunk from 'redux-thunk';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
  thunk, filter, gaMiddleware, logger
)(createStore);
const store = createStoreWithMiddleware(reducers, initialState);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => {
    console.log(state.get('routing').toJS());
    return state.get('routing').toJS()
  }
});
console.log(history);
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('myApp')
);
