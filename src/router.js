import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './screens/Layout';
import Home from './screens/Home';
import About from './screens/About';
import Search from './screens/Search';
import UserList from './screens/UserList';
import UserDetails from './screens/UserDetails';
import UnknownRoute from './screens/UnkownRoute';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'infos', element: <About /> },
      { path: 'search', element: <Search /> },
      { path: 'users', element: <UserList /> },
      { path: 'user/:userId', element: <UserDetails /> },
      { path: '*', element: <UnknownRoute /> },
    ]
  },
  { path: 'about', element: <Navigate to='/infos' replace /> }
])