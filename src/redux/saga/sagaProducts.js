import api from '../../utils/api'
import { takeEvery, put } from 'redux-saga/effects'

const url = 'product'

// render products
function* getProductsWorker() {
    console.log('getProducts', 'test')
    try {
        const getProducts = yield api.get(`${url}/get-all-products`)
        if (getProducts) {
            const { data } = getProducts
            console.log(getProducts, 'data')
            yield put({
                type: 'GET_PRODUCTS',
                products: data,
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export default function* productsWatcher() {
    // action data
    yield takeEvery('REQUEST_PRODUCTS', getProductsWorker)
}
