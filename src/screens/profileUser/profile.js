// @flow
import React from 'react'
import styles from './profile.style'
import { withTheme } from '@material-ui/core/styles'
import {
    Button,
    Typography,
    Grid,
    TextField,
    Avatar,
} from '@material-ui/core'

import FeatureProduct from '../../component/user/featureProducts/featureProduct'
import DataGridOrder from '../../component/user/profile/dataGrid'

const Profile = (props) => {
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
                                style={{
                                    color: 'white',
                                    backgroundColor:
                                        props.theme.palette.primary
                                            .main,
                                    width: '60px',
                                    height: '60px',
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
                                    value="name"
                                    label="Name"
                                    required
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    label="Email"
                                    value="cominhtien30@gmail.com"
                                    required
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    type="password"
                                    label="Password"
                                    required
                                    margin="normal"
                                />
                                <Button
                                    type="submit"
                                    style={{
                                        margin: '12px auto',
                                    }}
                                >
                                    Edit
                                </Button>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="caption" gutterBottom>
                            Order
                        </Typography>
                        <DataGridOrder />
                    </Grid>
                </Grid>
                <FeatureProduct />
            </div>
        </>
    )
}
export default withTheme(Profile)
