import cart from "./cart"
import products from "./product"
import
{
    combineReducers
} from "redux";


const myReducer = combineReducers({
    cart,
    products
})
export default myReducer;