import React from "react"
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LayoutUser from "../container/layoutUser"
import LayoutAdmin from "../pages/layoutAdmin"
// screens
// user
import Home from "../screens/home/home"
import Products from "../container/userProducts"
import Cart from '../screens/cart/cart'
import Checkout from '../screens/checkout/checkout'
import Profile from '../screens/profileUser/profile'
import Detail from '../screens/detail/detail'
import WishList from '../screens/wishList/wishList'
import Error from '../screens/user404'
// admin
import Dashboard from "../screens/adminDashboard/adminDashboard";
import ManageProducts from "../screens/adminProduct/adminProduct"


// ----------------------------------------------------------------------

export default function Router()
{
    return useRoutes([
        {
            path: '',
            element: <LayoutUser />,
            children: [
                { path: '', element: <Navigate to="/home" replace /> },
                { path: 'home', element: <Home /> },
                { path: 'products', element: <Products /> },
                { path: 'detail', element: <Detail /> },
                { path: 'wishList', element: <WishList /> },
                { path: 'cart', element: <Cart /> },
                { path: 'checkout', element: <Checkout /> },
                { path: 'profile', element: <Profile /> },
                { path: '404', element: <Error /> }
            ]
        },
        {
            path: 'admin',
            element: <LayoutAdmin />,
            children: [
                { path: '', element: <Navigate to="./dashboard" replace /> },
                { path: 'dashboard', element: <Dashboard /> },
                { path: 'products', element: <ManageProducts /> },
            ]
        },

        // 404
        { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}