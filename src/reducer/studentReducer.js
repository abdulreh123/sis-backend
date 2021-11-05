import {
    GET_STUDENTS,
    ADD_STUDENT,
    GET__ADVISOR_STUDENTS,
    GET_STUDENT,
    GET_TRANSCRIPT,
    GET_AUTO_COURSE,
    COURSES_TO_APPROVE,
    COURSE_APPROVED
} from '../actions/types';

const initialState = {
    students: [],
    advisor: [],
    autoCourse: [],
    student: {},
    studentCourse: [],
    coursesToApprove: [],
    approveMessage: {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        case GET_AUTO_COURSE:
            return {
                ...state,
                autoCourse: action.payload
            }
        case GET__ADVISOR_STUDENTS:
            return {
                ...state,
                advisor: action.payload
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
        case COURSES_TO_APPROVE:
            return {
                ...state,
                coursesToApprove: action.payload
            }
        case COURSE_APPROVED:
            return {
                ...state,
                approveMessage: action.payload
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