import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    RES_SIDEBAR
} from '../actions/types';

const initialState = {
    show: 'responsive'
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SHOW_SIDEBAR:
            return {
                ...state,
                show: true
            }
        case HIDE_SIDEBAR:
            return {
                ...state,
                show: false
            }
        case RES_SIDEBAR:
            return {
                ...state,
                show: 'responsive'
            }
        default:
            return state;
    }
}