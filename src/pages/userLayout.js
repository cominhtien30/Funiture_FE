import React, { useState } from 'react';
import "../App.css"
// -----
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "font-awesome/css/font-awesome.min.css"
// --------
import { Outlet } from 'react-router-dom';

// conponennt
import Header from "../container/headerUser"
import Footer from "../component/user/footer/footer"
import Chat from "../commons/chatComponent/chat"
import CartFixed from "../component/user/cartFixed"
import Login from "../component/user/popupAuthen/login"
import Register from "../component/user/popupAuthen/register"
// ----global
import GlobalCss from "../global.styles"
function App({ openSignIn, handleOpen })
{
    const [openSignup, setOpenSignup] = useState(false)
    const handleOpenSignUp = (open) =>
    {
        setOpenSignup(open)
    }
    const formAuth = () =>
    {
        return openSignIn
            ? openSignup
                ? <Register handleSignIn={handleOpen} handleOpenSignUp={handleOpenSignUp} />
                : <Login handleSignIn={handleOpen} handleOpenSignUp={handleOpenSignUp} />
            : ""
    }

    return (
        <React.Fragment>
            <div className={`App `}>
                {/* layout user */}
                {/* -------------------------- */}
                {/* global style */}
                <GlobalCss />
                {/* -------------------------- */}
                <Header />
                <div className="container-fluid">
                    <Outlet />
                </div>
                {formAuth()}
                {/* <Register /> */}
                <CartFixed />
                <Chat />
                <Footer />
                {/* layout user */}
            </div>
        </React.Fragment>
    );
}

export default (App);
