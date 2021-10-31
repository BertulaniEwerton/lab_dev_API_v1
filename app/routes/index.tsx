import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const IsAuthenticated = false;
  return IsAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
