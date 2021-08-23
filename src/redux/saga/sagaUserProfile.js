import api from '../../utils/api'
import { takeEvery, call } from 'redux-saga/effects'
// service
import authService from '../../utils/AuthService'
const url = 'user'
// login
function* getProfileWorker(action) {
    try {
        // const profile = yield api.get(
        //     `${url}/get-one-user/${action.account}`,
        //     authService.headerToken(),
        // )
        const profile = yield call(callApi, action)
        // yield put({
        //     type: 'GET_PROFILE',
        //     user: profile.data,
        // })
        if (action.onGetSuccess) {
            action.onGetSuccess(profile.data)
        }
    } catch (error) {
        console.log(error, 'error')
    }
}
//--------------------------------
function callApi(action) {
    return api.get(
        `${url}/get-one-user/${action.account}`,
        authService.headerToken(),
    )
}
export default function* userWatcher() {
    //action data
    yield takeEvery('REQUEST_PROFILE', getProfileWorker)
}
