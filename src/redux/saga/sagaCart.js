//import callApi from "../utils/apiCaller";
import * as actions from "../actions/cartAction"
import
{
    delay,
    takeEvery,
    call,
    put,

} from "redux-saga/effects";

///action when dispatch CRUD
function* addCart(actions)
{
    //yield delay(2000)
    //console.log({ ...actions.product, quantity: 5 }, "done")
    // yield put({ type: 'LOAD_CART', payload: { ...actions.product, quantity: 5 } })

}

export default function* watchCart()
{

    //action data
    //yield takeEvery('ADD_CART', addCart);


}
