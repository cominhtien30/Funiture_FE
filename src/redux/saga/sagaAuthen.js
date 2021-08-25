import api from '../../utils/api'
import { takeEvery, call, put } from 'redux-saga/effects'
import delayWorker from './worker/loadingWorker'
const url = 'user'

// login
function* loginWorker(action) {
    try {
        const handleLogin = yield api.post(`${url}/login-user`, {
            ...action.user,
            account: action.user.email,
        })
        yield call(delayWorker)
        if (handleLogin) {
            console.log(handleLogin, 'handleLogin')
            const { message } = handleLogin.data
            yield call(isLoginSuccessWorker, handleLogin.data)
            yield put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: true,
                status: 'auth',
                patch: '/profile',
                message,
            })
        }
    } catch (error) {
        const { message } = error.response.data
        yield (error.response.status === 400 || 500) &&
            put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: false,
                patch: '',
                status: 'auth',
                message,
            })
    }
}
// login social
function* loginSocialWorker(action) {
    try {
        const { user } = action
        const handleLogin = yield api.post(
            `${url}/login-user-social`,
            { user },
        )
        yield call(delayWorker)
        if (handleLogin) {
            const { message } = handleLogin.data
            yield call(isLoginSuccessWorker, handleLogin.data)
            yield put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: true,
                status: 'auth',
                patch: '/profile',
                message,
            })
        }
    } catch (error) {
        const { message } = error.response.data
        yield (error.response.status === 400 || 500) &&
            put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: false,
                patch: '',
                status: 'auth',
                message,
            })
    }
}
// login social
function* registerWorker(action) {
    try {
        const handleRegister = yield api.post(`${url}/create-user`, {
            ...action.newUser,
            account: action.newUser.email,
        })
        yield call(delayWorker)
        if (handleRegister) {
            yield put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: true,
                patch: '',
                status: 'auth',
                message: 'Đăng Ký Thành Công !',
            })
        }
    } catch (error) {
        yield error.response.status === 500 &&
            put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: false,
                status: 'auth',
                patch: '',
                message: 'có lỗi xảy ra !',
            })
    }
}
//--------------------------------
// set localStoreage
function isLoginSuccessWorker(isLoggined) {
    const { token, user } = isLoggined
    const { account, type } = user
    localStorage.setItem('access_token', token)
    localStorage.setItem('user', JSON.stringify({ account, type }))
}

export default function* authWatcher() {
    //action data
    yield takeEvery('REQUEST_LOGIN', loginWorker)
    yield takeEvery('REQUEST_REGISTER', registerWorker)
    yield takeEvery('REQUEST_LOGIN_SOCIAL', loginSocialWorker)
}
