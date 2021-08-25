//---------------------------------------
import { delay, put } from 'redux-saga/effects'
export default function* delayWorker() {
    yield put({
        type: 'LOADING_CHANGE',
        open: true,
    })
    yield delay(1000)
    yield put({
        type: 'LOADING_CHANGE',
        open: false,
    })
}
