import { returnErrors } from "./errorActions";
import {
    GET_GROUPS,
    ADD_GROUP,
    GET_DEPARTMENT_GROUP
} from './types';
import axios from 'axios';
//import Cookies from 'js-cookie';


export const fetchGroup = () => dispatch => {
    axios.get(`/api/group`,  )
        .then(api => {
            dispatch({
                type: GET_GROUPS,
                payload: api.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getGroup = (id) => dispatch => {
    axios.get(`/api/group/${id}`,  )
        .then(group => {
            dispatch({
                type: ADD_GROUP,
                payload: group.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
       })
}
export const getGroupDepartment = (id) => dispatch => {
    axios.get(`/api/group/department/${id}` )
        .then(group => {
            dispatch({
                type: GET_DEPARTMENT_GROUP,
                payload: group.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
       })
}
export const AddGroup = (data) => (dispatch) => {
    axios.post("/api/group/create", data,  )
        .then(group => {
            dispatch({
                type: ADD_GROUP,
                payload: group.data.data
            });
           dispatch(returnErrors(group.data.message, group.status));
        })
         .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
         })

 }
export const updateGroup = (data, id) => (dispatch) => {
    axios.put(`/api/group/${id}`, data,  )
        .then(group => {
            dispatch({
                type: ADD_GROUP,
                payload: group.data.data
            });
           dispatch(returnErrors(group.data.message, group.status));
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const deleteGroup = (id) => (dispatch) => {

    axios.delete(`/api/group/${id}`,  )
        .then(group => {
            dispatch({
                type: ADD_GROUP,
                payload: group.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
