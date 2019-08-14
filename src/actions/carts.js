export const ADD_CARTS = 'ADD_CARTS';
export const REMOVE_CARTS = 'REMOVE_CARTS';

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