// @flow
import React from 'react'
// import styles from './listProduct.style'
import { withTheme } from '@material-ui/core/styles'
import NavPages from '../../component/user/navPages/navPage'
import Filter from '../../component/user/products/filter/filter'
import Products from '../../component/user/products/products/product'
import Pagination from '../../component/user/products/pagination/pagination'
import { Typography, Grid } from '@material-ui/core'

const listProduct = ({ addToCart }) => {
    return (
        <>
            <div className="container-product width-layout mt-4 mb-4">
                <NavPages />
                <div className="d-flex justify-content-center mb-4">
                    <Typography variant="caption">
                        Biến Name Category để đây
                    </Typography>
                </div>
                <Grid container>
                    <Grid xs={3} item>
                        <Filter />
                    </Grid>
                    <Grid xs={9} item>
                        <Products addToCart={addToCart} />
                    </Grid>




const listProduct = ({ products, requestListProducts }) =>
{

    return (<>
        <div className="container-product width-layout mt-4 mb-4">
            <NavPages />
            <div className="d-flex justify-content-center mb-4">
                <Typography variant="caption">
                    Biến Name Category để đây
                </Typography>
            </div>
            <Grid container >
                <Grid xs={3} item>
                    <Filter />
                </Grid>
                <Grid xs={9} item>
                    <Products products={products} requestListProducts={requestListProducts} />
                    <Grid container justifyContent="center">
                        <Pagination />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default withTheme(listProduct)
