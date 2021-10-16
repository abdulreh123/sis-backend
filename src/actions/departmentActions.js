import {
    GET_DEPARMENTS,
    ADD_DEPARTMENT
} from './types';
import axios from 'axios';
//import Cookies from 'js-cookie';


export const fetchDepartment = () => dispatch => {
    axios.get(`/api/department`,  )
        .then(api => {
            dispatch({
                type: GET_DEPARMENTS,
                payload: api.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
export const getDepartment = (id) => dispatch => {
    axios.get(`/api/department/${id}`,  )
        .then(branch => {
            dispatch({
                type: ADD_DEPARTMENT,
                payload: branch.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
export const AddDepartment = (data) => (dispatch) => {
    axios.post("/api/department/create", data,  )
        .then(branch => {
            dispatch({
                type: ADD_DEPARTMENT,
                payload: branch.data.data
            });
           // dispatch(returnErrors(branch.data.message, branch.status));
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })

 }
export const updateDepartment = (data, id) => (dispatch) => {
    axios.put(`/api/department/${id}`, data,  )
        .then(branch => {
            dispatch({
                type: ADD_DEPARTMENT,
                payload: branch.data.data
            });
           // dispatch(returnErrors(branch.data.message, branch.status));
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })

}
export const deleteDepartment = (id) => (dispatch) => {

    axios.delete(`/api/department/${id}`,  )
        .then(groups => {
            dispatch({
                type: ADD_DEPARTMENT,
                payload: groups.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
