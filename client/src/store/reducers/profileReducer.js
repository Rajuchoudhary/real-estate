import { SET_PROFILE } from "../types";

const initialState = {
  profile: null,
  profiles: null,
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
