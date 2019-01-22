import {
  SET_PROFILE,
  SET_ERRORS,
  SET_ALL_PROPERTIES,
  SET_TOTAL_COUNT,
  CLEAR_PROPERTY
} from "../types";
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

    const propertyList = await axios.get(`/api/user/property/${id}`);

    dispatch({
      type: SET_TOTAL_COUNT,
      payload: { totalCount: propertyList.data.length }
    });

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
    const profileData = await axios.get("/api/profile/user/current");

    dispatch({
      type: SET_TOTAL_COUNT,
      payload: profileData.data
    });

    dispatch(setProfile(profileData.data.profile));
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getUserPropertyList = (
  currentPage,
  pageSize
) => async dispatch => {
  try {
    const propertiesList = await axios.get("/api/user/property/all", {
      params: { currentPage, pageSize }
    });

    const totalCount = await axios.get("/api/user/propertyCount");

    dispatch({
      type: SET_TOTAL_COUNT,
      payload: totalCount.data
    });

    dispatch({
      type: SET_ALL_PROPERTIES,
      payload: propertiesList.data
    });
  } catch (err) {
    dispatch({
      type: CLEAR_PROPERTY
    });
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
