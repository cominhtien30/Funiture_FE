// @flow
import React, { useEffect, useState } from 'react'
import styles from './profile.style'
import { withTheme } from '@material-ui/core/styles'
import {
    Button,
    Typography,
    Grid,
    TextField,
    Avatar,
    FormControlLabel,
    Switch,
} from '@material-ui/core'
// service
import authService from '../../utils/AuthService'
import FeatureProduct from '../../component/user/featureProducts/featureProduct'
import DataGridOrder from '../../component/user/profile/dataGrid'
import { Element } from 'react-scroll'

const Profile = ({ theme, requestProfile }) => {
    //userProfile
    const [isEdit, setIsEdit] = useState(false)
    const [user, setUser] = useState({})
    const onGetSuccess = (profile) => {
        setUser(profile)
    }
    useEffect(() => {
        if (authService.isLogin() && authService.getAccount()) {
            requestProfile(authService.getAccount(), onGetSuccess)
        }
    }, [requestProfile])

    //  requestProfile(authService.getAccount())
    // requestProfile, getProfile
    const classes = styles()
    // styles row image

    return (
        <>
            <div
                className={`${classes.root} container-profile width-layout mt-4 mb-4`}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="caption" gutterBottom>
                            My Profile
                        </Typography>
                        <div className="d-flex align-item-center justify-content-center mt-5">
                            <Avatar
                                src={user?.avatar}
                                style={{
                                    color: 'white',
                                    backgroundColor:
                                        theme.palette.primary.main,
                                    width: '80px',
                                    height: '80px',
                                }}
                            >
                                N
                            </Avatar>
                        </div>
                        <form
                            action=""
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="d-flex flex-wrap">
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    value={
                                        !isEdit
                                            ? user?.fullname
                                            : null
                                    }
                                    required
                                    name="fullname"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    value={
                                        !isEdit ? user?.account : null
                                    }
                                    margin="normal"
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    label="Address"
                                    value={
                                        !isEdit ? user?.address : null
                                    }
                                    defaultValue=""
                                    name="address"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    label="Phone"
                                    value={
                                        !isEdit ? user?.phone : null
                                    }
                                    margin="normal"
                                    name="phone"
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    type="password"
                                    label="Password"
                                    required
                                    name="password"
                                    disabled={!isEdit}
                                    margin="normal"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={isEdit}
                                            onChange={() =>
                                                setIsEdit(!isEdit)
                                            }
                                            color="primary"
                                            name="checkedA"
                                            inputProps={{
                                                'aria-label':
                                                    'secondary checkbox',
                                            }}
                                        />
                                    }
                                    label="You Want To Edit ?"
                                />
                                <Button
                                    fullWidth
                                    disabled={!isEdit}
                                    type="submit"
                                    style={{
                                        margin: '12px auto',
                                    }}
                                >
                                    Accept
                                </Button>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="caption" gutterBottom>
                            Order
                        </Typography>
                        <Element name="scroll-to-order">
                            <DataGridOrder />
                        </Element>
                    </Grid>
                </Grid>
                <FeatureProduct />
            </div>
        </>
    )
}
export default withTheme(Profile)
