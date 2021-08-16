// @flow 
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import LayoutUser from '../pages/userLayout';
import * as actions from "../redux/actions/signAction"
export const layoutUserContainer = ({ openSignIn, handleOpen }) =>
{

    return (
        <LayoutUser
            openSignIn={openSignIn}
            handleOpen={handleOpen}
        />
    );
};
// state
const mapStateToProps = state => ({
    openSignIn: state.openSignIn,
});
//check type props
layoutUserContainer.propTypes = {
    openSignIn: PropTypes.bool
};
const mapDispatchToProps = {
    //  add Cart
    handleOpen: (open) => actions.openSignIn(open),

};
export default connect(mapStateToProps, mapDispatchToProps)(layoutUserContainer)