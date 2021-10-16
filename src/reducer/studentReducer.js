import {
    GET_STUDENTS,
    ADD_STUDENT,
    GET_STUDENT,
    GET_TRANSCRIPT
} from '../actions/types';

const initialState = {
    students: [],
    student: {},
    studentCourse:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        case GET_STUDENT:
        case ADD_STUDENT:
            return {
                ...state,
                student: action.payload
            }
        case GET_TRANSCRIPT:
            return {
                ...state,
                studentCourse: action.payload
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