// @flow 
import React, { useState } from 'react';
import styles from './imagePayment.style';
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

import momo from "../../../assets/images/payment/momo.jpg"
import paypal from "../../../assets/images/payment/paypal.png"
import visa from "../../../assets/images/payment/visa.png"





const Cart = (props) =>
{

    const classes = styles();
    // styles row image


    return (<>

        <Grid md={8} container justifyContent="flex-start">
            <img className={classes.img} src={momo} alt="" />
            <img className={classes.img} src={paypal} alt="" />
            <img className={classes.img} src={visa} alt="" />
        </Grid>
    </>);
};
export default withTheme(Cart)