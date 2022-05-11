import {
    GET_FACULTY,
    ADD_FACULTY
} from './types';
import axios from 'axios';
//import Cookies from 'js-cookie';


export const fetchFaculty = () => dispatch => {
    axios.get(`/api/faculty`,  )
        .then(api => {
            dispatch({
                type: GET_FACULTY,
                payload: api.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
export const getFaculty = (id) => dispatch => {
    axios.get(`/api/faculty/${id}`,  )
        .then(branch => {
            dispatch({
                type: ADD_FACULTY,
                payload: branch.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
export const AddFaculty = (data) => (dispatch) => {
    axios.post("/api/faculty/create", data,  )
        .then(branch => {
            dispatch({
                type: ADD_FACULTY,
                payload: branch.data.data
            });
           // dispatch(returnErrors(branch.data.message, branch.status));
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })

 }
export const updateFaculty = (data, id) => (dispatch) => {
    axios.put(`/api/faculty/${id}`, data,  )
        .then(branch => {
            dispatch({
                type: ADD_FACULTY,
                payload: branch.data.data
            });
           // dispatch(returnErrors(branch.data.message, branch.status));
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })

}
export const deleteFaculty = (id) => (dispatch) => {

    axios.delete(`/api/faculty/${id}`,  )
        .then(groups => {
            dispatch({
                type: ADD_FACULTY,
                payload: groups.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
