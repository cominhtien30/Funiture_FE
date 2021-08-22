import * as types from '../../constants'

export const addCart = (product) => {
    return {
        type: types.ADD_CART,
        product,
    }
}
