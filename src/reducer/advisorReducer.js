import {
    GET_ADVISOR,
    ADD_ADVISOR,
} from '../actions/types';

const initialState = {
    advisors: [],
    advisor: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ADVISOR:
            return {
                ...state,
                advisors: action.payload
            }
        case ADD_ADVISOR:
            return {
                ...state,
                advisor: action.payload
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