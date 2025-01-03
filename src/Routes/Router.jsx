import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/Order Food/OrderFood";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Pages/Dashboard/Cart/Cart";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";
import AllUser from "../Pages/Dashboard/AllUsers/AllUser";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <OrderFood></OrderFood>
        },
        {
          path: '/contact',
          element: <PrivateRoute><Contact></Contact></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashHome></DashHome></PrivateRoute>,
    children: [
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      },
      {
        path: '/dashboard/allusers',
        element: <AllUser></AllUser>
      }
    ]
  }
]);
