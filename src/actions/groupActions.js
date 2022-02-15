import { returnErrors } from "./errorActions";
import {
    GET_GROUPS,
    ADD_GROUP,
    GET_DEPARTMENT_GROUP,
    GET_YEAR
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
export const checkClash = (ids) => dispatch => {
    axios.get(`/api/group/clash/[${ids}]`,  )
        .then(group => {
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
export const OfferCourses = () => (dispatch) => {
    axios.post("/api/group/offer-courses",  )
        .then(group => {
            dispatch({
                type: ADD_GROUP,
            });
           dispatch(returnErrors("Courses Offered", group.status));
        })
         .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
         })

 }
export const getYear = () => (dispatch) => {
    axios.get("/api/group/year-active",  )
        .then(group => {
            dispatch({
                type: GET_YEAR,
                payload: group.data.data.data.year
            });
        })
         .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
         })

 }
export const setYear = (data) => (dispatch) => {
    console.log(data)
    axios.post("/api/group/active-year", data )
        .then(group => {
            dispatch({
                type: GET_YEAR,
                payload: group.data.data.data.year
            });
           dispatch(returnErrors("year updated", group.status));
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
