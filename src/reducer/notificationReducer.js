import {  NOTIFICATION_LOADING,
    GET_NOTIFICATIONS, UPDATE_NOTIFICATIONS,
    PUSH_NOTIFICATIONS,
    FETCH_SYSTEM_NOTIFICATIONS,
    FETCH_SYSTEM_NOTIFICATION,
    CREATE_SYSTEM_NOTIFICATION,
    DONE_LOADING,
    REQUEST_LOADING,
    EDIT_SYSTEM_NOTIFICATION,
    DELETE_SYSTEM_NOTIFICATION } from '../actions/types'

const initialState = {
    general: [],
    systems: [],
    system: [],
    notification: {},
    pushNotification: {},
    isLoading: false,
    updated: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATION_LOADING:
            return {
                ...state,
                isLoading: true,
                updated: false,
            }
        case PUSH_NOTIFICATIONS:
            return {
                ...state,
                pushNotification: action.payload,
                isLoading: false,
            }
        case GET_NOTIFICATIONS:
            const general = action.payload.notifications.filter(
                (data) => data.type === 'normal'
            )
            const generalStatus = action.payload.systemNotificationsStatus
            const systems = action.payload.notifications.filter(
                (data) => data.type === 'system'
            )
            const systemsStatus = action.payload.systemNotificationsStatus
            return {
                ...state,
                general,
                systems,
                generalStatus,
                systemsStatus,
                isLoading: false,
            }

        case UPDATE_NOTIFICATIONS:
            return {
                ...state,
                updated: true,
            }

        case FETCH_SYSTEM_NOTIFICATIONS:
            return {
                ...state,
                system: action.payload,
            }

        case FETCH_SYSTEM_NOTIFICATION:
            return {
                ...state,
                notification: action.payload,
            }

        case CREATE_SYSTEM_NOTIFICATION:
            return {
                ...state,
                updated: true,
            }

        case EDIT_SYSTEM_NOTIFICATION:
            return {
                ...state,
                system: action.payload,
                updated: true,
            }

        case DELETE_SYSTEM_NOTIFICATION:
            return {
                ...state,
                updated: true,
            }

        default:
            return state
    }
}
