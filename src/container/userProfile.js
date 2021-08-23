// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/useAction'
import ScreenUserProfile from '../screens/profileUser/profile'

function userProfile({ userProfile, requestProfile }) {
    return (
        <ScreenUserProfile
            userProfile={userProfile}
            requestProfile={requestProfile}
        />
    )
}
const mapStateToProps = (state) => ({
    userProfile: state.userProfile,
})
//DISPATCH
const mapDispatchToProps = {
    //  rq profile
    requestProfile: (account, onGetSuccess) =>
        actions.requestProfile(account, onGetSuccess),
}
//check type props
userProfile.propTypes = {
    userProfile: PropTypes.shape({
        id: PropTypes.number,
        account: PropTypes.string,
        fullname: PropTypes.string,
        phone: PropTypes.number,
        avatar: PropTypes.string,
        address: PropTypes.string,
    }),
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(userProfile)
