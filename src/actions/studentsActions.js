import {
    GET_STUDENTS,
    ADD_STUDENT,
    GET_TRANSCRIPT,
    GET_STUDENT
} from './types';
import axios from 'axios';
//import Cookies from 'js-cookie';


export const fetchStudents = () => dispatch => {
    axios.get(`/api/student`,  )
        .then(api => {
            dispatch({
                type: GET_STUDENTS,
                payload: api.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
export const getStudent = (id) => dispatch => {
    axios.get(`/api/student/${id}`,  )
        .then(branch => {
            dispatch({
                type: GET_STUDENT,
                payload: branch.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
export const getTranscript = (id) => dispatch => {
    axios.get(`/api/student/transcript/${id}`,  )
        .then(branch => {
            dispatch({
                type: GET_TRANSCRIPT,
                payload: branch.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
export const AddStudents = (data) => (dispatch) => {
    axios.post("/api/student/create", data,  )
        .then(branch => {
            dispatch({
                type: ADD_STUDENT,
                payload: branch.data.data
            });
           // dispatch(returnErrors(branch.data.message, branch.status));
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })

 }
export const updateStudent = (data, id) => (dispatch) => {
    axios.put(`/api/student/${id}`, data,  )
        .then(branch => {
            dispatch({
                type: ADD_STUDENT,
                payload: branch.data.data
            });
          //  dispatch(returnErrors(branch.data.message, branch.status));
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })

}
export const deleteBranch = (id) => (dispatch) => {

    axios.delete(`/api/student/${id}`,  )
        .then(groups => {
            dispatch({
                type: ADD_STUDENT,
                payload: groups.data.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })
}
