// @flow 
import React from 'react';
import styles from './filter.style';
import Colors from "./colors/colors"
import Price from "./prices/price"
import { withTheme } from '@material-ui/core/styles';
import
{
    Box,
    FormControl,
    Select,
    InputLabel,
    InputBase,
    Grid,
    TextField
} from '@material-ui/core';




const filter = (props) =>
{
    const classes = styles();
    return (<>
        <div className={`${classes.root} filter-product`}>
            <Colors />
            <Price />
        </div>
    </>);
};
export default withTheme(filter)