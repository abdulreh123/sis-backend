import { returnErrors } from "./errorActions";
import {
    GET_ADVISOR,
    ADD_ADVISOR,
} from './types';
import axios from 'axios';
//import Cookies from 'js-cookie';


export const fetchAdvisor = () => dispatch => {
    axios.get(`/api/advisor`,  )
        .then(api => {
            dispatch({
                type: GET_ADVISOR,
                payload: api.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getadvisor = (id) => dispatch => {
    axios.get(`/api/advisor/${id}`,  )
        .then(advisor => {
            dispatch({
                type: ADD_ADVISOR,
                payload: advisor.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
       })
}
export const AddAdvisor = (data) => (dispatch) => {
    axios.post("/api/advisor/create", data,  )
        .then(advisor => {
            dispatch({
                type: ADD_ADVISOR,
                payload: advisor.data.data
            });
           dispatch(returnErrors(advisor.data.message, advisor.status));
        })
         .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
         })

 }
export const updateAdvisor = (data, id) => (dispatch) => {
    axios.put(`/api/advisor/${id}`, data,  )
        .then(advisor => {
            dispatch({
                type: ADD_ADVISOR,
                payload: advisor.data.data
            });
           dispatch(returnErrors(advisor.data.message, advisor.status));
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const deleteAdvisor = (id) => (dispatch) => {

    axios.delete(`/api/advisor/${id}`,  )
        .then(advisor => {
            dispatch({
                type: ADD_ADVISOR,
                payload: advisor.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
