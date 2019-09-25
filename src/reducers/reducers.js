import * as actionTypes from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    
    case actionTypes.CREATE_NEW_ENTRY:
      return [...state, Object.assign({}, action.entry)];

    case actionTypes.DELETE_ENTRY:
      return state.filter((data, i) => i !== action.index);

    case actionTypes.RESET_ENTRIES:
        return state = []

    default:
      return state;
  }
};

// ovaj reducer gleda koja je akcija pozvana po action.type
// za odredjeni slucaj - case
// za create case dodaje na trenutni state sa vrednostima
// kopija objekta object.assign i po akciji entry

// ne mutira se vrednost statea direktno
// vec vracamo novu kopiju statea koja ima novu vrednost
