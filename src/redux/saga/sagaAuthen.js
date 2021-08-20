import api from "../../utils/api";
import
{
    delay,
    takeEvery,
    call,
    put,

} from "redux-saga/effects";
const url = "user"

// login
function* loginWorker(action)
{
    try
    {
        const handleLogin = yield api.post(`${url}/login-user`, { ...action.user, account: action.user.email })
        if (handleLogin)
        {
            console.log(handleLogin, "handleLogin")
            const { message } = handleLogin.data
            yield call(isLoginSuccessWorker, handleLogin.data)
            yield put({ type: 'ALERT_CHANGE', open: true, notice: true, patch: "/profile", message })
        }

    } catch (error)
    {
        const { message } = error.response.data
        yield error.response.status === 400 && put({ type: 'ALERT_CHANGE', open: true, notice: false, patch: "", message })
    }
}
// login social
function* loginSocialWorker(action)
{
    try
    {
        const { user } = action
        const handleLogin = yield api.post(`${url}/login-user-social`, { user })
        if (handleLogin)
        {
            const { message } = handleLogin.data
            yield call(isLoginSuccessWorker, handleLogin.data)
            yield put({ type: 'ALERT_CHANGE', open: true, notice: true, patch: "/profile", message })
        }
    } catch (error)
    {
        const { message } = error.response.data
        yield error.response.status === 400 && put({ type: 'ALERT_CHANGE', open: true, notice: false, patch: "", message })
    }
}
// login social
function* registerWorker(action)
{
    try
    {


        const handleRegister = yield api.post(`${url}/create-user`, { ...action.newUser, account: action.newUser.email })
        if (handleRegister)
        {
            yield put({ type: 'ALERT_CHANGE', open: true, notice: true, patch: "", message: "Đăng Ký Thành Công !" })
        }
    } catch (error)
    {
        yield error.response.status === 500 && put({ type: 'ALERT_CHANGE', open: true, notice: false, patch: "", message: "có lỗi xảy ra !" })
    }
}
//--------------------------------
// set localStoreage
function* isLoginSuccessWorker(isLoggined)
{
    const { token, user } = isLoggined
    const { account, type } = user
    localStorage.setItem("access token", token)
    localStorage.setItem("user", JSON.stringify({ account, type }))
}
export default function* authWatcher()
{
    //action data
    yield takeEvery('REQUEST_LOGIN', loginWorker);
    yield takeEvery('REQUEST_REGISTER', registerWorker);
    yield takeEvery('REQUEST_LOGIN_SOCIAL', loginSocialWorker);

}
