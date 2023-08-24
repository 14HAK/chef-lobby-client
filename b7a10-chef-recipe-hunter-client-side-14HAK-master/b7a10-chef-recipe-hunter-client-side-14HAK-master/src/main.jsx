import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import ContextPass from './authContext/ContextPass';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextPass>
      <RouterProvider router={router}></RouterProvider>
    </ContextPass>
  </React.StrictMode>
);
