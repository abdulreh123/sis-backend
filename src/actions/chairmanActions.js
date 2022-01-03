import {
    GET_CHAIRMANS,
} from './types';
import axios from 'axios';
import { returnErrors } from "./errorActions";
//import Cookies from 'js-cookie';


export const fetchChairman = () => dispatch => {
    axios.get(`/api/chairman`,  )
        .then(api => {
            dispatch({
                type: GET_CHAIRMANS,
                payload: api.data.data
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data.message, error.response.status));
        })
}
// export const getBuildings = (id) => dispatch => {
//     axios.get(`/api/buildings/${id}`,  )
//         .then(buildings => {
//             dispatch({
//                 type: ADD_BUILDINGS,
//                 payload: buildings.data.data
//             });
//         })
//         .catch(error => {
//             dispatch(returnErrors(error.response.data.message, error.response.status));
//         })
// }
// export const AddBuildings = (data) => (dispatch) => {
//     axios.post("/api/buildings/create", data,  )
//         .then(buildings => {
//             dispatch({
//                 type: ADD_BUILDINGS,
//                 payload: buildings.data.data
//             });
//             dispatch(returnErrors(buildings.data.message, buildings.status));
//         })
//         .catch(error => {
//             dispatch(returnErrors(error.response.data.message, error.response.status));
//         })

//  }
// export const updateBuildings = (data, id) => (dispatch) => {
//     axios.put(`/api/buildings/${id}`, data,  )
//         .then(buildings => {
//             dispatch({
//                 type: ADD_BUILDINGS,
//                 payload: buildings.data.data
//             });
//            dispatch(returnErrors(buildings.data.message, buildings.status));
//         })
//         .catch(error => {
//             dispatch(returnErrors(error.response.data.message, error.response.status));
//         })

// }
// export const deleteBuildings = (id) => (dispatch) => {

//     axios.delete(`/api/buildings/${id}`,  )
//         .then(buildings => {
//             dispatch({
//                 type: ADD_BUILDINGS,
//                 payload: buildings.data.data
//             });
//         })
//         .catch(error => {
//             dispatch(returnErrors(error.response.data.message, error.response.status));
//         })
// }
