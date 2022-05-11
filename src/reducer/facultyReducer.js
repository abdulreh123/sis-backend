import {
    GET_FACULTY,
    ADD_FACULTY
} from '../actions/types';

const initialState = {
    faculties: [],
    faculty: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_FACULTY:
            return {
                ...state,
                faculties: action.payload
            }
        case ADD_FACULTY:
            return {
                ...state,
                faculty: action.payload
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