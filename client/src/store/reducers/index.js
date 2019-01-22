import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import propertyReducer from "./propertyReducer";

export default combineReducers({
  message: messageReducer,
  errors: errorReducer,
  auth: authReducer,
  profile: profileReducer,
  property: propertyReducer
});
