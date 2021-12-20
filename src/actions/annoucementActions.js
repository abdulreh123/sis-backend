import { returnErrors } from "./errorActions";
import {
    GET_ANNOUNCEMENT,
    ADD_ANNOUNCEMENT,
} from './types';
import axios from 'axios';
//import Cookies from 'js-cookie';


export const fetchAnnouncements = () => dispatch => {
    axios.get(`/api/announcement`,  )
        .then(api => {
            dispatch({
                type: GET_ANNOUNCEMENT,
                payload: api.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getAnnouncements = (id) => dispatch => {
    axios.get(`/api/announcement/${id}`,  )
        .then(advisor => {
            dispatch({
                type: ADD_ANNOUNCEMENT,
                payload: advisor.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
       })
}
export const getDashboardAnnouncements = () => dispatch => {
    axios.get(`/api/announcement/dashboard/announcement`,  )
        .then(advisor => {
            dispatch({
                type: GET_ANNOUNCEMENT,
                payload: advisor.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
       })
}
export const getStudentAnnouncements = (id) => dispatch => {
    axios.get(`/api/announcement/student/${id}`,  )
        .then(advisor => {
            dispatch({
                type: GET_ANNOUNCEMENT,
                payload: advisor.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
       })
}
export const AddAnnouncements = (data) => (dispatch) => {
    axios.post("/api/announcement/create", data,  )
        .then(advisor => {
            dispatch({
                type: ADD_ANNOUNCEMENT,
                payload: advisor.data.data
            });
           dispatch(returnErrors(advisor.data.message, advisor.status));
        })
         .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
         })

 }
export const updateAnnouncements = (data, id) => (dispatch) => {
    axios.put(`/api/announcement/${id}`, data,  )
        .then(advisor => {
            dispatch({
                type: ADD_ANNOUNCEMENT,
                payload: advisor.data.data
            });
           dispatch(returnErrors(advisor.data.message, advisor.status));
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const deleteAnnouncements = (id) => (dispatch) => {

    axios.delete(`/api/advisor/${id}`,  )
        .then(advisor => {
            dispatch({
                type: ADD_ANNOUNCEMENT,
                payload: advisor.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
