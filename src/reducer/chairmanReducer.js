import {
    GET_CHAIRMANS,
} from '../actions/types';

const initialState = {
    chairmans: [],
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_CHAIRMANS:
            return {
                ...state,
                chairmans: action.payload
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