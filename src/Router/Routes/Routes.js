import { createBrowserRouter } from "react-router-dom";
import AppointmentDoctor from "../../Pages/AppointmentDoctor/AppointmentDoctor/AppointmentDoctor";
import AddDoctor from "../../Pages/Dashboard/AddDoctor";
import AllUsers from "../../Pages/Dashboard/Dashboard/AllUsers";
import ManageDoctor from "../../Pages/Dashboard/Dashboard/ManageDoctor";
import MyAppointment from "../../Pages/Dashboard/Dashboard/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import DashboardLayout from "../../Pages/Layout/Main/DashboardLayout";
import Main from "../../Pages/Layout/Main/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<AppointmentDoctor></AppointmentDoctor>
            }

        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard/myappointment',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path:'/dashboard/admin/adddoctors',
                element:<AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path:'/dashboard/admin/managedoctor',
                element:<AdminRoutes><ManageDoctor></ManageDoctor></AdminRoutes>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>
            },
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
])