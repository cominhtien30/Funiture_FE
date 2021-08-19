import React, { useState, useEffect, useCallback } from 'react';
import "../App.css"
// -----
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "font-awesome/css/font-awesome.min.css"
// --------
import { Outlet } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
// conponennt
import Header from "../component/user/header"
import Footer from "../component/user/footer/footer"
import Chat from "../commons/chatComponent/chat"
import CartFixed from "../component/user/cartFixed"
import Login from "../container/login"
import Register from "../component/user/popupAuthen/register"
import Alert from "../commons/alert"
// ----global
import GlobalCss from "../global.styles"
function App({ openSignIn, handleOpen, openAlert, alertChange })
{

    const [openSignup, setOpenSignup] = useState(false)
    // khi openSignIn openSignup thay đổi làm component reRender
    // thì sẽ kiểm tra xem có popup nào mở không, nếu có thì block scroll
    useEffect(() =>
    {
        const body = document.querySelector('body');
        openSignIn || openSignup ? disableBodyScroll(body) :
            (!openSignIn && !openSignup) ? enableBodyScroll(body) : disableBodyScroll(body)
    }, [openSignIn, openSignup]);


    // viết useCallback để khi không dùng hàm thì sẽ không Created
    // open popup register
    const handleOpenSignUp = useCallback((open) =>
    {

        setOpenSignup(open)

    }, [openSignup])
    // close all poppup
    const handleClearPopup = useCallback(() =>
    {

        setOpenSignup(false)
        handleOpen(false)

    }, [openSignIn])
    // reder popup
    const formAuth = () =>
    {
        return openSignIn
            ? openSignup
                ? <Register handleClearPopup={handleClearPopup} handleOpenSignUp={handleOpenSignUp} />
                : <Login handleClearPopup={handleClearPopup} handleOpenSignUp={handleOpenSignUp} />
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
                <Header handleOpen={handleOpen} />
                <div className="container-fluid">
                    <Outlet />
                </div>
                {/* popup auth */}
                {formAuth()}
                {/* menu cart */}
                <CartFixed />
                {/* icon chat */}
                {/* alert */}
                {openAlert.open && <Alert openAlert={openAlert} handleOpen={handleOpen} alertChange={alertChange} />}
                <Chat />
                <Footer />
                {/* layout user */}

            </div>

        </React.Fragment>
    );
}

export default (App);
