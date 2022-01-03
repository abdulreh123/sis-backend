import {
    GET_ADVISOR,
    ADD_ADVISOR,
    GET_ADVISOR_TIMETABLE
} from '../actions/types';

const initialState = {
    advisors: [],
    advisor: {},
    timeTable: [],
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ADVISOR:
            return {
                ...state,
                advisors: action.payload
            }
        case GET_ADVISOR_TIMETABLE:
            return {
                ...state,
                timeTable: action.payload
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