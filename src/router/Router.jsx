import { createBrowserRouter } from 'react-router-dom';

import Blog from '../components/Blog';
import Layout from '../Layout';
import Home from '../components/Home';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import EveryRecipe from '../components/EveryRecipe';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/signin',
        element: <Signin></Signin>,
      },
      {
        path: '/every-recipe',
        element: <EveryRecipe></EveryRecipe>,
      },
    ],
  },
]);
