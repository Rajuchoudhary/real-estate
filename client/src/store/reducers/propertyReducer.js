import {
  SET_PROPERTY,
  SET_ALL_PROPERTIES,
  SET_TOTAL_COUNT,
  CLEAR_PROPERTY
} from "../types";

const initialState = {
  property: {},
  properties: [],
  totalCount: "",
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
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload.totalCount
      };
    case CLEAR_PROPERTY:
      return {
        property: {},
        properties: [],
        totalCount: "",
        loading: false
      };
    default:
      return state;
  }
}
