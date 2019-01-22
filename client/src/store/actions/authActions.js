import {
  SET_ERRORS,
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  CLEAR_ERRORS,
  CLEAR_MESSAGE,
  SET_MESSAGE
} from "../types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

export const registerUser = (userData, history) => async dispatch => {
  dispatch({
    type: CLEAR_MESSAGE
  });
  dispatch({
    type: CLEAR_ERRORS
  });
  try {
    const res = await axios.post("/api/user/register", userData);

    console.log(res.data);

    dispatch({
      type: SET_MESSAGE,
      payload: res.data.msg
    });
    dispatch({
      type: CLEAR_MESSAGE
    });
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
    dispatch({
      type: CLEAR_ERRORS
    });
  }
};

export const loginUser = userData => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
  try {
    const res = await axios.post("/api/user/login", userData);
    if (res.data) {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);

      dispatch(setCurrentUser(decoded));
    }
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER,
    payload: {}
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const clearError = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
};

export const clearMessage = () => dispatch => {
  dispatch({
    type: CLEAR_MESSAGE
  });
};
