import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Main from "../layout/Main";
import PrivateRoute from "../routers/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/course-details/:id',
                element: <CourseDetails />
            },
            {
                path: '/checkout/:id',
                loader: ({params}) => fetch(`https://programming-info.vercel.app/checkout/${params.id}`),
                element: <PrivateRoute><CheckOut /></PrivateRoute>
            }
        ]
    }
])