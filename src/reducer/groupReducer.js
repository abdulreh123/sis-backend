import {
    GET_GROUPS,
    ADD_GROUP,
    GET_DEPARTMENT_GROUP,
    GET_YEAR
} from '../actions/types';

const initialState = {
    groups: [],
    departmentGroups: [],
    group: {},
    year:""
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_GROUPS:
            return {
                ...state,
                groups: action.payload
            }
        case GET_DEPARTMENT_GROUP:
            return {
                ...state,
                departmentGroups: action.payload
            }
        case GET_YEAR:
            return {
                ...state,
                year: action.payload
            }
        case ADD_GROUP:
            return {
                ...state,
                group: action.payload
            }
        default:
            return state;
    }
}