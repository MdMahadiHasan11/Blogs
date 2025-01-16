import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../root/Root";
import Home from "../../pages/allUser/home/Home";
import Login from "../../pages/allUser/login/Login";
import SignUp from "../../pages/allUser/signUP/SignUp";
import ErrorPageShow from "../../pages/errorPageShow/ErrorPageShow";
import PrivateRoute from "../privateRoute/PrivateRoute";
import About from "../../pages/about/About";
import Blogs from "../../pages/allUser/home/blogs/Blogs";
import Epaper from "../../pages/epaper/Epaper";
import EPaperView from "../../pages/epaper/EPaperView";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPageShow></ErrorPageShow>,
        children: [
            {
                path: "/",
                element: <Blogs></Blogs>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/blog",
                element:<Blogs></Blogs>,
            },
            {
                path: "/epaper",
                element:<Epaper></Epaper>,
            },
            {
                path: "/epaperview",
                element:<EPaperView></EPaperView>,
            },
            // {
            //     path: "/allCategoryMedicines/:category",
            //     element: <AllCategoryMedicine></AllCategoryMedicine>,
            // },
            
        ]
    },


    // // seller
    // {
    //     path: "/sellerDashboard",
    //     element: <PrivateRoute><SellerRoute><SellerDashboard></SellerDashboard></SellerRoute></PrivateRoute>,
    //     errorElement: <ErrorPageShow></ErrorPageShow>,
    //     children: [
    //         {
    //             path: "/sellerDashboard",
    //             element: <SellerRoute><SellerDashboardRevenue></SellerDashboardRevenue></SellerRoute>,
    //         },
    //         {
    //             path: "manageMedicines",
    //             element: <SellerRoute><ManageMedicines></ManageMedicines></SellerRoute>,
    //         },
    //         {
    //             path: "paymentHistory",
    //             element: <SellerRoute><PaymentHistory></PaymentHistory></SellerRoute>,
    //         },
    //         {
    //             path: "sellerAdvertisement",
    //             element: <SellerRoute><Advertisement></Advertisement></SellerRoute>,
    //         },
    //     ]
    // },

    // // admin
    // {
    //     path: "/adminDashboard",
    //     element: <PrivateRoute><AdminRoute><AdminDashboard> </AdminDashboard></AdminRoute></PrivateRoute>,
    //     errorElement: <ErrorPageShow></ErrorPageShow>,
    //     children: [
    //         {
    //             path: "/adminDashboard",
    //             element: <AdminRoute><AdminRevenue></AdminRevenue></AdminRoute>,
    //         },
    //         {
    //             path: "manageUsers",
    //             element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
    //         },
    //         {
    //             path: "paymentManagement",
    //             element: <AdminRoute><PaymentManagement></PaymentManagement></AdminRoute>,
    //         },
    //         {
    //             path: "manageBannerAdvertisement",
    //             element: <AdminRoute><ManageBanner></ManageBanner></AdminRoute>,
    //         },
    //     ]
    // },

    // // user 
    // {
    //     path: "/userDashboard",
    //     element: <PrivateRoute><UserDashboard> </UserDashboard></PrivateRoute>,
    //     errorElement: <ErrorPageShow></ErrorPageShow>,
    //     children: [
    //     ]
    // }


]);

export default Router;
