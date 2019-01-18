import { SET_PROPERTY, SET_ERRORS, CLEAR_ERRORS } from "../types";
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
