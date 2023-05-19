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
          element: <MyToys></MyToys>
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
          element: <SingleToy></SingleToy>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        }
      ]
    },
  ]);

export default router;