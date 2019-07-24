export const INCREMENTAR_CONTADOR = 'INCREMENTAR_CONTADOR';
export const DECREMENTAR_CONTADOR = 'DECREMENTAR_CONTADOR';

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