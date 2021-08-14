import
{
    all
} from "redux-saga/effects";
import watchCart from "./sagaCart";

export default function* rootSaga()
{
    yield all([watchCart()]);

}

