import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import SideChat from './containers/SideChat';
import ChatTable from './containers/ChatTable';


export default (
  <Route path="/" component={App}>
    <IndexRoute components={{ main: Home, sideNav: SideChat }} />
    <Route
      path="home"
      components={{
        main: Home, sideNav: SideChat
      }}
    />
    <Route
      path="chat/:userName"
      components={{
        main: ChatTable, sideNav: SideChat
      }}
    />
    <Redirect from="*" to="/" />
  </Route>
);
