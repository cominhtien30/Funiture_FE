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
   
    console.log(products.getListProduct,"getListProduct")
    const classes = styles()
    return (<>
        <div className={`list-product`}>
            <div className={`row`}>
                <Grid container spacing={2}>
                     {products.getListProduct.map((item) =>
                    {
                        return <Grid item xs={4}>
                            <CardProduct  price={item.price}  nameProduct={item.nameProduct} description={item.description} pictures={item.pictures}/>
                        </Grid>
                    })} 
                </Grid>
            </div>
        </div>
    </>);
};


export default withTheme(Products)