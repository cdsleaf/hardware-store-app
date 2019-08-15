export const ADD_CARTS = 'ADD_CARTS';
export const REMOVE_CARTS = 'REMOVE_CARTS';
export const RESTORE_CARTS_FROM_STORAGE = 'RESTORE_CARTS_FROM_STORAGE';

export function addCarts(product) {
  return {
    type: ADD_CARTS,
    product
  }
}

export function removeCarts(productName) {
  return {
    type: REMOVE_CARTS,
    productName
  }
}

export function restoreCarts(carts){
  return {
    type: RESTORE_CARTS_FROM_STORAGE,
    carts
  }
}
