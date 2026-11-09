import React from 'react'
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';


const routers = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/browse',
    element: <Browse />
  }
]);

const Body = () => {
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default Body