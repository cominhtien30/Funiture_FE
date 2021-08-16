// @flow 
import * as React from 'react';
import Header from "../component/user/header"
import { connect } from "react-redux";
import * as signActions from "../redux/actions/signAction"
import * as authActions from "../redux/actions/authAction"
export const headerUser = ({ handleOpen, requestLogin }) =>
{

    return (
        <Header
            requestLogin={requestLogin}
            handleOpen={handleOpen}
        />
    );
};
//DISPATCH
const mapDispatchToProps = {
    //  add Cart
    handleOpen: (open) => signActions.openSignIn(open),
    //  reques Login
    requestLogin: () => authActions.requestLogin(),
};
export default connect(null, mapDispatchToProps)(headerUser)