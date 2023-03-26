import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './screens/Layout';
import Home from './screens/Home';
import UnknownRoute from './screens/UnkownRoute';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <UnknownRoute /> },
    ]
  }
])