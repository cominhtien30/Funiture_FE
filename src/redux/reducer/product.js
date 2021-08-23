const initialState = {
    getListProduct: []
}
var myReducer = (state = initialState, action) =>
{

    switch (action.type)
    {
        case "GET_PRODUCTS":
         
            return  {getListProduct:action.products};
        default:
            return state;
    }

}


export default myReducer;