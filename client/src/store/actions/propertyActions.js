import {
  SET_PROPERTY,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_ALL_PROPERTIES
} from "../types";
import axios from "axios";

export const addProperty = propertyDetails => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
  try {
    const property = await axios.post("/api/property/add", propertyDetails);
    dispatch({
      type: SET_PROPERTY,
      payload: property.data
    });
  } catch (err) {
    console.log(err.response.data);

    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getAllProperties = (
  currentPage,
  pageSize,
  selectedFilter
) => async dispatch => {
  try {
    const propertiesList = await axios.get("/api/property/all", {
      params: { currentPage, pageSize, selectedFilter }
    });
    dispatch({
      type: SET_ALL_PROPERTIES,
      payload: propertiesList.data
    });
  } catch (err) {}
};

export const getProperty = (id, history) => async dispatch => {
  console.log(id);

  try {
    let property = await axios.get(`/api/property/${id}`);
    console.log(property);
    !property && history.push("/not-found");

    console.log(property.data.user._id);

    const profile = await axios.get(`/api/profile/${property.data.user._id}`);

    property.data.userDetails = profile.data;

    property &&
      dispatch({
        type: SET_PROPERTY,
        payload: property.data
      });
  } catch (err) {
    history.push("/not-found");
    console.log(err.response.data);
  }
};
