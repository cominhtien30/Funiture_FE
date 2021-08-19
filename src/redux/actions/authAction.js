import * as types from "../../constants"

export const requestLogin = (user) =>
{
    return {
        type: types.REQUEST_LOGIN,
        user
    }
}
export const requestLoginSocial = (user) =>
{
    return {
        type: types.REQUEST_LOGIN_SOCIAL,
        user
    }
}
