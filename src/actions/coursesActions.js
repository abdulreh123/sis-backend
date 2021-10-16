import {
    GET_COURSES,
    ADD_COURSE
} from './types';
import axios from 'axios';
//import Cookies from 'js-cookie';


export const fetchCourses = () => dispatch => {
    axios.get(`/api/course`,  )
        .then(api => {
            dispatch({
                type: GET_COURSES,
                payload: api.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
export const getCourse = (id) => dispatch => {
    axios.get(`/api/course/${id}`,  )
        .then(course => {
            dispatch({
                type: ADD_COURSE,
                payload: course.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
export const AddCourse = (data) => (dispatch) => {
    axios.post("/api/course/create", data,  )
        .then(course => {
            dispatch({
                type: ADD_COURSE,
                payload: course.data.data
            });
           // dispatch(returnErrors(course.data.message, course.status));
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })

 }
export const updateCourse = (data, id) => (dispatch) => {
    axios.put(`/api/course/${id}`, data,  )
        .then(course => {
            dispatch({
                type: ADD_COURSE,
                payload: course.data.data
            });
           // dispatch(returnErrors(course.data.message, course.status));
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })

}
export const deleteCourse = (id) => (dispatch) => {

    axios.delete(`/api/course/${id}`,  )
        .then(course => {
            dispatch({
                type: ADD_COURSE,
                payload: course.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
