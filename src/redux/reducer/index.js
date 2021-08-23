import cart from './cart'
import openSignIn from './signIn'
import alert from './alter'
import userProfile from './userProfile'
import { combineReducers } from 'redux'

const myReducer = combineReducers({
    cart,
    openSignIn,
    alert,
    userProfile,
})
export default myReducer
