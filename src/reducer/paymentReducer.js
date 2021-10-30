import {
    GET_PAYMENT,
    ADD_PAYMENT,
} from '../actions/types';

const initialState = {
    payments: [],
    payment: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PAYMENT:
            return {
                ...state,
                payments: action.payload
            }
        case ADD_PAYMENT:
            return {
                ...state,
                payment: action.payload
            }
        // case GET_BRANCH:
        // case UPDATE_BRANCH:
        //     return {
        //         ...state,
        //         branch: action.payload,
        //         error: null
        //     }
        //     case ADD_BRANCH:
        //         return {
        //             ...state,
        //             branch: action.payload,
        //             error: null
        //         }
        //     case DELETE_BRANCH:
        //     return {
        //         ...state,
        //         branch: action.payload,
        //         error: null
        //     }
        // case GET_HOLIDAY:
        //     return {
        //         ...state,
        //         holiday: action.payload
        //     }
        // case BRANCH_ERROR:
        //     return {
        //         ...state,
        //         error: action.payload.error
        //     }
        default:
            return state;
    }
}