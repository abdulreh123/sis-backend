import {
    GET_COURSES,
    ADD_COURSE
} from '../actions/types';

const initialState = {
    courses: [],
    course: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        case ADD_COURSE:
            return {
                ...state,
                course: action.payload
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