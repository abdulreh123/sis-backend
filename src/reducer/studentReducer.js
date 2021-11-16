import {
    GET_STUDENTS,
    ADD_STUDENT,
    GET__ADVISOR_STUDENTS,
    GET_STUDENT,
    GET_TRANSCRIPT,
    GET_AUTO_COURSE,
    COURSES_TO_APPROVE,
    COURSE_APPROVED,
    GET_STUDENT_STATS,
    GET_TIMETABLE
} from '../actions/types';

const initialState = {
    students: [],
    advisor: [],
    stats:{},
    autoCourse: [],
    student: {},
    studentCourse: [],
    coursesToApprove: [],
    timeTable: [],
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
        case GET_STUDENT_STATS:
            return {
                ...state,
                stats: action.payload
            }
        case GET_TIMETABLE:
            return {
                ...state,
                timeTable: action.payload
            }
        
        default:
            return state;
    }
}