import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}

// podesavanje storea
// kreira store sa pocetnim vrednostima
// sa definisanom lokacijom reducera

// potrebno za const store u indexu