import { createBrowserRouter } from 'react-router-dom';
import Home from '../screens/Home/Home';
import Products from "../screens/products/Products";
import Details from '../screens/Details/Details';
import About from '../screens/About/About';
import Faviroute from '../screens/Faviroute/Faviroute';
import NotFound from '../screens/Not_Found/NotFound';
import Wishlist from '../screens/Wishlist/Wishlist';
import Login from '../screens/Login/Login';
import Sign from '../screens/SignUp/Sign';
import Layout from '../components/Layout/Layout';
import Contact from '../screens/Contact/Contacct'
import ProtectedProut from '../components/ProtectedRoute/AuthRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const router= createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <NotFound />
      },
      {
        path: 'details/:id',
        element: <Details />,
        errorElement: <NotFound />
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <NotFound />
      },
      {
       path: 'contact',
       element:<Contact/>,
       errorElement: <NotFound />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
       path: 'favourte',
        element: <ProtectedProut />,
        children:[{
          index:true,
          element:<Faviroute/>
        }
        ]
      },
    ]
  },


      {
        path: 'Wishlist',
        element: <Wishlist />
      },

      {
        path: 'register',
        element: <Sign />
      },
      {
        path: '*',
        element: <NotFound />
      }


]);

export default router;
