import { returnErrors } from "./errorActions";
import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
} from "./types";
import axios from "axios";
import Cookies from 'js-cookie';;

export const userLogin = (data) => (dispatch) => { 
  dispatch({
    type: USER_LOADING,
  });
  // make call to candidate authentication API
  axios
    .post("/api/auth/user", data)
    .then((user) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user.data.data,
      });
    })
    .catch((error) => {
     dispatch(returnErrors(error.response.data.message, error.response.status));
      dispatch({ type: LOGIN_FAIL });
    });
};


export const getCurrentUser = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
  // make call to candidate authentication API
  axios
    .get("/api/auth/access")
    .then((user) => {
      dispatch({
        type: USER_LOADED,
        payload: user.data.data,
      });
    })
    .catch((error) => { 
      dispatch({
        type: LOGOUT_SUCCESS,
      });
     dispatch(returnErrors(error.response.data.message, error.response.status));
    });
};
export const logOutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

//Setup config/headers and token
export const tokenConfig = () => {
  // Get token from localstorage
  const initCookie = Cookies.get("__SOSAR_AUTH");
  const token = initCookie?.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["sis-auth-token"] = token;
  }

  return config;
};
