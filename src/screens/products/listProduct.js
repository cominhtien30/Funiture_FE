// @flow
import React, { useEffect } from 'react'
import styles from './listProduct.style'
import { withTheme } from '@material-ui/core/styles'
import NavPages from '../../component/user/navPages/navPage'
import Filter from '../../component/user/products/filter/filter'
import Products from '../../component/user/products/products/product'
import Pagination from '../../component/user/products/pagination/pagination'
import { Typography, Grid, Paper } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

const listProduct = ({
    products,
    requestListProducts,
    addToCart,
}) => {
    let location = useLocation()
    const query = new URLSearchParams(location.search).get('api')
    const page = new URLSearchParams(location.search).get('page')
    console.log(page, 'page')
    let search = query ? `${query}${page}` : 'get-pagination/1'
    useEffect(() => {
        requestListProducts(search)
    }, [location])
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
                                <Filter colors={products.colors} />
                            </Grid>
                            <Grid xs={9} item>
                                <Products
                                    addToCart={addToCart}
                                    products={products}
                                    requestListProducts={
                                        requestListProducts
                                    }
                                />
                                <Grid
                                    container
                                    justifyContent="center"
                                >
                                    <Pagination
                                        // page={page}
                                        totalPages={
                                            products.totalPages
                                        }
                                        requestListProducts={
                                            requestListProducts
                                        }
                                    />
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
