const initialState = {
    open: false,
    notice: false,
    patch: '',
    status: '',
    message: '',
}
var myReducer = (state = initialState, action) => {
    const { open, notice, patch, message, status } = action
    switch (action.type) {
        case 'ALERT_CHANGE':
            console.log('test', 'test')
            return {
                ...state,
                open,
                notice,
                patch,
                status,
                message,
            }
        default:
            return state
    }
}

export default myReducer
