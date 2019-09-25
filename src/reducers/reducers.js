import * as actionTypes from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_ENTRY:
      return [...state, Object.assign({}, action.entry)];

    case actionTypes.DELETE_ENTRY:
      return state.filter((data, i) => i !== action.index);

    case actionTypes.RESET_ENTRIES:
      return (state = []);

    default:
      return state;
  }
};
