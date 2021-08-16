import cart from "./cart"
import openSignIn from "./signIn"
import
{
    combineReducers
} from "redux";


const myReducer = combineReducers({
    cart,
    openSignIn
})
export default myReducer;