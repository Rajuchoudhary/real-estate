import { SET_MESSAGE, CLEAR_MESSAGE } from "../types";

const initialState = {
  msg: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        msg: action.payload
      };
    case CLEAR_MESSAGE:
      return {
        msg: ""
      };
    default:
      return state;
  }
}
