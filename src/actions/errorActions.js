import { GET_ERRORS, CLEAR_ERRORS,LOGOUT_SUCCESS,REQUEST_SUCCESS } from './types';

//  Return Errors
export const returnErrors = (msg, status, id = null) => {
    if (status === 401) {
        return {
            type: LOGOUT_SUCCESS,
            payload: { msg, status, id }
        }
    }
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    }
}
//  Clear Errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

// export const returnLoaded = () => {
//     return {
//         type: PAGE_LOADED
//     }
// }

//  Return Success
export const returnSuccess = (msg, status, id = null) => {
    return {
        type: REQUEST_SUCCESS,
        payload: { msg, status, id }
    }
}