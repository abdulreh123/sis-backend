import {
    GET_CHAIRMANS,ADD_CHAIRMANS
} from '../actions/types';

const initialState = {
    chairmans: [],
    chairman: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_CHAIRMANS:
            return {
                ...state,
                chairmans: action.payload
            }
        case ADD_CHAIRMANS:
            return {
                ...state,
                chairman: action.payload
            }
        // case ADD_BUILDINGS:
        //     return {
        //         ...state,
        //         building: action.payload
        //     }
        default:
            return state;
    }
}