import api from '../../utils/api'
import
{
    delay,
    takeEvery,
    call,
    put,

} from "redux-saga/effects";

const url = 'product';

// render products
function* getProductsWorker(action){
     console.log("getProducts","test")
    try{

        const getProducts = yield api.get(`${url}/get-all-products`);
        if (getProducts)
        {
            const { data } = getProducts
            yield put({
                type: 'GET_PRODUCTS',
                products:data
            })
      

        }
    }
    catch(error){
        console.log(error);
    }
};

export default function* productsWatcher()
{
    // action data
    yield takeEvery('REQUEST_PRODUCTS',getProductsWorker)
}