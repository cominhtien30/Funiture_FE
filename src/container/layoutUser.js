// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LayoutUser from '../pages/userLayout'
import * as actionSign from '../redux/actions/signAction'
import * as actionAlert from '../redux/actions/alertAction'
export const layoutUserContainer = ({
    openSignIn,
    handleOpenSignIn,
    openAlert,
    alertChange,
    openLoading,
}) => {
    //console.log(handleOpen(), "handleOpen")
    return (
        <LayoutUser
            openLoading={openLoading}
            openSignIn={openSignIn}
            handleOpenSignIn={handleOpenSignIn}
            openAlert={openAlert}
            alertChange={alertChange}
        />
    )
}
// state
const mapStateToProps = (state) => ({
    openSignIn: state.openSignIn,
    openAlert: state.alert,
    openLoading: state.loading,
})
//check type props
layoutUserContainer.propTypes = {
    openLoading: PropTypes.bool,
    openSignIn: PropTypes.bool,
    openAlert: PropTypes.shape({
        open: PropTypes.bool,
        notice: PropTypes.bool,
        patch: PropTypes.string,
        message: PropTypes.string,
    }),
}
const mapDispatchToProps = {
    //  add Cart
    handleOpenSignIn: (open) => actionSign.openSignIn(open),
    // Alert change
    alertChange: (payload) => actionAlert.alertChange(payload),
    //loading
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(layoutUserContainer)
