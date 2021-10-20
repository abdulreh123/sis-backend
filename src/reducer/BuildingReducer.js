import {
    GET_BUILDINGS,
    ADD_BUILDINGS
} from '../actions/types';

const initialState = {
    buildings: [],
    building: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_BUILDINGS:
            return {
                ...state,
                buildings: action.payload
            }
        case ADD_BUILDINGS:
            return {
                ...state,
                building: action.payload
            }
        default:
            return state;
    }
}