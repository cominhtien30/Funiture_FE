// @flow 
import React, { useState } from 'react';
import styles from './cart.style';
import { withTheme } from '@material-ui/core/styles';
import FooterStep from "../../component/user/footerStep"
import
{
    Button,
    Typography,
    Grid,
    TextField,
    InputBase,
    LinearProgress
} from '@material-ui/core';

import ProcessStep from "../../component/user/processStep"
import DataGridCart from "../../component/user/cart/dataGrid"
import ImagesPayment from '../../component/user/imagesPayment';





const Cart = (props) =>
{

    const classes = styles();
    // styles row image


    return (<>
        <div className={`${classes.root} container-cart width-layout mt-4 mb-4`}>
            <ProcessStep />
            <div className="d-flex btn-wrap justify-content-end align-items-center mt-4 mb-4">
                <Typography style={{ cursor: "pointer" }} variant="button" noWrap={true} color="primary" >
                    Continues Shopping
                </Typography>
                <div className="p-3"></div>
                <Button
                >
                    CHECKOUT
                </Button>
            </div>
            <DataGridCart />

            <Grid container >
                <ImagesPayment />
                <Grid xs={4} item >
                    <FooterStep />
                </Grid>
            </Grid>
        </div>
    </>);
};
export default withTheme(Cart)