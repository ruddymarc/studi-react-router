import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './screens/Layout';
import Home from './screens/Home';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    ]
  }
])