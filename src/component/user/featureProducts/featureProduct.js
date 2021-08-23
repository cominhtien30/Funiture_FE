// @flow
import React from 'react'
import { styles, responsive } from './featureProduct.style'
import { withTheme } from '@material-ui/core/styles'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CardProduct from '../products/products/card'

const featureProduct = () => {
    const classes = styles()
    return (
        <>
            <div className={`${classes.title} mt-5 pt-3`}>
                Feature Product
            </div>
            <Carousel
                responsive={responsive}
                containerClass={classes.styleCarousel}
            >
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </Carousel>
            ;
        </>
    )
}
export default withTheme(featureProduct)
