import { SET_PROPERTY } from "../types";
import axios from "axios";

export const addProperty = propertyDetails => async disptach => {
  try {
    const property = await axios.post("/api/property/add", propertyDetails);
    console.log(property);
  } catch (err) {
    console.log(err.response.data);
  }
};
