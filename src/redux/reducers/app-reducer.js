
import {
  UPDATE_PAGE,
  START_LOADING,
  STOP_LOADING,
  UPDATE_SEGMENTS
} from '../actions/app-actions';

const initialState = {
  page: 'home',
  pageSection: '',
  pageParameter: '',
  loading: false,
}

export const app = (state = initialState, action) => {
  switch(action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      }
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      }
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page
      }
    case UPDATE_SEGMENTS:
      return {
        ...state,
        pageSection: action.pageSection,
        pageParameter: action.pageParameter
      }
    default:
      return state;
  }
}

