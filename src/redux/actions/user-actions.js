export const UPDATE_USER = 'UPDATE_USER';

import { 
  startLoading,
  stopLoading,
  negativeFeedback,
  positiveFeedback,
} from './app-actions';

let userServiceUrl = 'http://localhost:3333/';
//import { store } from '../store';

export const userRegister = (userData) => dispatch => {
  dispatch(startLoading());
  axios.post(userServiceUrl + 'sign-in', userData)
    .then( response => {
      console.log('response register', response);
      dispatch(positiveFeedback('Usuario creado correctamente'));
    })
    .catch(err => {
      console.log('err', err);
      dispatch(negativeFeedback('Usuario no pudo ser creado'))
    })
    .then( () => {
      dispatch(stopLoading());
    })
}

export const userLogin = (userData) => dispatch => {
  dispatch(startLoading());
  axios.post(userServiceUrl + 'login', userData)
    .then(response => {
      console.log('response login', response);
      dispatch(positiveFeedback('Inicio de sesión completado'));
      dispatch(updateUser({
        loggedIn: true,
        token: response.data,
      }))
    })
    .catch(err => {
      console.log('err', err);
      dispatch(negativeFeedback('Error al iniciar sesión'))
    })
    .then(() => {
      dispatch(stopLoading());
    })
}

export const logout = () => {
  return updateUser({
    loggedIn: false,
    token: '',
  })
}

export const updateUser = (userData) => {
  axios.defaults.headers.common['token'] = userData.token;
  return {
    type: UPDATE_USER,
    data: userData,
  }
}