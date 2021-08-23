
import axios from 'axios';
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
        
        const getProducts = yield axios.get(`https://localhost:4000/api/product/get-all-products`);
        if (getProducts)
        {
           // const { products } = getProducts
            console.log(getProducts,"test")
            // yield put({ type: 'GET_PRODUCTS', products})
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