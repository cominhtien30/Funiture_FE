// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as productsAction from '../redux/actions/productsAction'
import Products from '../screens/products/listProduct'

function userProducts({ products, requestListProducts }) {
    return (
        <Products
            products={products}
            requestListProducts={requestListProducts}
        />
    )
}
const mapStateToProps = (state) => ({
    products: state.products,
})
//DISPATCH
const mapDispatchToProps = {
    //  get products
    requestListProducts: productsAction.requestProducts,
}
//check type props
userProducts.propTypes = {
    products: PropTypes.shape({
        getListProduct: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                nameProduct: PropTypes.string,
                description: PropTypes.string,
                price: PropTypes.number,
                pictures: PropTypes.string,
                color: PropTypes.string,
            }),
        ),
    }),
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(userProducts)
