import Cookies from 'js-cookie';
import {
    USER_LOADING,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGIN_FAIL,
} from '../actions/types';

const initialState = {
    token: localStorage.getItem("sis"),
    isLoading: false,
    isAuthenticated: false,
    user: null,
    errorMsg: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
        case USER_LOADED:
            Cookies.set('__SOSAR_AUTH', `${JSON.stringify(action.payload)}`)
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload?.user
            }
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            Cookies.remove('__SOSAR_AUTH');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: null,
                isLoading: null,
            }
        // case PAGE_LOADED:
        //     return {
        //         ...state,
        //         isLoading: null
        //     }
        default:
            return state
    }
}