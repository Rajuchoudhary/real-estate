import { SET_PROPERTY, SET_ALL_PROPERTIES } from "../types";

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
    case SET_ALL_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
