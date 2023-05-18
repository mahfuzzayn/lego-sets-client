import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import AddAToy from "../pages/AddAToy/AddAToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/add-a-toy",
                element: <AddAToy></AddAToy>,
            },
        ],
    },
]);

export default router;
