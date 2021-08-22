const initialState = {
    open: false,
    notice: false,
    patch: '',
    message: '',
}
var myReducer = (state = initialState, action) => {
    const { open, notice, patch, message } = action
    switch (action.type) {
        case 'ALERT_CHANGE':
            console.log('test', 'test')
            return {
                ...state,
                open,
                notice,
                patch,
                message,
            }
        default:
            return state
    }
}

export default myReducer
