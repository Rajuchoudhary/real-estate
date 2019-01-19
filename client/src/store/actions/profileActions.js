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
  try {
    const profile = await axios.get(`/api/profile/${id}`);

    const propertyList = await axios.get(
      `/api/user/property/${profile.data.user._id}`
    );

    profile.data.properties = propertyList.data;

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

    let Profile2 = profile.data.profile;
    let newProfile = {
      ...Profile2,
      propertyCount: profile.data.propertyCount
    };

    dispatch(setProfile(newProfile));
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
