// @flow 
import React, { useState } from 'react';
import styles from './wishList.style';
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


import DataGridWishList from "../../component/user/wishList/dataGrid"
import NavPage from "../../component/user/navPages/navPage"
import FeatureProduct from "../../component/user/featureProducts/featureProduct"






const WishList = (props) =>
{

    const classes = styles();
    // styles row image

    return (<>

        <div className={`${classes.root} container-wishList width-layout mt-4 mb-4`}>
            <NavPage />
            <DataGridWishList />
            <FeatureProduct />
        </div>
    </>);
};
export default withTheme(WishList)