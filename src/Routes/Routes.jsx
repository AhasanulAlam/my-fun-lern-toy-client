import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import MyToys from "../pages/MyToys/MyToys";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SingleToy from "../pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../pages/AddToy/AddToy";
import UpdateToy from "../pages/MyToys/UpdateToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'alltoys',
          element: <AllToys></AllToys>
        },
        {
          path: 'mytoys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: 'addToy',
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'toy/:id',
          element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
          path: 'updatetoy/:id',
          element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/updatetoy/${params.id}`)
        }
      ]
    },
  ]);

export default router;