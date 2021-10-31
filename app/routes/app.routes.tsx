import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from 'app/pages/Dashboard/Home';
import Profile from 'app/pages/Dashboard/Profile';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
