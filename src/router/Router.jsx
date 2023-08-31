import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../components/home/Home';
import Blog from '../components/blog/Blog';
import Signup from '../components/signup/Signup';
import Signin from '../components/signin/Signin';
import EveryRecipe from '../components/recipes/EveryRecipe';
import Private from '../PrivateRoute/Private';
import ErrorPage from '../components/errorPage/ErrorPage';

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
        path: '/every-recipe/:id',
        element: (
          <Private>
            <EveryRecipe></EveryRecipe>
          </Private>
        ),
        loader: async ({ params }) => {
          return await fetch(
            `http://localhost:3000/recipes_person/everyrecipes/${params.id}`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            }
          );
        },
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>,
  },
]);
