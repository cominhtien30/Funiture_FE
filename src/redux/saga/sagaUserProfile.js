import api from '../../utils/api'
import { takeEvery, call, put } from 'redux-saga/effects' //select
import delayWorker from './worker/loadingWorker'
// service
import authService from '../../utils/AuthService'
const url = 'user'
// getProfile ------------------------------------
function* getProfileWorker(action) {
    try {
        const profile = yield call(callGetProfile, action)
        if (action.onGetSuccess) {
            action.onGetSuccess(profile.data)
        }
    } catch (error) {
        console.log(error, 'error')
    }
}

function callGetProfile(action) {
    return api.get(
        `${url}/get-one-user/${action.account}`,
        authService.headerToken(),
    )
}
//---------------------------------------
// update-----------------------------------
function* updateProfileWorker(action) {
    try {
        yield call(delayWorker)
        const update = yield call(callUpdateProfile, action)
        console.log(update, 'update')
        if (update) {
            const { message } = update.data
            yield put({
                type: 'ALERT_CHANGE',
                open: true,
                notice: true,
                status: 'handle',
                patch: '',
                message,
            })
            // const user = yield select((state) => state.userProfile)
            // const { onGetSuccess } = action
            // yield put({
            //     type: 'REQUEST_PROFILE',
            //     user,
            //     onGetSuccess,
            // })
        }
    } catch (error) {
        const { message } = error.response.data
        yield (error.response.status === 400 || 500) &&
            console.log(error.response, 'update')
        put({
            type: 'ALERT_CHANGE',
            open: true,
            notice: false,
            patch: '',
            status: 'handle',
            message,
        })
    }
}

function callUpdateProfile(action) {
    const { user } = action
    return api.put(
        `${url}/update-user`,
        user,
        authService.uploadHaveFile(),
    )
}
//---------------------------------------

export default function* userWatcher() {
    //action data
    yield takeEvery('REQUEST_PROFILE', getProfileWorker)
    yield takeEvery('UPDATE_PROFILE', updateProfileWorker)
}
