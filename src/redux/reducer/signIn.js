// import data from "../data"
const initialState = false
var myReducer = (state = initialState, action) =>
{

    switch (action.type)
    {
        case "CHANGE_OPEN":
            console.log("CHANGE_OPEN", "CHANGE_OPEN")
            return action.open;
        default:
            return state;
    }
}


export default myReducer;