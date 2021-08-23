import
{
    all
} from "redux-saga/effects";
import watchCart from "./sagaCart";
import watchProduct from "./sagaProducts"

export default function* rootSaga()
{
    yield all([watchCart(),watchProduct()]);

}

