// @flow 
import React,{useEffect} from 'react';
import styles from './product.style';
import { withTheme } from '@material-ui/core/styles';
import CardProduct from "./card"
import
{
    Box,
    FormControl,
    Select,
    InputLabel,
    InputBase,
    Grid,

} from '@material-ui/core';



const Products = ({ products, requestListProducts }) =>
{
    useEffect(() => {
        requestListProducts();
    }, [requestListProducts])
    console.log(products.getListProduct,"products1")
    const classes = styles()
    return (<>
        <div className={`list-product`}>
            <div className={`row`}>
                <Grid container spacing={2}>
                    {/* {Array(6).fill(0).map((item, index) =>
                    {
                        return <Grid item xs={4} key={index}>
                            <CardProduct  price={item.price}  />
                        </Grid>
                    })} */}
                </Grid>
            </div>
        </div>
    </>);
};

export default withTheme(Products)