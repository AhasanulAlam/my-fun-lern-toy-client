import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import MyToys from "../pages/MyToys/MyToys";

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
        }
      ]
    },
  ]);

export default router;