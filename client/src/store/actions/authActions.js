import { SET_ERRORS, SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

export const registerUser = (userData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/user/register", userData);

    if (res) {
      history.push("/login");
    }
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
  }
};

export const loginUser = userData => async dispatch => {
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
    console.log(error.response.data);
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
