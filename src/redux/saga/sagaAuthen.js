import api from "../../utils/api";
import
{
    delay,
    takeEvery,
    call,
    put,

} from "redux-saga/effects";
const url = "user"

function* loginWorker(action)
{
    try
    {
        const handleLogin = yield api.post(`${url}/login-user`, { ...action.user, account: action.user.email })
        if (handleLogin)
        {
            console.log(handleLogin, "handleLogin")
            const { message } = handleLogin.data
            yield put({ type: 'ALERT_CHANGE', open: true, notice: true, patch: "/profile", message })
        }

    } catch (error)
    {
        const { message } = error.response.data
        yield error.response.status === 400 && put({ type: 'ALERT_CHANGE', open: true, notice: false, patch: "", message })
    }
}

export default function* authWatcher()
{
    //action data
    yield takeEvery('REQUEST_LOGIN', loginWorker);

}
