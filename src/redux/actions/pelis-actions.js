import {
  startLoading,
  stopLoading,
  navigate,
  positiveFeedback,
  negativeFeedback
} from './app-actions';
import { store } from '../store';

export const urlRestServer = 'http://localhost:3333';
export const urlPelisResource = urlRestServer + '/peliculas';

export const GET_PELIS = 'GET_PELIS';
export const RECORD_PELI_ID = 'RECORD_PELI_ID';
export const RESET_PELI_ID = 'RESET_PELI_ID';
export const SET_PELI_NOT_FOUND = 'SET_PELI_NOT_FOUND';

export const getPelis = () => (dispatch) => {
  dispatch(startLoading());
  axios.get(urlPelisResource)
    .then((response) => {
      // handle success
      dispatch(savePelis(response.data));
    })
    .catch((error) => {
      dispatch(negativeFeedback('No hemos podido recuperar las peliculas'));
    })
    .finally(() => {
      dispatch(stopLoading())
    });
} 

export const peliInsert = (peli) => (dispatch) => {
  dispatch(startLoading());
  axios.post(urlPelisResource, peli, {
    headers: {
      "token": store.getState().user.token
    }
  })
    .then(response => {
      dispatch(getPelis());
      dispatch(positiveFeedback('peli insertada correctamente'));
      dispatch(navigate('/pelis/list'));
    })
    .catch((err) => {
      dispatch(negativeFeedback('No hemos podido insertar la pelicula'));
      dispatch(stopLoading());
    });
}

export const getPeliId = (id) => dispatch => {
  dispatch(startLoading());
  dispatch(peliNotFound(false));
  axios.get(`${urlPelisResource}/${id}`)
    .then(response => {
      dispatch(savePeliId(response.data));
    })
    .catch( error => {
      let status = error.response.status;
      if(status == 404) {
        dispatch(peliNotFound(true));
      }
      dispatch(negativeFeedback('Película no existe'))
    })
    .finally( () => {
      dispatch(stopLoading());
    })
}

export const peliEdit = (peli) => (dispatch) => {
  dispatch(startLoading());
  axios.put(`${urlPelisResource}/${peli.id}`, peli)
    .then( response => {
      dispatch(getPelis());
      dispatch(positiveFeedback('peli editada correctamente'));
    })
    .catch( err => {
      dispatch(negativeFeedback('error al editar'));
      dispatch(stopLoading());
    });
}

export const peliDelete = (peli) => (dispatch) => {
  dispatch(startLoading());
  axios.delete(`${urlPelisResource}/${peli.id}`)
    .then(response => {
      dispatch(getPelis());
      dispatch(positiveFeedback('peli Borrada correctamente'));
    })
    .catch(err => {
      dispatch(negativeFeedback('error al borrar'));
      dispatch(stopLoading());
    });
}

const savePeliId = (peli) => {
  return {
    type: RECORD_PELI_ID,
    peli
  }
}

const savePelis = (pelis) => {
  return {
    type: GET_PELIS,
    pelis
  }
}

export const peliNotFound = (notFound) => {
  return {
    type: SET_PELI_NOT_FOUND,
    value: notFound
  }
}

export const resetPeliId = () => {
  return {
    type: RESET_PELI_ID
  }
}
