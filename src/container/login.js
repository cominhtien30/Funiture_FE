// @flow
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as authActions from "../redux/actions/authAction"
import ComponentLogin from "../component/user/popupAuthen/login"

function login({ requestLogin, handleClearPopup, handleOpenSignUp })
{

    return (
        <ComponentLogin requestLogin={requestLogin} handleOpenSignUp={handleOpenSignUp} handleClearPopup={handleClearPopup} />
    );
};
const mapDispatchToProps = {
    requestLogin: (user) => authActions.requestLogin(user),
};
export default connect(null, mapDispatchToProps)(login)