import api from "../../utils/api";
import
{
    delay,
    takeEvery,
    call,
    put,

} from "redux-saga/effects";
const url = "user"

function* login()
{
    try
    {
        const callApi = yield api.get(`${url}/get-all-user`)
        const respone = callApi.data
        console.log(respone, "respone")
    } catch (error)
    {
        console.log(error, "error")
    }
    //yield delay(2000)
    //console.log({ ...actions.product, quantity: 5 }, "done")
    // yield put({ type: 'LOAD_CART', payload: { ...actions.product, quantity: 5 } })

}

export default function* watchAuth()
{
    //action data
    yield takeEvery('REQUEST_LOGIN', login);

}
