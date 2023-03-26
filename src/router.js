import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './screens/Layout';
import Home from './screens/Home';
import About from './screens/About';
import UserList from './screens/UserList';
import UnknownRoute from './screens/UnkownRoute';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'infos', element: <About /> },
      { path: 'users', element: <UserList /> },
      { path: '*', element: <UnknownRoute /> },
    ]
  },
  { path: 'about', element: <Navigate to='/infos' replace /> }
])