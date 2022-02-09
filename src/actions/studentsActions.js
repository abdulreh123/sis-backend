import { returnErrors } from "./errorActions";
import {
    GET_STUDENTS,
    GET__ADVISOR_STUDENTS,
    ADD_STUDENT,
    GET_AUTO_COURSE,
    GET_TRANSCRIPT,
    GET_STUDENT,
    COURSES_TO_APPROVE,
    COURSE_APPROVED,
    GET_STUDENT_STATS,
    GET_TIMETABLE,
    GET_CHAIRMAN_STATS,
    GET_PREDICTED_CGPA
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
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getChairmanStat = (id) => dispatch => {
    axios.get(`/api/chairman/statistics/${id}`,  )
        .then(api => {
            dispatch({
                type: GET_CHAIRMAN_STATS,
                payload: api.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getStudent = (id) => dispatch => {
    axios.get(`/api/student/${id}`,  )
        .then(branch => {
            dispatch({
                type: GET_STUDENT,
                payload: branch.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getTimeTable = (id) => dispatch => {
    axios.get(`/api/student/time-table/${id}?year=2021-2022 - Fall`,  )
        .then(branch => {
            dispatch({
                type: GET_TIMETABLE,
                payload: branch.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getStudentStats = (id,departmentId) => dispatch => {
    axios.get(`/api/student/stats/${id}/${departmentId}`,  )
        .then(branch => {
            dispatch({
                type: GET_STUDENT_STATS,
                payload: branch.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getStudentByAdvisor = (id) => dispatch => {
    axios.get(`/api/student/advisor/${id}`,  )
        .then(branch => {
            dispatch({
                type: GET__ADVISOR_STUDENTS,
                payload: branch.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getTranscript = (id) => dispatch => {
    axios.get(`/api/student/transcript/${id}`,  )
        .then(branch => {
            dispatch({
                type: GET_TRANSCRIPT,
                payload: branch.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
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
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

 }
export const updateStudent = (data, id) => (dispatch) => {
    axios.put(`/api/student/${id}`, data,  )
        .then(branch => {
            dispatch({
                type: ADD_STUDENT,
                payload: branch.data.data
            });
           dispatch(returnErrors(branch.data.message, branch.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const updateGrade = (data, studentId,courseID) => (dispatch) => {
    axios.put(`/api/student/${studentId}/${courseID}`, data,  )
        .then(branch => {
            dispatch({
                type: ADD_STUDENT,
                payload: branch.data.data
            });
           dispatch(returnErrors(branch.data.message, branch.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const AddRemoveCourses = (id, data) => (dispatch) => {
    axios.put(`/api/student/add/remove/${id}`, data,  )
        .then(branch => {
            dispatch({
                type: ADD_STUDENT,
                payload: branch.data.data
            });
           dispatch(returnErrors(branch.data.message, branch.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const predictedCgpa = (cgpas) => (dispatch) => {
    axios.get(`http://app.neu.edu.tr:7003/predict/%7Bvalue%7D?name=[${cgpas}]`, )
        .then(branch => {
            dispatch({
                type: GET_PREDICTED_CGPA,
                payload: branch.data
            });
        })
        // .catch(error => {
        //     dispatch(returnErrors(error.response.data.message, error.response.status));
        // })

}
export const automate = (id, year) => (dispatch) => {
    axios.get(`/api/student/automate/${id}?year=${year}`, )
        .then(branch => {
            dispatch({
                type: GET_AUTO_COURSE,
                payload: branch.data.data
            });
          // dispatch(returnErrors(branch.data.message, branch.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const CoursesApproval = (id) => (dispatch) => {
    axios.get(`/api/student/get-approve/${id}`, )
        .then(branch => {
            dispatch({
                type: COURSES_TO_APPROVE,
                payload: branch.data.data
            });
         //  dispatch(returnErrors(branch.data.message, branch.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const Approval = (studentId,courseId) => (dispatch) => {
    axios.put(`/api/student//approve/${studentId}/${courseId}`, )
        .then(branch => {
            dispatch({
                type: COURSE_APPROVED,
                payload: branch.data.data
            });
           dispatch(returnErrors(branch.data.message, branch.status));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const deleteStudent = (id) => (dispatch) => {

    axios.delete(`/api/student/${id}`,  )
        .then(groups => {
            dispatch({
                type: ADD_STUDENT,
                payload: groups.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
