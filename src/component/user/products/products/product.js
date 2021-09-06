// @flow
import React from 'react'
import { withTheme } from '@material-ui/core/styles'
import CardProduct from './card'
import {
    // Box,
    // FormControl,
    // Select,
    // InputLabel,
    // InputBase,

    Grid,
} from '@material-ui/core'

const Products = ({ products, addToCart }) => {
    return (
        <>
            <div className={`list-product`}>
                <div className={`row`}>
                    <Grid container spacing={2}>
                        {products.getListProduct.map(
                            (item, index) => {
                                return (
                                    <Grid item xs={4} key={index}>
                                        <CardProduct
                                            addToCart={addToCart}
                                            id={item.id}
                                            color={item.color}
                                            price={item.price}
                                            nameProduct={
                                                item.nameProduct
                                            }
                                            description={
                                                item.description
                                            }
                                            pictures={item.pictures}
                                        />
                                    </Grid>
                                )
                            },
                        )}
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default withTheme(Products)
