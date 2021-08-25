// @flow
import React, { useEffect, useState } from 'react'
import styles from './profile.style'
import { withTheme } from '@material-ui/core/styles'
import authService from '../../utils/AuthService'
import ProgressBar from './progressBar'
import {
    Button,
    Typography,
    Grid,
    TextField,
    Avatar,
    FormControlLabel,
    Switch,
    InputBase,
} from '@material-ui/core'
// service
import FeatureProduct from '../../component/user/featureProducts/featureProduct'
import DataGridOrder from '../../component/user/profile/dataGrid'
import { Element } from 'react-scroll'

const Profile = ({ theme, requestProfile, updateProfile }) => {
    //updateProfile
    //updateProfile
    //userProfile
    const [isEdit, setIsEdit] = useState(false)
    const [user, setUser] = useState({})
    const [progress, setProgress] = useState(0)
    const [userAvatar, setAvatarUser] = useState(null)

    const onGetSuccess = (profile) => {
        setUser(profile)
        setAvatarUser(profile.avatar)
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
    const onChangeHanlde = (event) => {
        const { value, name } = event.target
        // trong swich case biến tạo biến var mới được
        switch (name) {
            case 'avatar':
                var avt = window.URL.createObjectURL(
                    event.target.files[0],
                )
                //xử lý progress bar
                var onProgress = new Promise((resolve) => {
                    var interval = setInterval(() => {
                        setProgress((prev) => {
                            if (prev >= 100) {
                                clearInterval(interval)
                                resolve()
                                return 0
                            } else {
                                return prev + 8
                            }
                        })
                    }, 80)
                })
                //when distroy progress bar then set avt
                onProgress.then(() => {
                    setUser({
                        ...user,
                        [name]: event.target.files[0],
                    })
                    setAvatarUser(avt)
                })
                break
            default:
                setUser({
                    ...user,
                    [name]: value,
                })
                break
        }
    }

    // handle submit
    const submitHandle = (e) => {
        e.preventDefault()
        const formData = new FormData()
        let { avatar, ...fieldUser } = user
        const newUser = ['password', 'type', 'createdAt', 'updatedAt']
        newUser.forEach((e) => delete fieldUser[e])
        formData.append('avatarUser', avatar)
        Object.keys(fieldUser).forEach((nameField) => {
            formData.append(nameField, fieldUser[nameField])
        })
        setIsEdit(false)
        updateProfile(formData, onGetSuccess)
    }
    console.log(user, 'userAvatar')
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
                                src={userAvatar}
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
                            onSubmit={submitHandle}
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="d-flex flex-wrap">
                                <div className="mt-4 w-100">
                                    <InputBase
                                        className={classes.inputFile}
                                        placeholder="Search Google Maps"
                                        type="file"
                                        name="avatar"
                                        inputProps={{
                                            'aria-label':
                                                'search google maps',
                                        }}
                                        onChange={onChangeHanlde}
                                    />
                                </div>
                                <div className="row w-100">
                                    {progress !== 0 ? (
                                        <ProgressBar
                                            progress={progress}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </div>

                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    value={user?.fullname}
                                    onChange={onChangeHanlde}
                                    name="fullname"
                                    margin="normal"
                                    disabled={!isEdit}
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    value={user?.account}
                                    margin="normal"
                                    disabled
                                    onChange={onChangeHanlde}
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    placeholder="Address"
                                    value={user?.address}
                                    disabled={!isEdit}
                                    onChange={onChangeHanlde}
                                    name="address"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    placeholder="Phone"
                                    value={user?.phone}
                                    disabled={!isEdit}
                                    margin="normal"
                                    name="phone"
                                    onChange={onChangeHanlde}
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
