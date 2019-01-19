import {
  SET_PROPERTY,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_ALL_PROPERTIES,
  SET_TOTAL_COUNT
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
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
  }
};

export const updateProperty = propertyDetails => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });

  try {
    const property = await axios.post("/api/property/update", propertyDetails);
    dispatch({
      type: SET_PROPERTY,
      payload: property.data
    });
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteProperty = id => async dispatch => {
  try {
    const msg = await axios.delete("/api/property/delete", {
      params: {
        id: id
      }
    });
    console.log(msg.data);
    dispatch(getAllProperties(1, 5, "all"));
  } catch (err) {
    console.log(err);
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

    const totalCount = await axios.get("/api/property/", {
      params: { filter: selectedFilter }
    });

    dispatch({
      type: SET_TOTAL_COUNT,
      payload: totalCount.data
    });

    dispatch({
      type: SET_ALL_PROPERTIES,
      payload: propertiesList.data
    });
  } catch (err) {}
};

export const getProperty = (id, history) => async dispatch => {
  try {
    let property = await axios.get(`/api/property/${id}`);

    !property && history.push("/not-found");

    const profile = await axios.get(`/api/profile/${property.data.user._id}`);

    property.data.userDetails = profile.data;

    property &&
      dispatch({
        type: SET_PROPERTY,
        payload: property.data
      });
  } catch (err) {
    history.push("/not-found");
  }
};
