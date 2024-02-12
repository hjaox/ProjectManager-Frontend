import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './components/Homepage/components/Login.tsx';
import Guest from './components/Homepage/components/Guest.tsx';
import Register from './components/Homepage/components/Regsiter.tsx';
import Homepage from './components/Homepage/Homepage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Guest",
    element: <Guest/>
  },
  {
    path: "Register",
    element: <Register/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
