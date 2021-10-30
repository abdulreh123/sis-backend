import { returnErrors } from "./errorActions";
import {
    GET_PAYMENT,
    ADD_PAYMENT,
} from './types';
import axios from 'axios';
//import Cookies from 'js-cookie';


export const fetchPayment = () => dispatch => {
    axios.get(`/api/payments`,  )
        .then(api => {
            dispatch({
                type: GET_PAYMENT,
                payload: api.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
export const getpayment = (id) => dispatch => {
    axios.get(`/api/payments/${id}`,  )
        .then(payment => {
            dispatch({
                type: ADD_PAYMENT,
                payload: payment.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
       })
}
export const getpaymentStudent = (id) => dispatch => {
    axios.get(`/api/payments/student/${id}`,  )
        .then(payment => {
            dispatch({
                type: GET_PAYMENT,
                payload: payment.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
       })
}
export const Addpayment = (data,uploads) => (dispatch) => {
    const fd = new FormData()
    if(uploads && uploads.length > 0){
        for (let i = 0; i < uploads.length; i++) {
            fd.append(`files[${i}]`, uploads[i])
        }
    }
    fd.append("document", JSON.stringify(data));
    axios.post("/api/payments/create", fd,  )
        .then(payment => {
            dispatch({
                type: ADD_PAYMENT,
                payload: payment.data.data
            });
           dispatch(returnErrors(payment.data.message, payment.status));
        })
         .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
         })

 }
export const updatepayment = (data, id) => (dispatch) => {
    axios.put(`/api/payments/${id}`, data,  )
        .then(payment => {
            dispatch({
                type: ADD_PAYMENT,
                payload: payment.data.data
            });
           dispatch(returnErrors(payment.data.message, payment.status));
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })

}
export const deletepayment = (id) => (dispatch) => {

    axios.delete(`/api/payments/${id}`,  )
        .then(payment => {
            dispatch({
                type: ADD_PAYMENT,
                payload: payment.data.data
            });
        })
       .catch(error => {
        dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
