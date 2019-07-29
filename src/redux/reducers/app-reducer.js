
import {
  UPDATE_PAGE,
  START_LOADING,
  STOP_LOADING,
  UPDATE_SEGMENTS,
  UPDATE_METADATA,
  SEND_FEEDBACK
} from '../actions/app-actions';

const initialState = {
  page: 'home',
  pageSection: '',
  pageParameter: '',
  loading: false,
  metadata: null,
  feedback: null,
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
    case UPDATE_METADATA:
      return {
        ...state,
        metadata: action.metadata
      }
    case SEND_FEEDBACK:
      console.log('en el reducer.... case send_feedback')
      return {
        ...state,
        feedback: action.feedback
      };
    default:
      return state;
  }
}

