import api from '../../utils/api'
import { takeEvery, put, call } from 'redux-saga/effects' //call
import { delayWorker, doneWorker } from './worker/loadingWorker'

const url = 'product'

// render products
function* getProductsWorker(action) {
    yield call(delayWorker)
    const query =
        action.url === undefined ? 'get-pagination/1 ' : action.url

    try {
        const getProducts = yield api.get(`${url}/${query}`)
        const getColors = yield api.get(`${url}/get-all-products`)
        if (getProducts && getColors) {
            const { content, totalPages } = getProducts.data
            //get color
            //when get list all product
            const allProducts = getColors.data

            const colors = () => {
                //lấy danh sách màu trong products
                let colors = []
                allProducts.forEach((element) => {
                    colors.push(element.color)
                })
                return [...new Set(colors)] //để loại bỏ những màu trùng lặp
            }
            // console.log(colors(), 'colors')
            yield put({
                type: 'GET_PRODUCTS',
                products: content,
                totalPages,
                allProducts,
                colors: colors(),
            })
            yield call(doneWorker)
        }
    } catch (error) {
        console.log(error)
    }
}

export default function* productsWatcher() {
    // action data
    yield takeEvery('REQUEST_PRODUCTS', getProductsWorker)
}
