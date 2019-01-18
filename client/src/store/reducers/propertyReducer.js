import { SET_PROPERTY } from "../types";

const initialState = {
  property: {},
  properties: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PROPERTY:
      return {
        ...state,
        property: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
