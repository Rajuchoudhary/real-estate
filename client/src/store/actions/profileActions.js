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

export const getProfile = (id, history) => async dispatch => {
  console.log("agent id", id);

  try {
    const profile = await axios.get(`/api/profile/${id}`);

    const propertyList = await axios.get(
      `/api/user/property/${profile.data.user._id}`
    );
    console.log("user id is this ", propertyList.data);

    profile.data.properties = propertyList.data;

    console.log(profile.data);

    dispatch(setProfile(profile.data));
  } catch (err) {
    history.push("/not-found");
    dispatch({
      type: SET_ERRORS,
      payload: err.response
    });
  }
};

export const getCurrentProfile = () => async dispatch => {
  try {
    const profile = await axios.get("/api/profile/user/current");
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
