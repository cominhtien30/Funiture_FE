import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
// layouts
import LayoutUser from '../container/layoutUser'
import LayoutAdmin from '../pages/layoutAdmin'
// screens
// user
import Home from '../screens/home/home'
import Products from '../container/userProducts'
import Cart from '../screens/cart/cart'
import Checkout from '../screens/checkout/checkout'
import Profile from '../container/userProfile'
import Detail from '../screens/detail/detail'
import WishList from '../screens/wishList/wishList'
import Error from '../screens/user404'
// admin
import Dashboard from '../screens/adminDashboard/adminDashboard'
import ManageProducts from '../container/adminProduct'
// AuthService
import AuthService from '../utils/AuthService'

// ----------------------------------------------------------------------

export default function Router() {
    //const dispatch = useDispatch();
    const isLogin = AuthService.isLogin()
    const isAdmin = AuthService.isAdmin()
    return useRoutes([
        {
            path: '',
            element: <LayoutUser />,
            children: [
                {
                    path: '',
                    element: <Navigate to="/home" replace />,
                },
                {
                    path: 'home',
                    state: null,
                    element: <Home />,
                },
                {
                    path: 'products',
                    element: <Products />,
                },
                {
                    path: 'detail',
                    element: <Detail />,
                },
                {
                    path: 'wishlist',
                    element: isLogin ? (
                        <WishList />
                    ) : (
                        <Navigate to="/home" replace />
                    ),
                },
                {
                    path: 'cart',
                    element: isLogin ? (
                        <Cart />
                    ) : (
                        <Navigate to="/home" replace />
                    ),
                },
                {
                    path: 'checkout',
                    element: isLogin ? (
                        <Checkout />
                    ) : (
                        <Navigate to="/home" replace />
                    ),
                },
                {
                    path: 'profile',
                    element: isLogin ? (
                        <Profile />
                    ) : (
                        <Navigate to="/home" replace />
                    ),
                },
            ],
        },
        {
            path: 'admin',
            element:
                isLogin && isAdmin ? (
                    <LayoutAdmin />
                ) : (
                    <Navigate to="/" replace />
                ),
            children: [
                {
                    path: '',
                    element: <Navigate to="./dashboard" replace />,
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                },
                {
                    path: 'products',
                    element: <ManageProducts />,
                },
            ],
        },

        // 404
        { path: '404', element: <Error /> },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ])
}
// ---------------------------------------handle isLogin
