import {
  GET_PELIS, RECORD_PELI_ID, RESET_PELI_ID, SET_PELI_NOT_FOUND
} from '../actions/pelis-actions';

const estadoInicial = {
  pelis: [],
  peliId: null,
  peliIdNotFound: false,
}

export const pelis = (state = estadoInicial, action) => {
  switch(action.type) {
    case GET_PELIS:
      return {
        ...state,
        pelis: action.pelis
      }
    case SET_PELI_NOT_FOUND:
      return {
        ...state,
        peliIdNotFound: action.value
      }
    case RECORD_PELI_ID:
      return {
        ...state,
        peliId: action.peli
      }
    case RESET_PELI_ID:
      return {
        ...state,
        peliId: null
      }
    case SET_PELI_NOT_FOUND:
      return {
        ...state,
        peliIdNotFound: action.value
      }
    default: 
      return state;
  }
}