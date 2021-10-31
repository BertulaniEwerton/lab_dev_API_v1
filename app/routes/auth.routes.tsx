import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Register from 'app/pages/Register';
import Login from 'app/pages/Register/Login.page';
import Welcome from '../pages/Welcome';

const AuthRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default AuthRoutes;
