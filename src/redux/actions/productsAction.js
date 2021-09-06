import * as types from '../../constants'

export const getProducts = (products) => {
    return {
        type: types.GET_PRODUCTS,
        products,
    }
}
export const requestProducts = (url) => {
    return {
        type: types.REQUEST_PRODUCTS,
        url,
    }
}
