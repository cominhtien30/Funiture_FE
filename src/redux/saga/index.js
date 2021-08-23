import { all } from 'redux-saga/effects'
// import watchCart from './sagaCart'
import watchAuth from './sagaAuthen'
import watchUserProfile from './sagaUserProfile'
export default function* rootSaga() {
    yield all([watchAuth(), watchUserProfile()])
}
