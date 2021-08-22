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

const Products = ({ addToCart }) => {
    return (
        <>
            <div className={`list-product`}>
                <div className={`row`}>
                    <Grid container spacing={2}>
                        {Array(6)
                            .fill(0)
                            .map((item, index) => {
                                return (
                                    <Grid item xs={4} key={index}>
                                        <CardProduct
                                            addToCart={addToCart}
                                        />
                                    </Grid>
                                )
                            })}
                    </Grid>
                </div>
            </div>
        </>
    )
}
export default withTheme(Products)
