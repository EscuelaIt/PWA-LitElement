import {
  UPDATE_USER,
} from '../actions/user-actions';

const initialState = {
  loggedIn: false,
  token: '',
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        loggedIn: action.data.loggedIn,
        token: action.data.token
      }
    default:
      return state;
  }
}