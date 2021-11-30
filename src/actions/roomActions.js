import {
    GET_ROOMS,
    ADD_ROOM
} from './types';
import axios from 'axios';
import { returnErrors } from "./errorActions";
//import Cookies from 'js-cookie';


export const fetchRooms = () => dispatch => {
    axios.get(`/api/rooms`,  )
        .then(api => {
            dispatch({
                type: GET_ROOMS,
                payload: api.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getRooms = (id) => dispatch => {
    axios.get(`/api/rooms/${id}`,  )
        .then(rooms => {
            dispatch({
                type: ADD_ROOM,
                payload: rooms.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getAvailableRooms = (day,start,end) => dispatch => {
    axios.get(`/api/rooms/availability?day=${day}&start=${start}&end=${end}`,  )
        .then(rooms => {
            dispatch({
                type: GET_ROOMS,
                payload: rooms.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const AddRooms = (data) => (dispatch) => {
    axios.post("/api/rooms/create", data,  )
        .then(rooms => {
            dispatch({
                type: ADD_ROOM,
                payload: rooms.data.data
            });
            dispatch(returnErrors(rooms.data.message, rooms.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

 }
export const AddRoomGroup = (data) => (dispatch) => {
    axios.post("/api/rooms//create/grouproom", data,  )
        .then(rooms => {
            dispatch({
                type: ADD_ROOM,
                payload: rooms.data.data
            });
            dispatch(returnErrors(rooms.data.message, rooms.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

 }
export const updateRooms = (data, id) => (dispatch) => {
    axios.put(`/api/rooms/${id}`, data,  )
        .then(rooms => {
            dispatch({
                type: ADD_ROOM,
                payload: rooms.data.data
            });
           dispatch(returnErrors(rooms.data.message, rooms.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const deleteRooms = (id) => (dispatch) => {

    axios.delete(`/api/rooms/${id}`,  )
        .then(rooms => {
            dispatch({
                type: ADD_ROOM,
                payload: rooms.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
