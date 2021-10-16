import {
    GET_GROUPS,
    ADD_GROUP
} from '../actions/types';

const initialState = {
    groups: [],
    group: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_GROUPS:
            return {
                ...state,
                groups: action.payload
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