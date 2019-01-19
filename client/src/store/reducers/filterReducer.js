import { SET_FILTER } from "../types";

const initialState = {
  filter: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
}
