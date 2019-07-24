
import {
  INCREMENTAR_CONTADOR,
  DECREMENTAR_CONTADOR,
} from '../actions/counter-actions';

const initialState = {
  counter: 0,
}

export const counter = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENTAR_CONTADOR:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case DECREMENTAR_CONTADOR:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state;
  }
}

