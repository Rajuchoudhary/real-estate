import { SET_PROFILE, SET_ERRORS } from "../types";
import axios from "axios";

export const updateProfile = profileDetails => async dispatch => {
  try {
    const profile = await axios.post("/api/profile/update", profileDetails);
    dispatch(setProfile(profile.data));
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProfile = id => async dispatch => {
  try {
    const profile = await axios.get(`/api/profile/${id}`);
    dispatch(setProfile(profile.data));
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
  }
};

export const setProfile = profile => {
  return {
    type: SET_PROFILE,
    payload: profile
  };
};
