import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import propertyReducer from "./propertyReducer";

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  profile: profileReducer,
  property: propertyReducer
});
