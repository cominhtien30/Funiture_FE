import * as types from '../../constants'

export const alertChange = (payload) => {
    const { open, notice, patch, message } = payload
    return {
        type: types.ALTER_CHANGE,
        open,
        notice,
        patch,
        message,
    }
}
