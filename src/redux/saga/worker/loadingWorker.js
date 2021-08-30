//---------------------------------------
import { delay, put } from 'redux-saga/effects'
export function* delayWorker() {
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
export function* doneWorker() {
    yield put({
        type: 'LOADING_CHANGE',
        open: false,
    })
}
