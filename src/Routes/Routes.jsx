import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element: <Blogs></Blogs>

        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element: <Signup></Signup>
        },
        {
            path:'/addtoy',
            element:<AddToy></AddToy>
        },
        {
            path:'/alltoy',
            element: <AllToys></AllToys>,
            loader: ()=> fetch('http://localhost:5000/toy')

        }
      ]
    },
  ]);

  export default router;