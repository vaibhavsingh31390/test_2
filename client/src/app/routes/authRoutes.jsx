import React from 'react';
import { LazyWithAuth } from '../components/hoc/WithAuth';
const Login = React.lazy(() => import('../pages/auth/Login'));
const Register = React.lazy(() => import('../pages/auth/Register'));

export const authRoutes = [
  {
    path: '/',
    element: <LazyWithAuth Component={Login} isPublic={true} />,
  },
  {
    path: '/register',
    element: <LazyWithAuth Component={Register} isPublic={true} />,
  },
];
