import { SET_FILTER } from "../types";

export const filterData = selectedFilter => {
  return {
    type: SET_FILTER,
    payload: selectedFilter
  };
};
