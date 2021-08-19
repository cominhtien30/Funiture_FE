import cart from "./cart"
import openSignIn from "./signIn"
import alert from "./alter"
import
{
    combineReducers
} from "redux";


const myReducer = combineReducers({
    cart,
    openSignIn,
    alert
})
export default myReducer;