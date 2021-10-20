import {
    GET_ROOMS,
    ADD_ROOM
} from '../actions/types';

const initialState = {
    rooms: [],
    room: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ROOMS:
            return {
                ...state,
                rooms: action.payload
            }
        case ADD_ROOM:
            return {
                ...state,
                room: action.payload
            }
        default:
            return state;
    }
}