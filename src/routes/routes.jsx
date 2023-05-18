import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import AddAToy from "../pages/AddAToy/AddAToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import Toy from "../pages/Toy/Toy";

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
                path: "/all-toys",
                element: <AllToys></AllToys>,
                loader: () => fetch("http://localhost:5000/all-toys/"),
            },
            {
                path: "/my-toys",
                element: (
                    <PrivateRoute>
                        <MyToys></MyToys>
                    </PrivateRoute>
                ),
            },
            {
                path: "/add-a-toy",
                element: (
                    <PrivateRoute>
                        <AddAToy></AddAToy>
                    </PrivateRoute>
                ),
            },
            {
                path: "/toy/:id",
                element: (
                    <PrivateRoute>
                        <Toy></Toy>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/toy/${params.id}`),
            },
        ],
    },
]);

export default router;
