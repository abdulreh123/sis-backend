import {
    GET_DEPARMENTS,
    ADD_DEPARTMENT
} from '../actions/types';

const initialState = {
    departments: [],
    department: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_DEPARMENTS:
            return {
                ...state,
                departments: action.payload
            }
        case ADD_DEPARTMENT:
            return {
                ...state,
                department: action.payload
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