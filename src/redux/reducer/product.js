const initialState = {
    getListProduct: [],
    totalPages: 0,
    getAllProduct: [],
    colors: [],
}
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                getListProduct: action.products,
                totalPages: action.totalPages,
                getAllProduct: action.allProducts,
                colors: action.colors,
            }
        default:
            return state
    }
}

export default myReducer
