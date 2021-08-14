// import data from "../data"
const initialState = {
    listProduct: [
        { id: 1, name: "Funiture", quantity: 1, price: 20, image: "a", color: "#fff" }
    ],
    totalQuantity: 0,
    totalPrice: 0
};
var myReducer = (state = initialState, action) =>
{

    switch (action.type)
    {
        // case "LOAD_CART":
        //     state.listProduct.push(action.payload)
        //     return { ...state };
        case "ADD_CART":
            state.totalQuantity += 1
            return { ...state };
        default:
            return state;
    }
}

export default myReducer;