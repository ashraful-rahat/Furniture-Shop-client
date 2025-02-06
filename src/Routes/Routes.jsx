import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Furniture from "../Pages/Furniture";
import Home from "../Pages/Home";

const router =createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
              path: '/',
              element: <Home></Home>,
            },
            {
                path: '/furniture',
                element:<Furniture></Furniture> ,
              },

              {
                path: "/about",
                element: <About></About>,
              },
              {
                path: "/contact",
                element: <Contact></Contact>,
              },
        ]
    }
])

export default router;