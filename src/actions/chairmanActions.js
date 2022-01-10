import {
    GET_CHAIRMANS,
    ADD_CHAIRMANS,
} from './types';
import axios from 'axios';
import { returnErrors } from "./errorActions";
//import Cookies from 'js-cookie';


export const fetchChairman = () => dispatch => {
    axios.get(`/api/chairman`,  )
        .then(api => {
            dispatch({
                type: GET_CHAIRMANS,
                payload: api.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getChairman = (id) => dispatch => {
    axios.get(`/api/chairman/${id}`,  )
        .then(chairman => {
            dispatch({
                type: ADD_CHAIRMANS,
                payload: chairman.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const AddChairman = (data) => (dispatch) => {
    axios.post("/api/chairman/create", data,  )
        .then(chairman => {
            dispatch({
                type: ADD_CHAIRMANS,
                payload: chairman.data.data
            });
            dispatch(returnErrors(chairman.data.message, chairman.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

 }
export const updateChairman = (data, id) => (dispatch) => {
    axios.put(`/api/chairman/${id}`, data,  )
        .then(chairman => {
            dispatch({
                type: ADD_CHAIRMANS,
                payload: chairman.data.data
            });
           dispatch(returnErrors(chairman.data.message, chairman.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const deleteChairman = (id) => (dispatch) => {

    axios.delete(`/api/chairman/${id}`,  )
        .then(chairman => {
            dispatch({
                type: ADD_CHAIRMANS,
                payload: chairman.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
