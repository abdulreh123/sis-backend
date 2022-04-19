import {
    NOTIFICATION_LOADING,
    GET_NOTIFICATIONS, UPDATE_NOTIFICATIONS,
    PUSH_NOTIFICATIONS,
    FETCH_SYSTEM_NOTIFICATIONS,
    FETCH_SYSTEM_NOTIFICATION,
    CREATE_SYSTEM_NOTIFICATION,
    DONE_LOADING,
    REQUEST_LOADING,
    EDIT_SYSTEM_NOTIFICATION,
    DELETE_SYSTEM_NOTIFICATION
} from './types'
import axios from 'axios'
import { returnErrors } from './errorActions'

export const getNotifications = (id) => async (dispatch) => {
    dispatch({
        type: NOTIFICATION_LOADING,
    })
    // Get notification
    axios
        .get(`/api/notification/receiver/${id}`,)
        .then((notifications) => {
            dispatch({
                type: GET_NOTIFICATIONS,
                payload: notifications.data.data,
            })
        })
        .catch((error) => {
            dispatch(
                returnErrors(
                    error.response.data.message,
                    error.response.status,
                    id
                )
            )
        })
}

export const updateNotifications = (id) => async (dispatch) => {
    dispatch({
        type: NOTIFICATION_LOADING,
    })
    const body = JSON.stringify({
        status: false,
    })
    // Update notification
    axios
        .patch(`/api/notification/${id}`, body,)
        .then((notifications) => {
            dispatch({
                type: UPDATE_NOTIFICATIONS,
                payload: notifications.data.data,
            })
        })
        .catch((error) => {
            dispatch(
                returnErrors(error.response.data.message, error.response.status)
            )
        })
}
export const pushNotification = (data) => async (dispatch) => {
    dispatch({
        type: NOTIFICATION_LOADING,
    })
    dispatch({
        type: PUSH_NOTIFICATIONS,
        payload: data,
    })
}

export const fetchSystemNotifications = () => async (dispatch) => {
    // Fetch system notification
    axios
        .get(`/api/notification/type/system`,)
        .then((notifications) => {
            dispatch({
                type: FETCH_SYSTEM_NOTIFICATIONS,
                payload: notifications.data.data,
            })
        })
        .catch((error) => {
            dispatch(
                returnErrors(error.response.data.message, error.response.status)
            )
        })
}

export const fetchSystemNotification = (id) => (dispatch) => {
    // fetch system notification by id
    axios
        .get(`/api/notification/${id}`,)
        .then((notifications) => {
            dispatch({
                type: FETCH_SYSTEM_NOTIFICATION,
                payload: notifications.data.data,
            })
        })
        .catch((error) => {
            dispatch(
                returnErrors(error.response.data.message, error.response.status)
            )
        })
}

export const createSystemNotification = (body) => async (dispatch) => {
    // Create system notification
    axios
        .post(`/api/notification`, body,)
        .then((notifications) => {
            dispatch({
                type: CREATE_SYSTEM_NOTIFICATION,
                payload: notifications.data.data,
            })
            dispatch({
                type: DONE_LOADING,
            })
        })
        .catch((error) => {
            dispatch(
                returnErrors(error.response.data.message, error.response.status)
            )
            dispatch({
                type: DONE_LOADING,
            })
        })
}
export const Loading = () => {
    return {
        type: REQUEST_LOADING,
    }
}
export const editSystemNotification = (id, body) => (dispatch) => {
    // Edit system notification
    axios
        .patch(`/api/notification/${id}`, body,)
        .then((notifications) => {
            dispatch({
                type: EDIT_SYSTEM_NOTIFICATION,
                payload: notifications.data.data,
            })
        })
        .catch((error) => {
            dispatch(
                returnErrors(error.response.data.message, error.response.status)
            )
        })
}

export const deleteSystemNotification = (id) => (dispatch) => {
    // Delete system notification
    axios
        .delete(`/api/notification/${id}`,)
        .then((notifications) => {
            dispatch({
                type: DELETE_SYSTEM_NOTIFICATION,
                payload: notifications.data.data,
            })
        })
        .catch((error) => {
            dispatch(
                returnErrors(error.response.data.message, error.response.status)
            )
        })
}

// // Setup config/headers and token
// export const tokenConfig = () => {
//     // Get token from localstorage
//     const initCookie = Cookies.getJSON('__GH_AUTH')
//     const token = initCookie?.token

//     // Headers
//     const config = {
//         headers: {
//             'Content-type': 'application/json',
//         },
//     }

//     // If token, add to headers
//     if (token) {
//         config.headers['gunsel-auth-token'] = token
//     }

//     return config
// }
