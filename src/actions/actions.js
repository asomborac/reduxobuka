import * as actionTypes from "./actionTypes";

export const createEntry = entry => {
  return {
    type: actionTypes.CREATE_NEW_ENTRY,
    entry: entry
  };
};

export const deleteEntry = index => {
  return {
    type: actionTypes.DELETE_ENTRY,
    index: index
  };
};

export const resetEntries = e => {
  return {
    type: actionTypes.RESET_ENTRIES
  };
};
