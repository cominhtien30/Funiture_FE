// @flow 
import React, { useState } from 'react';
import styles from './footerStep.style';
import { withTheme } from '@material-ui/core/styles';

import
{
    Button,
    Typography,
    Grid,
    TextField,
    InputBase,
    LinearProgress
} from '@material-ui/core';





const FooterStep = (props) =>
{

    const classes = styles();
    // styles row image


    return (<>

        <Grid container justifyContent="center">
            <Typography variant="caption">
                Info Payment
            </Typography>
        </Grid>
        <Grid xs={12} classes={{
            root: classes.margin
        }}
            container
            justifyContent="space-between">
            <TextField id="standard-basic" variant="outlined" />
            <Button size="medium" >
                Apply !
            </Button>
        </Grid>
        <Grid container justifyContent="space-between">
            <Typography variant="subtitle1" >
                cart Total
            </Typography>
            <Typography variant="body1" >
                200.000 VND
            </Typography>
        </Grid>
        <Grid container justifyContent="space-between">
            <Typography variant="subtitle1">
                Discounts
            </Typography>
            <Typography variant="body1">
                20.000 VND
            </Typography>
        </Grid>
        <Grid container justifyContent="space-between">
            <Typography variant="subtitle1" >
                Delivery Charges
            </Typography>
            <Typography variant="body1" classes={{ root: classes.success }}>
                Free
            </Typography>
        </Grid>
        <Grid container justifyContent="space-between">
            <Typography variant="h6">
                Total
            </Typography>
            <Typography variant="h5" >
                250.000 VND
            </Typography>
        </Grid>
        <Grid container justifyContent="space-between" alignItems="center" classes={{
            root: classes.margin
        }}>
            <Typography style={{ cursor: "pointer" }} variant="button" noWrap={true} color="primary" >
                Continues Shopping
            </Typography>

            <Button
            >
                CHECKOUT
            </Button>
        </Grid>


    </>);
};
export default withTheme(FooterStep)