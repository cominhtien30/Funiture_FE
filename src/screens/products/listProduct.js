// @flow
import React from 'react'
import styles from './listProduct.style'
import { withTheme } from '@material-ui/core/styles'
import NavPages from '../../component/user/navPages/navPage'
import Filter from '../../component/user/products/filter/filter'
import Products from '../../component/user/products/products/product'
import Pagination from '../../component/user/products/pagination/pagination'
import { Typography, Grid, Paper } from '@material-ui/core'

const listProduct = ({ products, requestListProducts }) => {
    const classes = styles()
    return (
        <>
            <div className={`container-product ${classes.root}`}>
                <div className=" width-layout mt-4 mb-4">
                    <Paper
                        elevation={3}
                        classes={{ root: classes.paper }}
                    >
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
                                <Products
                                    products={products}
                                    requestListProducts={
                                        requestListProducts
                                    }
                                />
                                <Grid
                                    container
                                    justifyContent="center"
                                >
                                    <Pagination />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </>
    )
}
export default withTheme(listProduct)
