// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/cartAction'
import ScreenProducts from '../screens/products/listProduct'

function userProducts({ cart, addToCart }) {
    console.log(cart, 'newCart')
    return <ScreenProducts cart={cart} addToCart={addToCart} />
}
const mapStateToProps = (state) => ({
    cart: state.cart,
})
//DISPATCH
const mapDispatchToProps = {
    //  add Cart
    addToCart: (product) => actions.addCart(product),
}
//check type props
userProducts.propTypes = {
    cart: PropTypes.shape({
        listProduct: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                quantity: PropTypes.number,
                price: PropTypes.number,
                image: PropTypes.string,
                color: PropTypes.string,
            }),
        ),
        totalQuantity: PropTypes.number,
        totalPrice: PropTypes.number,
    }),
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(userProducts)
