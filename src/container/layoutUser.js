// @flow 
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import LayoutUser from '../pages/userLayout';
import * as actionSign from "../redux/actions/signAction"
import * as actionAlert from "../redux/actions/alertAction"
export const layoutUserContainer = ({ openSignIn, handleOpen, openAlert, alertChange }) =>
{
    //console.log(handleOpen(), "handleOpen")
    return (
        <LayoutUser
            openSignIn={openSignIn}
            handleOpen={handleOpen}
            openAlert={openAlert}
            alertChange={alertChange}
        />
    );
};
// state
const mapStateToProps = state => ({
    openSignIn: state.openSignIn,
    openAlert: state.alert
});
//check type props
layoutUserContainer.propTypes = {
    openSignIn: PropTypes.bool,
    openAlert: PropTypes.shape({
        open: PropTypes.bool,
        notice: PropTypes.bool,
        patch: PropTypes.string,
        message: PropTypes.string
    })

};
const mapDispatchToProps = {
    //  add Cart
    handleOpen: (open) => actionSign.openSignIn(open),
    // Alert change
    alertChange: (payload) => actionAlert.alertChange(payload),

};
export default connect(mapStateToProps, mapDispatchToProps)(layoutUserContainer)