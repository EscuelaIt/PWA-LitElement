export const INCREMENTAR_CONTADOR = 'INCREMENTAR_CONTADOR';
export const DECREMENTAR_CONTADOR = 'DECREMENTAR_CONTADOR';
export const UPDATE_PAGE = 'UPDATE_PAGE';

export const incrementarContador = () => {
  return {
    type: INCREMENTAR_CONTADOR
  }
}

export const decrementarContador = () => {
  return {
    type: DECREMENTAR_CONTADOR
  }
}

export const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  }
}

export const navigateDelay = (page) => (dispatch) => {
  dispatch(decrementarContador());
  setTimeout(() => {
    dispatch(updatePage(page));
  }, 3000);
}
